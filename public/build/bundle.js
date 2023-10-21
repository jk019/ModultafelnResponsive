
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, cancelable, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */ Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            }
            catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
        targets.forEach((c) => c());
        render_callbacks = filtered;
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
        else if (callback) {
            callback();
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.59.2' }, detail), { bubbles: true }));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src\Modul.svelte generated by Svelte v3.59.2 */

    const file$2 = "src\\Modul.svelte";

    function create_fragment$2(ctx) {
    	let div1;
    	let div0;
    	let p0;
    	let t0;
    	let t1;
    	let p1;
    	let t2;
    	let t3;
    	let span;
    	let t4;
    	let t5;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			p0 = element("p");
    			t0 = text(/*gruppe*/ ctx[1]);
    			t1 = space();
    			p1 = element("p");
    			t2 = text(/*name*/ ctx[0]);
    			t3 = space();
    			span = element("span");
    			t4 = text(/*badge*/ ctx[2]);
    			t5 = text(" ECTS");
    			attr_dev(p0, "class", "Modulgruppe");
    			add_location(p0, file$2, 10, 4, 243);
    			attr_dev(p1, "class", "Modulname svelte-vyt7ev");
    			attr_dev(p1, "id", "Modulname");
    			add_location(p1, file$2, 11, 4, 284);
    			attr_dev(span, "class", "badge");
    			add_location(span, file$2, 12, 4, 336);
    			attr_dev(div0, "class", "card-body svelte-vyt7ev");
    			attr_dev(div0, "id", "ModulBody");
    			add_location(div0, file$2, 9, 2, 199);
    			attr_dev(div1, "class", "card");
    			add_location(div1, file$2, 7, 0, 94);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, p0);
    			append_dev(p0, t0);
    			append_dev(div0, t1);
    			append_dev(div0, p1);
    			append_dev(p1, t2);
    			append_dev(div0, t3);
    			append_dev(div0, span);
    			append_dev(span, t4);
    			append_dev(span, t5);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*gruppe*/ 2) set_data_dev(t0, /*gruppe*/ ctx[1]);
    			if (dirty & /*name*/ 1) set_data_dev(t2, /*name*/ ctx[0]);
    			if (dirty & /*badge*/ 4) set_data_dev(t4, /*badge*/ ctx[2]);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Modul', slots, []);
    	let { name } = $$props;
    	let { gruppe } = $$props;
    	let { badge } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (name === undefined && !('name' in $$props || $$self.$$.bound[$$self.$$.props['name']])) {
    			console.warn("<Modul> was created without expected prop 'name'");
    		}

    		if (gruppe === undefined && !('gruppe' in $$props || $$self.$$.bound[$$self.$$.props['gruppe']])) {
    			console.warn("<Modul> was created without expected prop 'gruppe'");
    		}

    		if (badge === undefined && !('badge' in $$props || $$self.$$.bound[$$self.$$.props['badge']])) {
    			console.warn("<Modul> was created without expected prop 'badge'");
    		}
    	});

    	const writable_props = ['name', 'gruppe', 'badge'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Modul> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('name' in $$props) $$invalidate(0, name = $$props.name);
    		if ('gruppe' in $$props) $$invalidate(1, gruppe = $$props.gruppe);
    		if ('badge' in $$props) $$invalidate(2, badge = $$props.badge);
    	};

    	$$self.$capture_state = () => ({ name, gruppe, badge });

    	$$self.$inject_state = $$props => {
    		if ('name' in $$props) $$invalidate(0, name = $$props.name);
    		if ('gruppe' in $$props) $$invalidate(1, gruppe = $$props.gruppe);
    		if ('badge' in $$props) $$invalidate(2, badge = $$props.badge);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [name, gruppe, badge];
    }

    class Modul extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { name: 0, gruppe: 1, badge: 2 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Modul",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get name() {
    		throw new Error("<Modul>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set name(value) {
    		throw new Error("<Modul>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get gruppe() {
    		throw new Error("<Modul>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set gruppe(value) {
    		throw new Error("<Modul>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get badge() {
    		throw new Error("<Modul>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set badge(value) {
    		throw new Error("<Modul>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Semester.svelte generated by Svelte v3.59.2 */

    const file$1 = "src\\Semester.svelte";

    function create_fragment$1(ctx) {
    	let div2;
    	let div1;
    	let div0;
    	let t0;
    	let t1;
    	let t2;
    	let span;
    	let t3;
    	let t4;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div1 = element("div");
    			div0 = element("div");
    			t0 = text(/*semesterNumber*/ ctx[1]);
    			t1 = text(" Semester");
    			t2 = space();
    			span = element("span");
    			t3 = text(/*totalCredits*/ ctx[0]);
    			t4 = text(" ECTS");
    			attr_dev(div0, "id", "text");
    			attr_dev(div0, "class", "svelte-5glz1t");
    			add_location(div0, file$1, 7, 4, 137);
    			attr_dev(span, "class", "badgeTotal");
    			add_location(span, file$1, 8, 4, 189);
    			attr_dev(div1, "class", "card-body");
    			add_location(div1, file$1, 6, 2, 107);
    			attr_dev(div2, "class", "card");
    			add_location(div2, file$1, 5, 0, 85);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div1);
    			append_dev(div1, div0);
    			append_dev(div0, t0);
    			append_dev(div0, t1);
    			append_dev(div1, t2);
    			append_dev(div1, span);
    			append_dev(span, t3);
    			append_dev(span, t4);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*semesterNumber*/ 2) set_data_dev(t0, /*semesterNumber*/ ctx[1]);
    			if (dirty & /*totalCredits*/ 1) set_data_dev(t3, /*totalCredits*/ ctx[0]);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Semester', slots, []);
    	let { totalCredits } = $$props;
    	let { semesterNumber } = $$props;

    	$$self.$$.on_mount.push(function () {
    		if (totalCredits === undefined && !('totalCredits' in $$props || $$self.$$.bound[$$self.$$.props['totalCredits']])) {
    			console.warn("<Semester> was created without expected prop 'totalCredits'");
    		}

    		if (semesterNumber === undefined && !('semesterNumber' in $$props || $$self.$$.bound[$$self.$$.props['semesterNumber']])) {
    			console.warn("<Semester> was created without expected prop 'semesterNumber'");
    		}
    	});

    	const writable_props = ['totalCredits', 'semesterNumber'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Semester> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('totalCredits' in $$props) $$invalidate(0, totalCredits = $$props.totalCredits);
    		if ('semesterNumber' in $$props) $$invalidate(1, semesterNumber = $$props.semesterNumber);
    	};

    	$$self.$capture_state = () => ({ totalCredits, semesterNumber });

    	$$self.$inject_state = $$props => {
    		if ('totalCredits' in $$props) $$invalidate(0, totalCredits = $$props.totalCredits);
    		if ('semesterNumber' in $$props) $$invalidate(1, semesterNumber = $$props.semesterNumber);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [totalCredits, semesterNumber];
    }

    class Semester extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { totalCredits: 0, semesterNumber: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Semester",
    			options,
    			id: create_fragment$1.name
    		});
    	}

    	get totalCredits() {
    		throw new Error("<Semester>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set totalCredits(value) {
    		throw new Error("<Semester>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get semesterNumber() {
    		throw new Error("<Semester>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set semesterNumber(value) {
    		throw new Error("<Semester>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\App.svelte generated by Svelte v3.59.2 */
    const file = "src\\App.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	return child_ctx;
    }

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[7] = list[i];
    	return child_ctx;
    }

    // (81:8) {#each group.modules as module}
    function create_each_block_2(ctx) {
    	let div;
    	let modul;
    	let current;

    	modul = new Modul({
    			props: {
    				name: /*module*/ ctx[7].name,
    				gruppe: /*group*/ ctx[4].group,
    				badge: /*module*/ ctx[7].credits
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(modul.$$.fragment);
    			attr_dev(div, "class", "col-sm");
    			add_location(div, file, 81, 8, 1895);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(modul, div, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(modul.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(modul.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(modul);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2.name,
    		type: "each",
    		source: "(81:8) {#each group.modules as module}",
    		ctx
    	});

    	return block;
    }

    // (78:6) {#each semester.semesterModules as group}
    function create_each_block_1(ctx) {
    	let div1;
    	let div0;
    	let t;
    	let current;
    	let each_value_2 = /*group*/ ctx[4].modules;
    	validate_each_argument(each_value_2);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t = space();
    			attr_dev(div0, "class", "row");
    			add_location(div0, file, 79, 8, 1829);
    			attr_dev(div1, "class", "col-sm");
    			add_location(div1, file, 78, 6, 1800);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(div0, null);
    				}
    			}

    			append_dev(div0, t);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*all*/ 1) {
    				each_value_2 = /*group*/ ctx[4].modules;
    				validate_each_argument(each_value_2);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div0, t);
    					}
    				}

    				group_outros();

    				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_2.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(78:6) {#each semester.semesterModules as group}",
    		ctx
    	});

    	return block;
    }

    // (72:2) {#each all as semester}
    function create_each_block(ctx) {
    	let div1;
    	let div0;
    	let semester;
    	let t0;
    	let t1;
    	let br;
    	let current;

    	semester = new Semester({
    			props: {
    				semesterNumber: /*semester*/ ctx[1].number
    			},
    			$$inline: true
    		});

    	let each_value_1 = /*semester*/ ctx[1].semesterModules;
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			create_component(semester.$$.fragment);
    			t0 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t1 = space();
    			br = element("br");
    			attr_dev(div0, "class", "col-sm");
    			add_location(div0, file, 73, 6, 1657);
    			attr_dev(div1, "class", "row");
    			add_location(div1, file, 72, 4, 1633);
    			add_location(br, file, 92, 4, 2116);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			mount_component(semester, div0, null);
    			append_dev(div1, t0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(div1, null);
    				}
    			}

    			insert_dev(target, t1, anchor);
    			insert_dev(target, br, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*all*/ 1) {
    				each_value_1 = /*semester*/ ctx[1].semesterModules;
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div1, null);
    					}
    				}

    				group_outros();

    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(semester.$$.fragment, local);

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(semester.$$.fragment, local);
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_component(semester);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(br);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(72:2) {#each all as semester}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let h1;
    	let t1;
    	let h40;
    	let t3;
    	let h41;
    	let t5;
    	let div0;
    	let t6;
    	let br0;
    	let br1;
    	let br2;
    	let br3;
    	let br4;
    	let br5;
    	let br6;
    	let br7;
    	let t7;
    	let div27;
    	let div14;
    	let div1;
    	let semester0;
    	let t8;
    	let div5;
    	let div4;
    	let div2;
    	let modul0;
    	let t9;
    	let div3;
    	let modul1;
    	let t10;
    	let div9;
    	let div8;
    	let div6;
    	let modul2;
    	let t11;
    	let div7;
    	let modul3;
    	let t12;
    	let div13;
    	let div12;
    	let div10;
    	let modul4;
    	let t13;
    	let div11;
    	let modul5;
    	let t14;
    	let p;
    	let t15;
    	let div26;
    	let div15;
    	let semester1;
    	let t16;
    	let div18;
    	let div17;
    	let div16;
    	let t17;
    	let div22;
    	let div21;
    	let div19;
    	let modul6;
    	let t18;
    	let div20;
    	let modul7;
    	let t19;
    	let div25;
    	let div24;
    	let div23;
    	let current;
    	let each_value = /*all*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	semester0 = new Semester({
    			props: { semesterNumber: "1", totalCredits: "27" },
    			$$inline: true
    		});

    	modul0 = new Modul({
    			props: {
    				name: "Modul 1",
    				gruppe: "Modulgruppe 1",
    				badge: "3"
    			},
    			$$inline: true
    		});

    	modul1 = new Modul({
    			props: {
    				name: "Modul 2",
    				gruppe: "Modulgruppe 1",
    				badge: "6"
    			},
    			$$inline: true
    		});

    	modul2 = new Modul({
    			props: {
    				name: "Modul 3",
    				gruppe: "Modulgruppe 2",
    				badge: "3"
    			},
    			$$inline: true
    		});

    	modul3 = new Modul({
    			props: {
    				name: "Modul 4",
    				gruppe: "Modulgruppe 2",
    				badge: "3"
    			},
    			$$inline: true
    		});

    	modul4 = new Modul({
    			props: {
    				name: "Modul 5",
    				gruppe: "Modulgruppe 3",
    				badge: "6"
    			},
    			$$inline: true
    		});

    	modul5 = new Modul({
    			props: {
    				name: "Modul 6",
    				gruppe: "Modulgruppe 3",
    				badge: "6"
    			},
    			$$inline: true
    		});

    	semester1 = new Semester({
    			props: { semesterNumber: "2", totalCredits: "12" },
    			$$inline: true
    		});

    	modul6 = new Modul({
    			props: {
    				name: "Modul 3",
    				gruppe: "Modulgruppe 2",
    				badge: "6"
    			},
    			$$inline: true
    		});

    	modul7 = new Modul({
    			props: {
    				name: "Modul 4",
    				gruppe: "Modulgruppe 2",
    				badge: "6"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Modultafel Bachelorstudiengang Wirtschaftsinformatik";
    			t1 = space();
    			h40 = element("h4");
    			h40.textContent = "Info Text";
    			t3 = space();
    			h41 = element("h4");
    			h41.textContent = "Info Text";
    			t5 = space();
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t6 = space();
    			br0 = element("br");
    			br1 = element("br");
    			br2 = element("br");
    			br3 = element("br");
    			br4 = element("br");
    			br5 = element("br");
    			br6 = element("br");
    			br7 = element("br");
    			t7 = space();
    			div27 = element("div");
    			div14 = element("div");
    			div1 = element("div");
    			create_component(semester0.$$.fragment);
    			t8 = space();
    			div5 = element("div");
    			div4 = element("div");
    			div2 = element("div");
    			create_component(modul0.$$.fragment);
    			t9 = space();
    			div3 = element("div");
    			create_component(modul1.$$.fragment);
    			t10 = space();
    			div9 = element("div");
    			div8 = element("div");
    			div6 = element("div");
    			create_component(modul2.$$.fragment);
    			t11 = space();
    			div7 = element("div");
    			create_component(modul3.$$.fragment);
    			t12 = space();
    			div13 = element("div");
    			div12 = element("div");
    			div10 = element("div");
    			create_component(modul4.$$.fragment);
    			t13 = space();
    			div11 = element("div");
    			create_component(modul5.$$.fragment);
    			t14 = space();
    			p = element("p");
    			t15 = space();
    			div26 = element("div");
    			div15 = element("div");
    			create_component(semester1.$$.fragment);
    			t16 = space();
    			div18 = element("div");
    			div17 = element("div");
    			div16 = element("div");
    			t17 = space();
    			div22 = element("div");
    			div21 = element("div");
    			div19 = element("div");
    			create_component(modul6.$$.fragment);
    			t18 = space();
    			div20 = element("div");
    			create_component(modul7.$$.fragment);
    			t19 = space();
    			div25 = element("div");
    			div24 = element("div");
    			div23 = element("div");
    			add_location(h1, file, 65, 0, 1440);
    			attr_dev(h40, "class", "InfoText");
    			add_location(h40, file, 67, 0, 1503);
    			attr_dev(h41, "class", "InfoTextRot");
    			add_location(h41, file, 68, 0, 1539);
    			attr_dev(div0, "class", "container");
    			add_location(div0, file, 70, 0, 1579);
    			add_location(br0, file, 96, 0, 2139);
    			add_location(br1, file, 96, 6, 2145);
    			add_location(br2, file, 96, 12, 2151);
    			add_location(br3, file, 96, 18, 2157);
    			add_location(br4, file, 96, 24, 2163);
    			add_location(br5, file, 96, 30, 2169);
    			add_location(br6, file, 96, 36, 2175);
    			add_location(br7, file, 96, 42, 2181);
    			attr_dev(div1, "class", "col-sm");
    			add_location(div1, file, 99, 4, 2236);
    			attr_dev(div2, "class", "col-sm");
    			add_location(div2, file, 105, 8, 2382);
    			attr_dev(div3, "class", "col-sm");
    			add_location(div3, file, 108, 8, 2494);
    			attr_dev(div4, "class", "row");
    			add_location(div4, file, 104, 6, 2356);
    			attr_dev(div5, "class", "col-sm");
    			add_location(div5, file, 103, 4, 2329);
    			attr_dev(div6, "class", "col-sm");
    			add_location(div6, file, 116, 8, 2680);
    			attr_dev(div7, "class", "col-sm");
    			add_location(div7, file, 119, 8, 2792);
    			attr_dev(div8, "class", "row");
    			add_location(div8, file, 115, 6, 2654);
    			attr_dev(div9, "class", "col-sm");
    			add_location(div9, file, 114, 4, 2627);
    			attr_dev(div10, "class", "col-sm");
    			add_location(div10, file, 127, 8, 2978);
    			attr_dev(div11, "class", "col-sm");
    			add_location(div11, file, 130, 8, 3090);
    			attr_dev(div12, "class", "row");
    			add_location(div12, file, 126, 6, 2952);
    			attr_dev(div13, "class", "col-sm");
    			add_location(div13, file, 125, 4, 2925);
    			attr_dev(div14, "class", "row");
    			add_location(div14, file, 98, 2, 2214);
    			add_location(p, file, 138, 2, 3263);
    			attr_dev(div15, "class", "col-sm");
    			add_location(div15, file, 141, 4, 3294);
    			attr_dev(div16, "class", "col-sm");
    			add_location(div16, file, 147, 8, 3440);
    			attr_dev(div17, "class", "row");
    			add_location(div17, file, 146, 6, 3414);
    			attr_dev(div18, "class", "col-sm");
    			add_location(div18, file, 145, 4, 3387);
    			attr_dev(div19, "class", "col-sm");
    			add_location(div19, file, 153, 8, 3545);
    			attr_dev(div20, "class", "col-sm");
    			add_location(div20, file, 156, 8, 3657);
    			attr_dev(div21, "class", "row");
    			add_location(div21, file, 152, 6, 3519);
    			attr_dev(div22, "class", "col-sm");
    			add_location(div22, file, 151, 4, 3492);
    			attr_dev(div23, "class", "col-sm");
    			add_location(div23, file, 164, 8, 3843);
    			attr_dev(div24, "class", "row");
    			add_location(div24, file, 163, 6, 3817);
    			attr_dev(div25, "class", "col-sm");
    			add_location(div25, file, 162, 4, 3790);
    			attr_dev(div26, "class", "row");
    			add_location(div26, file, 140, 2, 3272);
    			attr_dev(div27, "class", "container");
    			add_location(div27, file, 97, 0, 2188);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h40, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, h41, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, div0, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(div0, null);
    				}
    			}

    			insert_dev(target, t6, anchor);
    			insert_dev(target, br0, anchor);
    			insert_dev(target, br1, anchor);
    			insert_dev(target, br2, anchor);
    			insert_dev(target, br3, anchor);
    			insert_dev(target, br4, anchor);
    			insert_dev(target, br5, anchor);
    			insert_dev(target, br6, anchor);
    			insert_dev(target, br7, anchor);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, div27, anchor);
    			append_dev(div27, div14);
    			append_dev(div14, div1);
    			mount_component(semester0, div1, null);
    			append_dev(div14, t8);
    			append_dev(div14, div5);
    			append_dev(div5, div4);
    			append_dev(div4, div2);
    			mount_component(modul0, div2, null);
    			append_dev(div4, t9);
    			append_dev(div4, div3);
    			mount_component(modul1, div3, null);
    			append_dev(div14, t10);
    			append_dev(div14, div9);
    			append_dev(div9, div8);
    			append_dev(div8, div6);
    			mount_component(modul2, div6, null);
    			append_dev(div8, t11);
    			append_dev(div8, div7);
    			mount_component(modul3, div7, null);
    			append_dev(div14, t12);
    			append_dev(div14, div13);
    			append_dev(div13, div12);
    			append_dev(div12, div10);
    			mount_component(modul4, div10, null);
    			append_dev(div12, t13);
    			append_dev(div12, div11);
    			mount_component(modul5, div11, null);
    			append_dev(div27, t14);
    			append_dev(div27, p);
    			append_dev(div27, t15);
    			append_dev(div27, div26);
    			append_dev(div26, div15);
    			mount_component(semester1, div15, null);
    			append_dev(div26, t16);
    			append_dev(div26, div18);
    			append_dev(div18, div17);
    			append_dev(div17, div16);
    			append_dev(div26, t17);
    			append_dev(div26, div22);
    			append_dev(div22, div21);
    			append_dev(div21, div19);
    			mount_component(modul6, div19, null);
    			append_dev(div21, t18);
    			append_dev(div21, div20);
    			mount_component(modul7, div20, null);
    			append_dev(div26, t19);
    			append_dev(div26, div25);
    			append_dev(div25, div24);
    			append_dev(div24, div23);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*all*/ 1) {
    				each_value = /*all*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div0, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			transition_in(semester0.$$.fragment, local);
    			transition_in(modul0.$$.fragment, local);
    			transition_in(modul1.$$.fragment, local);
    			transition_in(modul2.$$.fragment, local);
    			transition_in(modul3.$$.fragment, local);
    			transition_in(modul4.$$.fragment, local);
    			transition_in(modul5.$$.fragment, local);
    			transition_in(semester1.$$.fragment, local);
    			transition_in(modul6.$$.fragment, local);
    			transition_in(modul7.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			transition_out(semester0.$$.fragment, local);
    			transition_out(modul0.$$.fragment, local);
    			transition_out(modul1.$$.fragment, local);
    			transition_out(modul2.$$.fragment, local);
    			transition_out(modul3.$$.fragment, local);
    			transition_out(modul4.$$.fragment, local);
    			transition_out(modul5.$$.fragment, local);
    			transition_out(semester1.$$.fragment, local);
    			transition_out(modul6.$$.fragment, local);
    			transition_out(modul7.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h40);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(h41);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(div0);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(br0);
    			if (detaching) detach_dev(br1);
    			if (detaching) detach_dev(br2);
    			if (detaching) detach_dev(br3);
    			if (detaching) detach_dev(br4);
    			if (detaching) detach_dev(br5);
    			if (detaching) detach_dev(br6);
    			if (detaching) detach_dev(br7);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(div27);
    			destroy_component(semester0);
    			destroy_component(modul0);
    			destroy_component(modul1);
    			destroy_component(modul2);
    			destroy_component(modul3);
    			destroy_component(modul4);
    			destroy_component(modul5);
    			destroy_component(semester1);
    			destroy_component(modul6);
    			destroy_component(modul7);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);

    	let all = [
    		{
    			number: "1",
    			semesterModules: [
    				{
    					group: "Informatik",
    					modules: [
    						{ name: "abc", credits: 6 },
    						{ name: "ads", credits: 6 },
    						{ name: "gtre", credits: 6 }
    					]
    				},
    				{
    					group: "Wirtschaft",
    					modules: [
    						{ name: "geref", credits: 6 },
    						{ name: "defs", credits: 6 },
    						{ name: "hrth", credits: 6 }
    					]
    				},
    				{
    					group: "STEM",
    					modules: [
    						{ name: "dfds", credits: 6 },
    						{ name: "abikuc", credits: 6 },
    						{ name: "adsfdsbc", credits: 6 }
    					]
    				}
    			]
    		},
    		{
    			number: "2",
    			semesterModules: [
    				{
    					group: "Informatik",
    					modules: [{ name: "ads", credits: 6 }, { name: "gtre", credits: 6 }]
    				},
    				{
    					group: "Wirtschaft",
    					modules: [
    						{ name: "geref", credits: 6 },
    						{ name: "defs", credits: 6 },
    						{ name: "hrth", credits: 6 }
    					]
    				},
    				{
    					group: "STEM",
    					modules: [{ name: "dfds", credits: 6 }, { name: "adsfdsbc", credits: 6 }]
    				}
    			]
    		}
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Modul, Semester, all });

    	$$self.$inject_state = $$props => {
    		if ('all' in $$props) $$invalidate(0, all = $$props.all);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [all];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    var app = new App({
    	target: document.body
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
