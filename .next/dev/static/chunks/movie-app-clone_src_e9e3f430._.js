(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/movie-app-clone/src/hooks/authHook.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$movieEnums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/movieEnums.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        registeredUsers: [],
        currentUser: null,
        isAuthenticated: false,
        error: null,
        isRegistered: false,
        registerUser: (userData)=>{
            const { registeredUsers } = get();
            const exists = registeredUsers.find((u)=>u.email === userData.email);
            if (exists) {
                set({
                    error: "User already exists!!",
                    isRegistered: false
                });
                return;
            }
            set({
                registeredUsers: [
                    ...registeredUsers,
                    userData
                ],
                isRegistered: true,
                error: null
            });
        },
        login: (credentials)=>{
            const { registeredUsers } = get();
            const userMatch = registeredUsers.find((u)=>u.email === credentials.email && u.password === credentials.password);
            if (userMatch) {
                set({
                    currentUser: userMatch,
                    isAuthenticated: true,
                    error: null
                });
                return true; // ✅
            } else {
                set({
                    isAuthenticated: false,
                    error: "Invalid credentials. Please register first."
                });
                return false; // ✅
            }
        },
        logout: ()=>{
            set({
                currentUser: null,
                isAuthenticated: false
            });
        },
        clearError: ()=>set({
                error: null
            }),
        resetRegister: ()=>set({
                isRegistered: false
            })
    }), {
    name: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$movieEnums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MovieEnums"].AUTH_USER,
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    partialize: (state)=>({
            registeredUsers: state.registeredUsers,
            currentUser: state.currentUser,
            isAuthenticated: state.isAuthenticated
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/app/login/_components/Login.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/yup/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$hooks$2f$authHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/hooks/authHook.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Login() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "39f5d92d5af19ddc94b756d649b736591eb926684c1a48cc7ee26f65a6ed53ed") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "39f5d92d5af19ddc94b756d649b736591eb926684c1a48cc7ee26f65a6ed53ed";
    }
    const routes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$hooks$2f$authHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            email: "",
            password: ""
        };
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]({
            email: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().email().required("Required"),
            password: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(6).required("Required")
        });
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] !== login || $[4] !== routes) {
        t2 = {
            initialValues: t0,
            validationSchema: t1,
            onSubmit: (values)=>{
                const success = login(values);
                if (success) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Login Successfully!!");
                    routes.replace("/home");
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid credentials");
                }
            }
        };
        $[3] = login;
        $[4] = routes;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const formik = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormik"])(t2);
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mb-4 text-center text-white display-6 fw-bold",
            children: "Login"
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
            children: "Email Address"
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const t5 = !!(formik.touched.email && formik.errors.email);
    let t6;
    if ($[8] !== formik.handleBlur || $[9] !== formik.handleChange || $[10] !== formik.values.email || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
            name: "email",
            type: "email",
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            value: formik.values.email,
            placeholder: "Enter your email",
            isInvalid: t5
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[8] = formik.handleBlur;
        $[9] = formik.handleChange;
        $[10] = formik.values.email;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== formik.errors.email) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control.Feedback, {
            type: "invalid",
            children: formik.errors.email
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[13] = formik.errors.email;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
            className: "mb-3",
            children: [
                t4,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Label, {
            children: "Password"
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    const t10 = !!(formik.touched.password && formik.errors.password);
    let t11;
    if ($[19] !== formik.handleBlur || $[20] !== formik.handleChange || $[21] !== formik.values.password || $[22] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
            name: "password",
            type: "password",
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            value: formik.values.password,
            isInvalid: t10
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[19] = formik.handleBlur;
        $[20] = formik.handleChange;
        $[21] = formik.values.password;
        $[22] = t10;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== formik.errors.password) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control.Feedback, {
            type: "invalid",
            children: formik.errors.password
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[24] = formik.errors.password;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== t11 || $[27] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Group, {
            className: "mb-3",
            children: [
                t9,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[26] = t11;
        $[27] = t12;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-grid",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                size: "lg",
                type: "submit",
                children: "Login"
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
                lineNumber: 144,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== formik.handleSubmit || $[31] !== t13 || $[32] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " vh-100 vw-100 d-flex justify-content-center align-items-center bg-blue text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                onSubmit: formik.handleSubmit,
                className: "p-5 border-3 rounded-4 shadow-lg text-primary fw-bold bg-black text-white",
                children: [
                    t3,
                    t8,
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
                lineNumber: 151,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/login/_components/Login.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[30] = formik.handleSubmit;
        $[31] = t13;
        $[32] = t8;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    return t15;
}
_s(Login, "4vE+25Zlewe3uliS9X0sJV4SSUo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$hooks$2f$authHook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormik"]
    ];
});
_c = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=movie-app-clone_src_e9e3f430._.js.map