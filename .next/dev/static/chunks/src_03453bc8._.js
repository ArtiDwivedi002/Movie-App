(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/home/home.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "home-module-scss-module__cCNkGa__container",
  "container__heading": "home-module-scss-module__cCNkGa__container__heading",
});
}),
"[project]/src/components/Cards/movieCards.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "movieCards-module-scss-module__1HaAfG__container",
  "container-progress": "movieCards-module-scss-module__1HaAfG__container-progress",
  "container__heading": "movieCards-module-scss-module__1HaAfG__container__heading",
  "favorite-button": "movieCards-module-scss-module__1HaAfG__favorite-button",
  "movie": "movieCards-module-scss-module__1HaAfG__movie",
  "movie-container": "movieCards-module-scss-module__1HaAfG__movie-container",
  "movie__images": "movieCards-module-scss-module__1HaAfG__movie__images",
  "movie__original-title": "movieCards-module-scss-module__1HaAfG__movie__original-title",
  "movie__title": "movieCards-module-scss-module__1HaAfG__movie__title",
  "progress-label": "movieCards-module-scss-module__1HaAfG__progress-label",
});
}),
"[project]/src/components/Cards/MovieCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MovieCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Cards/movieCards.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/configMovie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fc$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fc/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/favouriteContext.tsx [app-client] (ecmascript)");
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
;
function MovieCards(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "d501293fc579afdac73e8bcd1967b8e40c567f3c14e444d06191ea49c4601b9f") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d501293fc579afdac73e8bcd1967b8e40c567f3c14e444d06191ea49c4601b9f";
    }
    const { movieList, title, onCardClick } = t0;
    const { isFavourite, favouriteToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavourite"])();
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container__heading,
                children: [
                    " ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Cards/MovieCards.tsx",
                lineNumber: 36,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Cards/MovieCards.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== favouriteToggle || $[4] !== isFavourite || $[5] !== movieList || $[6] !== onCardClick) {
        t2 = movieList?.map({
            "MovieCards[(anonymous)()]": (list)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movie,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: {
                                "MovieCards[(anonymous)() > <Image>.onClick]": ()=>onCardClick(list.id)
                            }["MovieCards[(anonymous)() > <Image>.onClick]"],
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movie__images,
                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigMovie"].image_url}/w500/${list?.poster_path}`,
                            alt: list?.title || "Movie",
                            width: 200,
                            height: 300,
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/Cards/MovieCards.tsx",
                            lineNumber: 45,
                            columnNumber: 88
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["container-progress"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["progress-label"],
                                    style: {
                                        "--progress": `${list?.vote_average * 10}%`
                                    },
                                    children: [
                                        Math.round(list.vote_average * 10) ?? "30%",
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Cards/MovieCards.tsx",
                                    lineNumber: 47,
                                    columnNumber: 270
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: {
                                        "MovieCards[(anonymous)() > <div>.onClick]": ()=>favouriteToggle(list)
                                    }["MovieCards[(anonymous)() > <div>.onClick]"],
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["favorite-button"],
                                    children: isFavourite(list?.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fc$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FcLike"], {
                                        size: 35,
                                        color: "black"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Cards/MovieCards.tsx",
                                        lineNumber: 51,
                                        columnNumber: 121
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoHeartOutline"], {
                                        size: 35,
                                        color: "#d11e1e"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Cards/MovieCards.tsx",
                                        lineNumber: 51,
                                        columnNumber: 158
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Cards/MovieCards.tsx",
                                    lineNumber: 49,
                                    columnNumber: 90
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Cards/MovieCards.tsx",
                            lineNumber: 47,
                            columnNumber: 225
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movie__title,
                            children: list.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Cards/MovieCards.tsx",
                            lineNumber: 51,
                            columnNumber: 215
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["movie__original-title"],
                            children: list?.original_title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Cards/MovieCards.tsx",
                            lineNumber: 51,
                            columnNumber: 267
                        }, this)
                    ]
                }, list?.id, true, {
                    fileName: "[project]/src/components/Cards/MovieCards.tsx",
                    lineNumber: 45,
                    columnNumber: 44
                }, this)
        }["MovieCards[(anonymous)()]"]);
        $[3] = favouriteToggle;
        $[4] = isFavourite;
        $[5] = movieList;
        $[6] = onCardClick;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["movie-container"],
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/Cards/MovieCards.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== t1 || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["main-container"],
                children: [
                    t1,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Cards/MovieCards.tsx",
                lineNumber: 71,
                columnNumber: 20
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Cards/MovieCards.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_s(MovieCards, "8Yb2JaYHw+QdQrl12rlFzcEUEA0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavourite"]
    ];
});
_c = MovieCards;
var _c;
__turbopack_context__.k.register(_c, "MovieCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/topRatedMovie/usetopratedState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTopRatedState",
    ()=>useTopRatedState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/configMovie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/apiEndpointsConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/apikeyConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/routesConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/translationConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const useTopRatedState = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "53f12d2a2975f1ab75bf03c8b220e60005b1d80902dd3c4925c554435644b3f0") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "53f12d2a2975f1ab75bf03c8b220e60005b1d80902dd3c4925c554435644b3f0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [topMovie, setTopMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const toproutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const topRatedTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PAGEHEADING);
    let t1;
    if ($[2] !== toproutes) {
        t1 = (id)=>{
            toproutes.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].movieDetails}/${id}`);
        };
        $[2] = toproutes;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleCardClick = t1;
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            const fetchtopRatedMovieUrl = async function fetchtopRatedMovieUrl() {
                const fetchmovies = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigMovie"].movie_url}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiMoviesUrls"].topRatedMovieUrl}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeyUrl"].api_keys}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeys"].apikeyValue}`);
                const response = await fetchmovies.json();
                setTopMovie(response.results);
            };
            fetchtopRatedMovieUrl();
        };
        t3 = [];
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== handleCardClick || $[7] !== topMovie || $[8] !== topRatedTrans) {
        t4 = {
            topMovie,
            handleCardClick,
            topRatedTrans
        };
        $[6] = handleCardClick;
        $[7] = topMovie;
        $[8] = topRatedTrans;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
};
_s(useTopRatedState, "i6N4Dm9nN8+scUTLV1XSrtZQ78A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/trendingMovie/useTrendingState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTrendingState",
    ()=>useTrendingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/configMovie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/apiEndpointsConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/apikeyConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/routesConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/translationConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const useTrendingState = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "35805960bd9ff4615148f57e3515cd8b5d071c1da620f00b220c4faab1bdbebd") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "35805960bd9ff4615148f57e3515cd8b5d071c1da620f00b220c4faab1bdbebd";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [trendingMovie, setTrendingMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const trendingTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PAGEHEADING);
    const routes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[2] !== routes) {
        t1 = (id)=>{
            routes.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].movieDetails}/${id}`);
        };
        $[2] = routes;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleTrendingCardClick = t1;
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            const fetchtrendingMovie = async function fetchtrendingMovie() {
                const fetchTrending = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigMovie"].movie_url}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiMoviesUrls"].trendingMovieUrl}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeyUrl"].api_keys}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeys"].apikeyValue}`);
                const response = await fetchTrending.json();
                setTrendingMovie(response.results);
            };
            fetchtrendingMovie();
        };
        t3 = [];
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== handleTrendingCardClick || $[7] !== trendingMovie || $[8] !== trendingTrans) {
        t4 = {
            trendingMovie,
            handleTrendingCardClick,
            trendingTrans
        };
        $[6] = handleTrendingCardClick;
        $[7] = trendingMovie;
        $[8] = trendingTrans;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
};
_s(useTrendingState, "oREfxKvcQvgc2UuakAEQY1f+ips=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/upComingMovie/useUpComingState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUpComingState",
    ()=>useUpComingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/configMovie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/apiEndpointsConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/apikeyConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/routesConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/translationConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const useUpComingState = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c78dc31a5c2faa023e31e286dff76c7b1bd5484f330a979befad83684160b0f2") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c78dc31a5c2faa023e31e286dff76c7b1bd5484f330a979befad83684160b0f2";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [upComingMovie, setUpComingMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const upComingTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PAGEHEADING);
    const upComeRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[2] !== upComeRoutes) {
        t1 = (id)=>{
            upComeRoutes.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].movieDetails}/${id}`);
        };
        $[2] = upComeRoutes;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleUpComingCardClick = t1;
    let t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            const fetchUpComingMovie = async function fetchUpComingMovie() {
                const fetchNewMovie = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigMovie"].movie_url}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiMoviesUrls"].upComingMovieUrl}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeyUrl"].api_keys}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeys"].apikeyValue}`);
                const response = await fetchNewMovie.json();
                setUpComingMovie(response.results);
                console.log(response.results);
            };
            fetchUpComingMovie();
        };
        t3 = [];
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== handleUpComingCardClick || $[7] !== upComeRoutes || $[8] !== upComingMovie || $[9] !== upComingTrans) {
        t4 = {
            upComingMovie,
            handleUpComingCardClick,
            upComeRoutes,
            upComingTrans
        };
        $[6] = handleUpComingCardClick;
        $[7] = upComeRoutes;
        $[8] = upComingMovie;
        $[9] = upComingTrans;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
};
_s(useUpComingState, "2qDEP0aw10lEDl2EOHivmg8gh3w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/home/_components/Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$home$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/home/home.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Cards/MovieCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$topRatedMovie$2f$usetopratedState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/topRatedMovie/usetopratedState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$trendingMovie$2f$useTrendingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/trendingMovie/useTrendingState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$upComingMovie$2f$useUpComingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/upComingMovie/useUpComingState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/translationConstants.ts [app-client] (ecmascript)");
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
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "374a26d0ebb45b304bd65a43b0745c4f2626f32b66c82a6d1e93e6b93213493e") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "374a26d0ebb45b304bd65a43b0745c4f2626f32b66c82a6d1e93e6b93213493e";
    }
    const infoTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].INFORAMTION);
    const { topMovie, handleCardClick, topRatedTrans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$topRatedMovie$2f$usetopratedState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTopRatedState"])();
    const { trendingMovie, handleTrendingCardClick, trendingTrans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$trendingMovie$2f$useTrendingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrendingState"])();
    const { upComingMovie, handleUpComingCardClick, upComingTrans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$upComingMovie$2f$useUpComingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpComingState"])();
    let t0;
    if ($[1] !== infoTrans) {
        t0 = infoTrans(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].HOMEPAGEINFORM);
        $[1] = infoTrans;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$home$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$home$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container__heading,
                children: t0
            }, void 0, false, {
                fileName: "[project]/src/app/home/_components/Home.tsx",
                lineNumber: 47,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/home/_components/Home.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== topRatedTrans) {
        t2 = topRatedTrans(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].TOPRATINGMOVIESHEADING);
        $[5] = topRatedTrans;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== handleCardClick || $[8] !== t2 || $[9] !== topMovie) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                movieList: topMovie,
                title: t2,
                onCardClick: handleCardClick
            }, void 0, false, {
                fileName: "[project]/src/app/home/_components/Home.tsx",
                lineNumber: 63,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/home/_components/Home.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[7] = handleCardClick;
        $[8] = t2;
        $[9] = topMovie;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== trendingTrans) {
        t4 = trendingTrans(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].TRENDINGMOVIEHEADING);
        $[11] = trendingTrans;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== handleTrendingCardClick || $[14] !== t4 || $[15] !== trendingMovie) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                movieList: trendingMovie,
                title: t4,
                onCardClick: handleTrendingCardClick
            }, void 0, false, {
                fileName: "[project]/src/app/home/_components/Home.tsx",
                lineNumber: 81,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/home/_components/Home.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[13] = handleTrendingCardClick;
        $[14] = t4;
        $[15] = trendingMovie;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] !== upComingTrans) {
        t6 = upComingTrans(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].UPCOMINGMOVIEHEADING);
        $[17] = upComingTrans;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== handleUpComingCardClick || $[20] !== t6 || $[21] !== upComingMovie) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                movieList: upComingMovie,
                title: t6,
                onCardClick: handleUpComingCardClick
            }, void 0, false, {
                fileName: "[project]/src/app/home/_components/Home.tsx",
                lineNumber: 99,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/home/_components/Home.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[19] = handleUpComingCardClick;
        $[20] = t6;
        $[21] = upComingMovie;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    let t8;
    if ($[23] !== t1 || $[24] !== t3 || $[25] !== t5 || $[26] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t1,
                t3,
                t5,
                t7
            ]
        }, void 0, true);
        $[23] = t1;
        $[24] = t3;
        $[25] = t5;
        $[26] = t7;
        $[27] = t8;
    } else {
        t8 = $[27];
    }
    return t8;
}
_s(Home, "vodEYB/YE2Ioqj8D1sOZYUsvTpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$topRatedMovie$2f$usetopratedState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTopRatedState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$trendingMovie$2f$useTrendingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrendingState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$upComingMovie$2f$useUpComingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpComingState"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_03453bc8._.js.map