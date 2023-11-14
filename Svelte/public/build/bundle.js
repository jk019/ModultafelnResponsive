
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function (exports) {
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
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
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
    function set_style(node, key, value, important) {
        if (value == null) {
            node.style.removeProperty(key);
        }
        else {
            node.style.setProperty(key, value, important ? 'important' : '');
        }
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
    	let div3;
    	let div2;
    	let div0;
    	let p;
    	let t0;
    	let t1;
    	let div1;
    	let a;
    	let t2;
    	let t3;
    	let span0;
    	let t4;
    	let t5;
    	let t6;
    	let div11;
    	let div10;
    	let div9;
    	let div6;
    	let div4;
    	let h50;
    	let t7;
    	let t8;
    	let div5;
    	let span1;
    	let t9;
    	let t10;
    	let t11;
    	let button0;
    	let span2;
    	let t13;
    	let div7;
    	let h51;
    	let t15;
    	let t16;
    	let t17;
    	let div8;
    	let form;
    	let button1;
    	let t19;
    	let button2;

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			div2 = element("div");
    			div0 = element("div");
    			p = element("p");
    			t0 = text(/*gruppe*/ ctx[1]);
    			t1 = space();
    			div1 = element("div");
    			a = element("a");
    			t2 = text(/*name*/ ctx[0]);
    			t3 = space();
    			span0 = element("span");
    			t4 = text(/*badge*/ ctx[2]);
    			t5 = text(" ECTS");
    			t6 = space();
    			div11 = element("div");
    			div10 = element("div");
    			div9 = element("div");
    			div6 = element("div");
    			div4 = element("div");
    			h50 = element("h5");
    			t7 = text(/*name*/ ctx[0]);
    			t8 = space();
    			div5 = element("div");
    			span1 = element("span");
    			t9 = text(/*badge*/ ctx[2]);
    			t10 = text(" ECTS");
    			t11 = space();
    			button0 = element("button");
    			span2 = element("span");
    			span2.textContent = "×";
    			t13 = space();
    			div7 = element("div");
    			h51 = element("h5");
    			h51.textContent = "Beschreibung des Moduls:";
    			t15 = space();
    			t16 = text(/*description*/ ctx[4]);
    			t17 = space();
    			div8 = element("div");
    			form = element("form");
    			button1 = element("button");
    			button1.textContent = "Download Modulbeschreibung";
    			t19 = space();
    			button2 = element("button");
    			button2.textContent = "Schliessen";
    			set_style(p, "--groupcolor", /*color*/ ctx[3]);
    			attr_dev(p, "class", "Modulgruppe svelte-mxgy1v");
    			add_location(p, file$2, 13, 6, 346);
    			attr_dev(div0, "class", "row");
    			add_location(div0, file$2, 12, 4, 321);
    			attr_dev(a, "class", "Modulname svelte-mxgy1v");
    			attr_dev(a, "id", "Modulname");
    			attr_dev(a, "data-toggle", "modal");
    			attr_dev(a, "data-target", "#exampleModalCenter");
    			add_location(a, file$2, 16, 6, 454);
    			attr_dev(div1, "class", "row");
    			add_location(div1, file$2, 15, 4, 429);
    			attr_dev(span0, "class", "badge mt-auto svelte-mxgy1v");
    			set_style(span0, "--badgeBG", /*color*/ ctx[3]);
    			add_location(span0, file$2, 25, 4, 712);
    			attr_dev(div2, "class", "card-body d-flex flex-column svelte-mxgy1v");
    			attr_dev(div2, "id", "ModulBody");
    			add_location(div2, file$2, 11, 2, 258);
    			attr_dev(div3, "class", "card svelte-mxgy1v");
    			add_location(div3, file$2, 9, 0, 153);
    			attr_dev(h50, "class", "modal-title");
    			attr_dev(h50, "id", "exampleModalLongTitle");
    			add_location(h50, file$2, 42, 10, 1161);
    			attr_dev(div4, "class", "col-6 p-0");
    			add_location(div4, file$2, 41, 8, 1126);
    			attr_dev(span1, "class", "badge svelte-mxgy1v");
    			set_style(span1, "--badgeBG", /*color*/ ctx[3]);
    			add_location(span1, file$2, 45, 10, 1278);
    			attr_dev(div5, "class", "col");
    			add_location(div5, file$2, 44, 8, 1249);
    			attr_dev(span2, "aria-hidden", "true");
    			add_location(span2, file$2, 53, 10, 1512);
    			attr_dev(button0, "type", "button");
    			attr_dev(button0, "class", "close");
    			attr_dev(button0, "data-dismiss", "modal");
    			attr_dev(button0, "aria-label", "Close");
    			add_location(button0, file$2, 47, 8, 1370);
    			attr_dev(div6, "class", "modal-header svelte-mxgy1v");
    			add_location(div6, file$2, 40, 6, 1090);
    			add_location(h51, file$2, 57, 8, 1626);
    			attr_dev(div7, "class", "modal-body svelte-mxgy1v");
    			add_location(div7, file$2, 56, 6, 1592);
    			attr_dev(button1, "type", "submit");
    			attr_dev(button1, "class", "btn btn-primary");
    			add_location(button1, file$2, 62, 8, 1799);
    			attr_dev(form, "action", /*url*/ ctx[5]);
    			attr_dev(form, "method", "get");
    			attr_dev(form, "target", "_blank");
    			add_location(form, file$2, 61, 8, 1741);
    			attr_dev(button2, "type", "button");
    			attr_dev(button2, "class", "btn btn-secondary");
    			attr_dev(button2, "data-dismiss", "modal");
    			add_location(button2, file$2, 66, 8, 1930);
    			attr_dev(div8, "class", "modal-footer");
    			add_location(div8, file$2, 60, 6, 1705);
    			attr_dev(div9, "class", "modal-content");
    			add_location(div9, file$2, 39, 4, 1055);
    			attr_dev(div10, "class", "modal-dialog modal-dialog-centered");
    			attr_dev(div10, "role", "document");
    			add_location(div10, file$2, 38, 2, 985);
    			attr_dev(div11, "class", "modal fade");
    			attr_dev(div11, "id", "exampleModalCenter");
    			attr_dev(div11, "tabindex", "-1");
    			attr_dev(div11, "role", "dialog");
    			attr_dev(div11, "aria-labelledby", "exampleModalCenterTitle");
    			attr_dev(div11, "aria-hidden", "true");
    			add_location(div11, file$2, 30, 0, 824);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div2);
    			append_dev(div2, div0);
    			append_dev(div0, p);
    			append_dev(p, t0);
    			append_dev(div2, t1);
    			append_dev(div2, div1);
    			append_dev(div1, a);
    			append_dev(a, t2);
    			append_dev(div2, t3);
    			append_dev(div2, span0);
    			append_dev(span0, t4);
    			append_dev(span0, t5);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, div11, anchor);
    			append_dev(div11, div10);
    			append_dev(div10, div9);
    			append_dev(div9, div6);
    			append_dev(div6, div4);
    			append_dev(div4, h50);
    			append_dev(h50, t7);
    			append_dev(div6, t8);
    			append_dev(div6, div5);
    			append_dev(div5, span1);
    			append_dev(span1, t9);
    			append_dev(span1, t10);
    			append_dev(div6, t11);
    			append_dev(div6, button0);
    			append_dev(button0, span2);
    			append_dev(div9, t13);
    			append_dev(div9, div7);
    			append_dev(div7, h51);
    			append_dev(div7, t15);
    			append_dev(div7, t16);
    			append_dev(div9, t17);
    			append_dev(div9, div8);
    			append_dev(div8, form);
    			append_dev(form, button1);
    			append_dev(div8, t19);
    			append_dev(div8, button2);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*gruppe*/ 2) set_data_dev(t0, /*gruppe*/ ctx[1]);

    			if (dirty & /*color*/ 8) {
    				set_style(p, "--groupcolor", /*color*/ ctx[3]);
    			}

    			if (dirty & /*name*/ 1) set_data_dev(t2, /*name*/ ctx[0]);
    			if (dirty & /*badge*/ 4) set_data_dev(t4, /*badge*/ ctx[2]);

    			if (dirty & /*color*/ 8) {
    				set_style(span0, "--badgeBG", /*color*/ ctx[3]);
    			}

    			if (dirty & /*name*/ 1) set_data_dev(t7, /*name*/ ctx[0]);
    			if (dirty & /*badge*/ 4) set_data_dev(t9, /*badge*/ ctx[2]);

    			if (dirty & /*color*/ 8) {
    				set_style(span1, "--badgeBG", /*color*/ ctx[3]);
    			}

    			if (dirty & /*description*/ 16) set_data_dev(t16, /*description*/ ctx[4]);

    			if (dirty & /*url*/ 32) {
    				attr_dev(form, "action", /*url*/ ctx[5]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(div11);
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
    	let { color } = $$props;
    	let { description } = $$props;
    	let { url } = $$props;

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

    		if (color === undefined && !('color' in $$props || $$self.$$.bound[$$self.$$.props['color']])) {
    			console.warn("<Modul> was created without expected prop 'color'");
    		}

    		if (description === undefined && !('description' in $$props || $$self.$$.bound[$$self.$$.props['description']])) {
    			console.warn("<Modul> was created without expected prop 'description'");
    		}

    		if (url === undefined && !('url' in $$props || $$self.$$.bound[$$self.$$.props['url']])) {
    			console.warn("<Modul> was created without expected prop 'url'");
    		}
    	});

    	const writable_props = ['name', 'gruppe', 'badge', 'color', 'description', 'url'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Modul> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('name' in $$props) $$invalidate(0, name = $$props.name);
    		if ('gruppe' in $$props) $$invalidate(1, gruppe = $$props.gruppe);
    		if ('badge' in $$props) $$invalidate(2, badge = $$props.badge);
    		if ('color' in $$props) $$invalidate(3, color = $$props.color);
    		if ('description' in $$props) $$invalidate(4, description = $$props.description);
    		if ('url' in $$props) $$invalidate(5, url = $$props.url);
    	};

    	$$self.$capture_state = () => ({
    		name,
    		gruppe,
    		badge,
    		color,
    		description,
    		url
    	});

    	$$self.$inject_state = $$props => {
    		if ('name' in $$props) $$invalidate(0, name = $$props.name);
    		if ('gruppe' in $$props) $$invalidate(1, gruppe = $$props.gruppe);
    		if ('badge' in $$props) $$invalidate(2, badge = $$props.badge);
    		if ('color' in $$props) $$invalidate(3, color = $$props.color);
    		if ('description' in $$props) $$invalidate(4, description = $$props.description);
    		if ('url' in $$props) $$invalidate(5, url = $$props.url);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [name, gruppe, badge, color, description, url];
    }

    class Modul extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
    			name: 0,
    			gruppe: 1,
    			badge: 2,
    			color: 3,
    			description: 4,
    			url: 5
    		});

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

    	get color() {
    		throw new Error("<Modul>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<Modul>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get description() {
    		throw new Error("<Modul>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set description(value) {
    		throw new Error("<Modul>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get url() {
    		throw new Error("<Modul>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set url(value) {
    		throw new Error("<Modul>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\Semester.svelte generated by Svelte v3.59.2 */

    const file$1 = "src\\Semester.svelte";

    function create_fragment$1(ctx) {
    	let div3;
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
    			div3 = element("div");
    			div2 = element("div");
    			div1 = element("div");
    			div0 = element("div");
    			t0 = text("Semester ");
    			t1 = text(/*semesterNumber*/ ctx[1]);
    			t2 = space();
    			span = element("span");
    			t3 = text(/*totalCredits*/ ctx[0]);
    			t4 = text(" ECTS");
    			attr_dev(div0, "id", "text");
    			attr_dev(div0, "class", "svelte-ouif6o");
    			add_location(div0, file$1, 8, 6, 157);
    			attr_dev(div1, "class", "row");
    			add_location(div1, file$1, 7, 4, 132);
    			attr_dev(span, "class", "badgeTotal");
    			add_location(span, file$1, 10, 4, 221);
    			attr_dev(div2, "class", "card-body");
    			add_location(div2, file$1, 6, 2, 103);
    			attr_dev(div3, "class", "card svelte-ouif6o");
    			add_location(div3, file$1, 5, 0, 81);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			append_dev(div3, div2);
    			append_dev(div2, div1);
    			append_dev(div1, div0);
    			append_dev(div0, t0);
    			append_dev(div0, t1);
    			append_dev(div2, t2);
    			append_dev(div2, span);
    			append_dev(span, t3);
    			append_dev(span, t4);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*semesterNumber*/ 2) set_data_dev(t1, /*semesterNumber*/ ctx[1]);
    			if (dirty & /*totalCredits*/ 1) set_data_dev(t3, /*totalCredits*/ ctx[0]);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
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
    	child_ctx[2] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	return child_ctx;
    }

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[8] = list[i];
    	return child_ctx;
    }

    // (186:12) {#each group.modules as module}
    function create_each_block_2(ctx) {
    	let div;
    	let modul;
    	let current;

    	modul = new Modul({
    			props: {
    				color: /*group*/ ctx[5].color,
    				name: /*module*/ ctx[8].name,
    				gruppe: /*group*/ ctx[5].group,
    				badge: /*module*/ ctx[8].credits,
    				description: /*module*/ ctx[8].description,
    				url: /*module*/ ctx[8].url
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(modul.$$.fragment);
    			attr_dev(div, "class", "col-xl-6");
    			add_location(div, file, 187, 14, 7216);
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
    		source: "(186:12) {#each group.modules as module}",
    		ctx
    	});

    	return block;
    }

    // (181:6) {#each semester.semesterModules as group}
    function create_each_block_1(ctx) {
    	let div1;
    	let div0;
    	let current;
    	let each_value_2 = /*group*/ ctx[5].modules;
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

    			attr_dev(div0, "class", "row");
    			add_location(div0, file, 184, 10, 7090);
    			attr_dev(div1, "class", "col-md");
    			set_style(div1, "--groupBG", /*group*/ ctx[5].color + "70");
    			add_location(div1, file, 182, 8, 6955);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(div0, null);
    				}
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*all*/ 1) {
    				each_value_2 = /*group*/ ctx[5].modules;
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
    						each_blocks[i].m(div0, null);
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
    		source: "(181:6) {#each semester.semesterModules as group}",
    		ctx
    	});

    	return block;
    }

    // (171:2) {#each all as semester}
    function create_each_block(ctx) {
    	let div1;
    	let div0;
    	let semester;
    	let t0;
    	let t1;
    	let current;

    	semester = new Semester({
    			props: {
    				semesterNumber: /*semester*/ ctx[2].number,
    				totalCredits: calculateTotalCredits(/*semester*/ ctx[2])
    			},
    			$$inline: true
    		});

    	let each_value_1 = /*semester*/ ctx[2].semesterModules;
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
    			attr_dev(div0, "class", "col-md-auto");
    			add_location(div0, file, 173, 6, 6684);
    			attr_dev(div1, "class", "row");
    			add_location(div1, file, 171, 4, 6572);
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

    			append_dev(div1, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*all*/ 1) {
    				each_value_1 = /*semester*/ ctx[2].semesterModules;
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
    						each_blocks[i].m(div1, t1);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(171:2) {#each all as semester}",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let div2;
    	let div0;
    	let h1;
    	let t1;
    	let h40;
    	let t3;
    	let div1;
    	let img;
    	let img_src_value;
    	let t4;
    	let h41;
    	let t6;
    	let h42;
    	let t8;
    	let div3;
    	let t9;
    	let div4;
    	let p0;
    	let t11;
    	let div5;
    	let p1;
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

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Modultafel Bachelorstudiengang Wirtschaftsinformatik";
    			t1 = space();
    			h40 = element("h4");
    			h40.textContent = "Business Information Systems, Vollzeit, ab Herbstsemester 2021";
    			t3 = space();
    			div1 = element("div");
    			img = element("img");
    			t4 = space();
    			h41 = element("h4");
    			h41.textContent = "Klicken Sie auf die farbigen Kästchen um die Modulbeschreibungen anzusehen.";
    			t6 = space();
    			h42 = element("h4");
    			h42.textContent = "Das ist ein Warntext";
    			t8 = space();
    			div3 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t9 = space();
    			div4 = element("div");
    			p0 = element("p");
    			p0.textContent = "* = Dieses Modul wird in englischer Sprache durchgeführt.";
    			t11 = space();
    			div5 = element("div");
    			p1 = element("p");
    			p1.textContent = "Drucktipps: Stellen Sie in der Druckansicht sicher, dass die Option\r\n    \"Querformat\" aktiviert ist und die Seitenränder in den Seiteneigenschaften\r\n    auf 0 gesetzt sind.";
    			attr_dev(h1, "class", "mainTitle svelte-1jnb6td");
    			add_location(h1, file, 152, 4, 5999);
    			attr_dev(h40, "class", "mb-3 secondTitle");
    			add_location(h40, file, 155, 4, 6098);
    			attr_dev(div0, "class", "col");
    			add_location(div0, file, 151, 2, 5976);
    			if (!src_url_equal(img.src, img_src_value = "images/logoSML.jpg")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "Logo SML");
    			attr_dev(img, "width", "100%");
    			add_location(img, file, 160, 4, 6260);
    			attr_dev(div1, "class", "col-2 svelte-1jnb6td");
    			attr_dev(div1, "id", "zhawSML");
    			add_location(div1, file, 159, 2, 6222);
    			attr_dev(div2, "class", "row test svelte-1jnb6td");
    			add_location(div2, file, 150, 0, 5950);
    			attr_dev(h41, "class", "InfoText");
    			add_location(h41, file, 164, 0, 6342);
    			attr_dev(h42, "class", "InfoTextRot mb-4");
    			add_location(h42, file, 167, 0, 6451);
    			attr_dev(div3, "class", "custom-container");
    			add_location(div3, file, 169, 0, 6509);
    			add_location(p0, file, 206, 2, 7689);
    			attr_dev(div4, "class", "row mt-3 ml-2");
    			add_location(div4, file, 205, 0, 7658);
    			add_location(p1, file, 209, 2, 7789);
    			attr_dev(div5, "class", "row ml-2");
    			add_location(div5, file, 208, 0, 7763);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div0, h1);
    			append_dev(div0, t1);
    			append_dev(div0, h40);
    			append_dev(div2, t3);
    			append_dev(div2, div1);
    			append_dev(div1, img);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, h41, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, h42, anchor);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, div3, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				if (each_blocks[i]) {
    					each_blocks[i].m(div3, null);
    				}
    			}

    			insert_dev(target, t9, anchor);
    			insert_dev(target, div4, anchor);
    			append_dev(div4, p0);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, div5, anchor);
    			append_dev(div5, p1);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*all, calculateTotalCredits*/ 1) {
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
    						each_blocks[i].m(div3, null);
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
    			if (detaching) detach_dev(div2);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(h41);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(h42);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(div3);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(div4);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(div5);
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

    function calculateTotalCredits(semester) {
    	let totalCredits = 0;

    	semester.semesterModules.forEach(group => {
    		group.modules.forEach(module => {
    			totalCredits += module.credits;
    		});
    	});

    	return totalCredits;
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
    					color: "#1e7cb8",
    					modules: [
    						{
    							name: "Software Engineering 1",
    							description: "description SE1",
    							credits: 6,
    							url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf"
    						}
    					]
    				},
    				{
    					group: "Wirtschaft",
    					color: "#6799ca",
    					modules: [
    						{
    							name: "Einführung BWL",
    							shortname: "short",
    							is_elective: true,
    							description: "other description",
    							credits: 6,
    							url: "https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2BWL-WIN.XX.pdf",
    							wahlmodule: [
    								{
    									name: "Wahlmodul xy",
    									description: "other description",
    									url: "https://......."
    								},
    								{
    									name: "Wahlmodul xy",
    									description: "other description",
    									url: "https://......."
    								}
    							]
    						},
    						{
    							name: "Wissenschaftliches Schreiben",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Accounting",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Accounting",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Accounting",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Accounting",
    							description: "other description",
    							credits: 6
    						}
    					]
    				},
    				{
    					group: "Sonstige",
    					color: "#9db9dd",
    					modules: [
    						{
    							name: "Mathematik",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "VWL 1",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "English C1*",
    							description: "other description",
    							credits: 6
    						}
    					]
    				},
    				{
    					group: "Andere MG",
    					color: "#cfdbef",
    					modules: [
    						{
    							name: "Mathematik",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "VWL 1",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "English C1*",
    							description: "other description",
    							credits: 6
    						}
    					]
    				}
    			]
    		},
    		{
    			number: "2",
    			semesterModules: [
    				{
    					group: "Informatik",
    					color: "#1e7cb8",
    					modules: [
    						{
    							name: "Requirements Engineering",
    							description: "other description",
    							credits: 6
    						}
    					]
    				},
    				{
    					group: "Wirtschaft",
    					color: "#6799ca",
    					modules: [
    						{
    							name: "Prozessmodellierung",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Strategisches Management",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Marketing",
    							description: "other description",
    							credits: 6
    						}
    					]
    				},
    				{
    					group: "Sonstige",
    					color: "#9db9dd",
    					modules: [
    						{
    							name: "Wahlpflichtmodul",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						}
    					]
    				},
    				{
    					group: "Andere MG",
    					color: "#cfdbef",
    					modules: []
    				}
    			]
    		},
    		{
    			number: "3",
    			semesterModules: [
    				{
    					group: "Informatik",
    					color: "#1e7cb8",
    					modules: [
    						{
    							name: "Requirements Engineering",
    							description: "other description",
    							credits: 6
    						}
    					]
    				},
    				{
    					group: "Wirtschaft",
    					color: "#6799ca",
    					modules: [
    						{
    							name: "Prozessmodellierung",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Strategisches Management",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Marketing",
    							description: "other description",
    							credits: 6
    						}
    					]
    				},
    				{
    					group: "Sonstige",
    					color: "#9db9dd",
    					modules: [
    						{
    							name: "Wahlpflichtmodul",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "Business Intelligence",
    							description: "other description",
    							credits: 6
    						}
    					]
    				},
    				{
    					group: "Andere MG",
    					color: "#cfdbef",
    					modules: [
    						{
    							name: "English C1*",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "English C1*",
    							description: "other description",
    							credits: 6
    						},
    						{
    							name: "English C1*",
    							description: "other description",
    							credits: 4
    						}
    					]
    				}
    			]
    		}
    	];

    	let Modulgruppen = [];
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Modul,
    		Semester,
    		all,
    		calculateTotalCredits,
    		Modulgruppen
    	});

    	$$self.$inject_state = $$props => {
    		if ('all' in $$props) $$invalidate(0, all = $$props.all);
    		if ('Modulgruppen' in $$props) Modulgruppen = $$props.Modulgruppen;
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
      target: document.body,
    });

    const prerender = true;

    exports.default = app;
    exports.prerender = prerender;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
//# sourceMappingURL=bundle.js.map
