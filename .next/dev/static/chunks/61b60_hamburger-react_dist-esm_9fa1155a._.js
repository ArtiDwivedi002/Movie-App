(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Burger",
    ()=>Burger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const area = 48;
const Burger = ({ color = 'currentColor', direction = 'left', distance = 'md', duration = 0.4, easing = 'cubic-bezier(0, 0, 0, 1)', hideOutline = true, label, lines = 3, onToggle, render, rounded = false, size = 32, toggle, toggled, disabled = false, animateOnMount = false })=>{
    const [toggledInternal, toggleInternal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Burger.useEffect": ()=>{
            setMounted(true);
        }
    }["Burger.useEffect"], []);
    const width = Math.max(12, Math.min(area, size));
    const room = Math.round((area - width) / 2);
    const barHeightRaw = width / 12;
    const barHeight = Math.round(barHeightRaw);
    const space = distance === 'lg' ? 0.25 : distance === 'sm' ? 0.75 : 0.5;
    const marginRaw = width / (lines * (space + (lines === 3 ? 1 : 1.25)));
    const margin = Math.round(marginRaw);
    const height = barHeight * lines + margin * (lines - 1);
    const topOffset = Math.round((area - height) / 2);
    const translate = lines === 3 ? distance === 'lg' ? 4.0425 : distance === 'sm' ? 5.1625 : 4.6325 : distance === 'lg' ? 6.7875 : distance === 'sm' ? 8.4875 : 7.6675;
    const deviation = (barHeightRaw - barHeight + (marginRaw - margin)) / (lines === 3 ? 1 : 2);
    const move = parseFloat((width / translate - deviation / (4 / 3)).toFixed(2));
    const time = Math.max(0, duration);
    const burgerStyles = {
        cursor: disabled ? 'not-allowed' : 'pointer',
        height: `${area}px`,
        position: 'relative',
        transition: `${time}s ${easing}`,
        userSelect: 'none',
        width: `${area}px`
    };
    const barStyles = {
        background: color,
        height: `${barHeight}px`,
        left: `${room}px`,
        position: 'absolute'
    };
    if (hideOutline) {
        burgerStyles['outline'] = 'none';
    }
    if (rounded) {
        barStyles['borderRadius'] = '9em';
    }
    const getIsToggled = ()=>{
        const isToggled = toggled !== undefined ? toggled : toggledInternal;
        return animateOnMount && !mounted ? !isToggled : isToggled;
    };
    const toggleFunction = toggle || toggleInternal;
    const isToggled = getIsToggled();
    const handler = ()=>{
        toggleFunction(!isToggled);
        if (typeof onToggle === 'function') onToggle(!isToggled);
    };
    return render({
        barHeight,
        barStyles,
        burgerStyles,
        easing,
        handler,
        isLeft: direction === 'left',
        isToggled,
        label,
        margin,
        move,
        time,
        topOffset,
        width
    });
};
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Tilt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tilt",
    ()=>Tilt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Tilt = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: {
                    ...o.burgerStyles,
                    transform: `${o.isToggled ? `rotate(${90 * (o.isLeft ? -1 : 1)}deg)` : 'none'}`
                },
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? 'scaleX(0)' : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : 'none'}`
                }
            }))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Cross.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cross",
    ()=>Cross
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Cross = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        lines: 2,
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: o.burgerStyles,
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : 'none'}`
                }
            }))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Divide.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Divide",
    ()=>Divide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Divide = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: o.burgerStyles,
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width / 2}px`,
                    borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `translate(${o.move * 0.48}px, ${o.move * 0.73}px) rotate(45deg)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width / 2}px`,
                    borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
                    left: '50%',
                    top: `${o.topOffset}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `translate(-${o.move * 0.48}px, ${o.move * 0.73}px) rotate(-45deg)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width / 2}px`,
                    borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time}s ${o.easing}`,
                    opacity: o.isToggled ? 0 : 1,
                    transform: `${o.isToggled ? `translate(${-o.move * 1.25}px, 0)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width / 2}px`,
                    borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    left: '50%',
                    transition: `${o.time}s ${o.easing}`,
                    opacity: o.isToggled ? 0 : 1,
                    transform: `${o.isToggled ? `translate(${o.move * 1.25}px, 0)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width / 2}px`,
                    borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
                    top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `translate(${o.move * 0.48}px, -${o.move * 0.73}px) rotate(-45deg)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width / 2}px`,
                    borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
                    left: '50%',
                    top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `translate(-${o.move * 0.48}px, -${o.move * 0.73}px) rotate(45deg)` : 'none'}`
                }
            }))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Fade.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fade",
    ()=>Fade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Fade = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: o.burgerStyles,
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time}s ${o.easing}`,
                    opacity: `${o.isToggled ? '0' : '1'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : 'none'}`
                }
            }))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Pivot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pivot",
    ()=>Pivot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Pivot = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        lines: 2,
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: {
                    ...o.burgerStyles,
                    transform: `${o.isToggled ? `rotate(${90 * (o.isLeft ? -1 : 1)}deg)` : 'none'}`
                },
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? '0s' : `${o.time / 2}s`}`,
                    transform: `${o.isToggled ? `translateY(${o.barHeight / 2 + o.margin / 2}px)` : 'none'}`
                }
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : '0s'}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg)` : 'none'}`
                }
            })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? '0s' : `${o.time / 2}s`}`,
                    transform: `${o.isToggled ? `translateY(-${o.barHeight / 2 + o.margin / 2}px)` : 'none'}`
                }
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : '0s'}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg)` : 'none'}`
                }
            })))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Rotate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rotate",
    ()=>Rotate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Rotate = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        lines: 2,
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: {
                    ...o.burgerStyles,
                    transform: `${o.isToggled ? `rotateY(${180 * (o.isLeft ? -1 : 1)}deg)` : 'none'}`
                },
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : 'none'}`
                }
            }))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Slant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slant",
    ()=>Slant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Slant = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        lines: 2,
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: {
                    ...o.burgerStyles,
                    transform: `${o.isToggled ? `rotate(${90 * (o.isLeft ? -1 : 1)}deg)` : 'none'}`
                },
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : 'none'}`
                }
            }))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Sling.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sling",
    ()=>Sling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Sling = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: {
                    ...o.burgerStyles,
                    transform: `${o.isToggled ? `rotateY(${180 * (o.isLeft ? -1 : 1)}deg)` : 'none'}`
                },
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `scale(0, 1) translate(${o.move * 20 * (o.isLeft ? -1 : 1)}px, 0)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : 'none'}`
                }
            }))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Spin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spin",
    ()=>Spin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Spin = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: {
                    ...o.burgerStyles,
                    transform: `${o.isToggled ? `rotate(${180 * (o.isLeft ? -1 : 1)}deg)` : 'none'}`
                },
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time}s ${o.easing}`,
                    opacity: `${o.isToggled ? '0' : '1'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : 'none'}`
                }
            }))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Spiral.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spiral",
    ()=>Spiral
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Spiral = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        lines: 2,
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: {
                    ...o.burgerStyles,
                    transform: `${o.isToggled ? `rotate(${180 * (o.isLeft ? -1 : 1)}deg)` : 'none'}`
                },
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : 'none'}`
                }
            }))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Squash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Squash",
    ()=>Squash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Squash = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: o.burgerStyles,
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? '0s' : `${o.time / 2}s`}`,
                    transform: `${o.isToggled ? `translateY(${o.barHeight + o.margin}px)` : 'none'}`
                }
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : '0s'}`,
                    transform: `${o.isToggled ? `rotate(45deg)` : 'none'}`
                }
            })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    transition: `${o.time / 2}s ${o.easing}`,
                    opacity: `${o.isToggled ? '0' : '1'}`
                }
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time / 2}s ${o.easing}`
                }
            })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? '0s' : `${o.time / 2}s`}`,
                    transform: `${o.isToggled ? `translateY(-${o.barHeight + o.margin}px)` : 'none'}`
                }
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : '0s'}`,
                    transform: `${o.isToggled ? `rotate(-45deg)` : 'none'}`
                }
            })))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Squeeze.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Squeeze",
    ()=>Squeeze
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Squeeze = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        lines: 2,
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: o.burgerStyles,
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? '0s' : `${o.time / 2}s`}`,
                    transform: `${o.isToggled ? `translateY(${o.barHeight / 2 + o.margin / 2}px)` : 'none'}`
                }
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : '0s'}`,
                    transform: `${o.isToggled ? `rotate(45deg)` : 'none'}`
                }
            })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? '0s' : `${o.time / 2}s`}`,
                    transform: `${o.isToggled ? `translateY(-${o.barHeight / 2 + o.margin / 2}px)` : 'none'}`
                }
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : '0s'}`,
                    transform: `${o.isToggled ? `rotate(-45deg)` : 'none'}`
                }
            })))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Turn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Turn",
    ()=>Turn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Turn = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: o.burgerStyles,
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move}px)` : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time / 2}s ${o.easing}`,
                    transform: `${o.isToggled ? 'scaleX(0)' : 'none'}`
                }
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
                    transition: `${o.time}s ${o.easing}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg) translate(${o.move * (o.isLeft ? -1 : 1)}px, ${o.move * -1}px)` : 'none'}`
                }
            }))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Twirl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Twirl",
    ()=>Twirl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Burger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
;
;
const Twirl = (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Burger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], _extends({}, props, {
        render: (o)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "hamburger-react",
                "aria-label": o.label,
                "aria-expanded": o.isToggled,
                onClick: props.disabled ? undefined : o.handler,
                onKeyUp: props.disabled ? undefined : (e)=>e.key === 'Enter' && o.handler(),
                role: "button",
                style: {
                    ...o.burgerStyles,
                    transform: `${o.isToggled ? `rotate(${90 * (o.isLeft ? -1 : 1)}deg)` : 'none'}`
                },
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? '0s' : `${o.time / 2}s`}`,
                    transform: `${o.isToggled ? `translateY(${o.barHeight + o.margin}px)` : 'none'}`
                }
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset}px`,
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : '0s'}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? 1 : -1)}deg)` : 'none'}`
                }
            })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    transition: `${o.time / 2}s ${o.easing}`,
                    opacity: `${o.isToggled ? '0' : '1'}`
                }
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight + o.margin}px`,
                    transition: `${o.time / 2}s ${o.easing}`
                }
            })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? '0s' : `${o.time / 2}s`}`,
                    transform: `${o.isToggled ? `translateY(-${o.barHeight + o.margin}px)` : 'none'}`
                }
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                style: {
                    ...o.barStyles,
                    width: `${o.width}px`,
                    top: `${o.topOffset + o.barHeight * 2 + o.margin * 2}px`,
                    transition: `${o.time / 2}s ${o.easing} ${o.isToggled ? `${o.time / 2}s` : '0s'}`,
                    transform: `${o.isToggled ? `rotate(${45 * (o.isLeft ? -1 : 1)}deg)` : 'none'}`
                }
            })))
    }));
}),
"[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Tilt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Tilt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Cross$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Cross.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Divide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Divide.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Fade.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Pivot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Pivot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Rotate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Rotate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Slant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Slant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Sling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Sling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Spin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Spin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Spiral$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Spiral.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Squash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Squash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Squeeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Squeeze.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Turn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Turn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Twirl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/Twirl.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Tilt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tilt"];
;
}),
]);

//# sourceMappingURL=61b60_hamburger-react_dist-esm_9fa1155a._.js.map