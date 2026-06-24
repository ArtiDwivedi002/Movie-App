(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/movie-app-clone/src/app/home/home.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "home-module-scss-module__dbm0bW__container",
  "container__heading": "home-module-scss-module__dbm0bW__container__heading",
});
}),
"[project]/movie-app-clone/src/components/Cards/movieCards.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "movieCards-module-scss-module__fa7i0q__container",
  "container-progress": "movieCards-module-scss-module__fa7i0q__container-progress",
  "container__heading": "movieCards-module-scss-module__fa7i0q__container__heading",
  "favorite-button": "movieCards-module-scss-module__fa7i0q__favorite-button",
  "movie": "movieCards-module-scss-module__fa7i0q__movie",
  "movie-container": "movieCards-module-scss-module__fa7i0q__movie-container",
  "movie__images": "movieCards-module-scss-module__fa7i0q__movie__images",
  "movie__original-title": "movieCards-module-scss-module__fa7i0q__movie__original-title",
  "movie__title": "movieCards-module-scss-module__fa7i0q__movie__title",
  "progress-label": "movieCards-module-scss-module__fa7i0q__progress-label",
});
}),
"[project]/movie-app-clone/src/config/configMovie.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigMovie",
    ()=>ConfigMovie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const ConfigMovie = {
    movie_url: ("TURBOPACK compile-time value", "https://api.themoviedb.org/3") || "",
    image_url: ("TURBOPACK compile-time value", "https://image.tmdb.org/t/p") || ""
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/components/Cards/MovieCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MovieCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/components/Cards/movieCards.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$icons$2f$fc$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/react-icons/fc/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/context/favouriteContext.tsx [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "e95f0e94a72f940a6d7fee131bf634e59dd07bda551202812c7403d37405d1a4") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e95f0e94a72f940a6d7fee131bf634e59dd07bda551202812c7403d37405d1a4";
    }
    const { movieList, title, onCardClick } = t0;
    const { isFavourite, favouriteToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavourite"])();
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container__heading,
                children: [
                    " ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                lineNumber: 36,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
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
            "MovieCards[(anonymous)()]": (list)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movie,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: {
                                "MovieCards[(anonymous)() > <Image>.onClick]": ()=>onCardClick(list.id)
                            }["MovieCards[(anonymous)() > <Image>.onClick]"],
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movie__images,
                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigMovie"].image_url}/w500/${list?.poster_path}`,
                            alt: "images",
                            width: 300,
                            height: 300,
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                            lineNumber: 45,
                            columnNumber: 88
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["container-progress"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["progress-label"],
                                    style: {
                                        "--progress": `${list?.vote_average * 10}%`
                                    },
                                    children: [
                                        Math.round(list.vote_average * 10) ?? "30%",
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                    lineNumber: 47,
                                    columnNumber: 254
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: {
                                        "MovieCards[(anonymous)() > <div>.onClick]": ()=>favouriteToggle(list)
                                    }["MovieCards[(anonymous)() > <div>.onClick]"],
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["favorite-button"],
                                    children: isFavourite(list?.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$icons$2f$fc$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FcLike"], {
                                        size: 35
                                    }, void 0, false, {
                                        fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                        lineNumber: 51,
                                        columnNumber: 121
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoHeartOutline"], {
                                        size: 35,
                                        color: "#ccc"
                                    }, void 0, false, {
                                        fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                        lineNumber: 51,
                                        columnNumber: 144
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                    lineNumber: 49,
                                    columnNumber: 90
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                            lineNumber: 47,
                            columnNumber: 209
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movie__title,
                            children: list.title
                        }, void 0, false, {
                            fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                            lineNumber: 51,
                            columnNumber: 198
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["movie__original-title"],
                            children: list?.original_title
                        }, void 0, false, {
                            fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                            lineNumber: 51,
                            columnNumber: 250
                        }, this)
                    ]
                }, list?.id, true, {
                    fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
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
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["movie-container"],
            children: t2
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
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
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["main-container"],
                children: [
                    t1,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                lineNumber: 71,
                columnNumber: 20
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
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
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavourite"]
    ];
});
_c = MovieCards;
var _c;
__turbopack_context__.k.register(_c, "MovieCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/constants/apiEndpointsConstants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiKeyUrl",
    ()=>ApiKeyUrl,
    "ApiMoviesUrls",
    ()=>ApiMoviesUrls,
    "DetailsMoviesApiUrl",
    ()=>DetailsMoviesApiUrl,
    "SearchMovieUrl",
    ()=>SearchMovieUrl
]);
const ApiMoviesUrls = {
    topRatedMovieUrl: '/movie/top_rated',
    trendingMovieUrl: '/trending/movie/week',
    upComingMovieUrl: '/movie/upcoming'
};
const DetailsMoviesApiUrl = {
    detailsMoviesUrl: '/movie/'
};
const ApiKeyUrl = {
    api_keys: '?api_key='
};
const SearchMovieUrl = {
    searchMoviesUrl: '/search/movie',
    query: '&query='
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/constants/apikeyConstants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiKeys",
    ()=>ApiKeys
]);
const ApiKeys = {
    apikeyValue: 'bbd7813ce47d8561b21b7eaee35599e8'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/constants/routesConstants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoutesConstants",
    ()=>RoutesConstants
]);
const RoutesConstants = {
    home: '/',
    movieSearch: '/searchMovie',
    movieDetails: '/movieDetails',
    topRatedMovie: '/topRatedMovie',
    upComingMovie: '/upComingMovie',
    trendingMovie: '/trendingMovie',
    favouritelist: '/favouriteList'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/app/topRatedMovie/usetopratedState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTopRatedState",
    ()=>useTopRatedState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apiEndpointsConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apikeyConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/routesConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
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
    const [topMovie, setTopMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const toproutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const topRatedTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PAGEHEADING);
    let t1;
    if ($[2] !== toproutes) {
        t1 = (id)=>{
            toproutes.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].movieDetails}/${id}`);
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
                const fetchmovies = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigMovie"].movie_url}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiMoviesUrls"].topRatedMovieUrl}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeyUrl"].api_keys}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeys"].apikeyValue}`);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
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
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/app/trendingMovie/useTrendingState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTrendingState",
    ()=>useTrendingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apiEndpointsConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apikeyConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/routesConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
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
    const [trendingMovie, setTrendingMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const trendingTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PAGEHEADING);
    const routes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[2] !== routes) {
        t1 = (id)=>{
            routes.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].movieDetails}/${id}`);
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
                const fetchTrending = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigMovie"].movie_url}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiMoviesUrls"].trendingMovieUrl}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeyUrl"].api_keys}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeys"].apikeyValue}`);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
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
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/app/upComingMovie/useUpComingState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUpComingState",
    ()=>useUpComingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apiEndpointsConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apikeyConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/routesConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
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
    const [upComingMovie, setUpComingMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const upComingTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PAGEHEADING);
    const upComeRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[2] !== upComeRoutes) {
        t1 = (id)=>{
            upComeRoutes.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].movieDetails}/${id}`);
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
                const fetchNewMovie = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigMovie"].movie_url}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiMoviesUrls"].upComingMovieUrl}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeyUrl"].api_keys}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeys"].apikeyValue}`);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
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
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/components/Header/header.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "hamburger-wrapper": "header-module-scss-module__zwWP6a__hamburger-wrapper",
  "header-container": "header-module-scss-module__zwWP6a__header-container",
  "header-container__logo": "header-module-scss-module__zwWP6a__header-container__logo",
  "navbar-container": "header-module-scss-module__zwWP6a__navbar-container",
  "navbar-container__links": "header-module-scss-module__zwWP6a__navbar-container__links",
  "navbar-container__links__mobile": "header-module-scss-module__zwWP6a__navbar-container__links__mobile",
  "navbar-desktop": "header-module-scss-module__zwWP6a__navbar-desktop",
  "navbar-mobile-menu": "header-module-scss-module__zwWP6a__navbar-mobile-menu",
});
}),
"[project]/movie-app-clone/src/constants/imagesConstants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImagesConstants",
    ()=>ImagesConstants
]);
const ImagesConstants = {
    defaultImages: '/images/defaultpic.jpg',
    clapperBoard: '/images/clapperboard.png',
    headerlogo: '/images/Cine.png',
    footerlogo: '/images/footerlogo.svg',
    backdropImage: '/images/backdropImage.webp'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/components/Search/searchMovie.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container__button": "searchMovie-module-scss-module__RtmSPa__container__button",
  "container__heading": "searchMovie-module-scss-module__RtmSPa__container__heading",
  "container__input": "searchMovie-module-scss-module__RtmSPa__container__input",
  "search": "searchMovie-module-scss-module__RtmSPa__search",
});
}),
"[project]/movie-app-clone/src/app/searchMovie/[text]/_useSearchState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSearchState",
    ()=>useSearchState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apiEndpointsConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apikeyConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const useSearchState = ()=>{
    _s();
    const [searchMovie, setSearchMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const queryParam = params.text;
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const searchTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].SEARCHPAGE);
    const erroetrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].ERRORHANDLING);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSearchState.useEffect": ()=>{
            async function fetchSearchMovie() {
                if (!queryParam) {
                    setIsLoading(false);
                    setSearchMovie([]);
                    return;
                }
                setIsLoading(true);
                const fetchUrl = `${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigMovie"].movie_url}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchMovieUrl"].searchMoviesUrl}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeyUrl"].api_keys}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiKeys"].apikeyValue}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchMovieUrl"].query}${queryParam}`;
                try {
                    const fetchResponse = await fetch(fetchUrl);
                    if (!fetchResponse.ok) {
                        throw new Error(erroetrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].NETWORKERROR));
                    }
                    const data = await fetchResponse.json();
                    setSearchMovie(data.results || []);
                } catch (error) {
                    setSearchMovie([]);
                } finally{
                    setIsLoading(false);
                }
            }
            fetchSearchMovie();
        }
    }["useSearchState.useEffect"], [
        queryParam
    ]);
    const handleSearchChange = (event)=>{
        setSearchTerm(event.target.value);
    };
    return {
        handleSearchChange,
        searchTerm,
        searchTrans,
        isLoading,
        searchMovie
    };
};
_s(useSearchState, "rabP/n2wBq0bGsASMKSTGQG1EyA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/components/Search/Search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchMovies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Search$2f$searchMovie$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/components/Search/searchMovie.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f5b$text$5d2f$_useSearchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/searchMovie/[text]/_useSearchState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/routesConstants.ts [app-client] (ecmascript)");
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
function SearchMovies() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "821c9fb0e9a3ad7068b048180af83f733de328d9c0eeea6e787ca963fa795f45") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "821c9fb0e9a3ad7068b048180af83f733de328d9c0eeea6e787ca963fa795f45";
    }
    const { searchTerm, handleSearchChange, searchTrans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f5b$text$5d2f$_useSearchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchState"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== router || $[2] !== searchTerm) {
        t0 = ({
            "SearchMovies[handleSearchSubmit]": (event)=>{
                event.preventDefault();
                const query = searchTerm.trim();
                if (!query) {
                    return;
                }
                router.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].movieSearch}/${query}`);
            }
        })["SearchMovies[handleSearchSubmit]"];
        $[1] = router;
        $[2] = searchTerm;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const handleSearchSubmit = t0;
    let t1;
    if ($[4] !== searchTrans) {
        t1 = searchTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].SEARCHMOVIEHEADING);
        $[4] = searchTrans;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Search$2f$searchMovie$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container__heading,
            children: t1
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Search/Search.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== searchTrans) {
        t3 = searchTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PLACEHOLDERSEARCH);
        $[8] = searchTrans;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== handleSearchChange || $[11] !== searchTerm || $[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Search$2f$searchMovie$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container__input,
            type: "text",
            placeholder: t3,
            value: searchTerm,
            onChange: handleSearchChange
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Search/Search.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[10] = handleSearchChange;
        $[11] = searchTerm;
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== searchTrans) {
        t5 = searchTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].SEARCHBTN);
        $[14] = searchTrans;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Search$2f$searchMovie$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container__button,
            children: t5
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Search/Search.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[16] = t5;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== handleSearchSubmit || $[19] !== t4 || $[20] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSearchSubmit,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/movie-app-clone/src/components/Search/Search.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[18] = handleSearchSubmit;
        $[19] = t4;
        $[20] = t6;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    let t8;
    if ($[22] !== t2 || $[23] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Search$2f$searchMovie$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    t2,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/movie-app-clone/src/components/Search/Search.tsx",
                lineNumber: 105,
                columnNumber: 20
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Search/Search.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[22] = t2;
        $[23] = t7;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    return t8;
}
_s(SearchMovies, "Syks5TQk4qYLHsEd3l8mn3QrwpA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f5b$text$5d2f$_useSearchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SearchMovies;
var _c;
__turbopack_context__.k.register(_c, "SearchMovies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/components/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/routesConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/components/Header/header.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/hamburger-react/dist-esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$imagesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/imagesConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Search$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/components/Search/Search.tsx [app-client] (ecmascript)");
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
;
;
;
;
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "6a79fc3cfc2511273924b20a0129a4bb4938a813c9ca886a9ed112c4c9cb3d51") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6a79fc3cfc2511273924b20a0129a4bb4938a813c9ca886a9ed112c4c9cb3d51";
    }
    const headerTranslations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].HEADER);
    const [isOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const routes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== headerTranslations) {
        t0 = headerTranslations(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].TOPRATEDMOVIE);
        $[1] = headerTranslations;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = {
            id: 1,
            navbar: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].topRatedMovie,
            value: t0
        };
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== headerTranslations) {
        t2 = headerTranslations(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].UPCOMINGMOVIE);
        $[5] = headerTranslations;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t2) {
        t3 = {
            id: 2,
            navbar: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].upComingMovie,
            value: t2
        };
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== headerTranslations) {
        t4 = headerTranslations(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].TRENDINGMOVIE);
        $[9] = headerTranslations;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t4) {
        t5 = {
            id: 3,
            navbar: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].trendingMovie,
            value: t4
        };
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== headerTranslations) {
        t6 = headerTranslations(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].FAVOURITE);
        $[13] = headerTranslations;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t6) {
        t7 = {
            id: 4,
            navbar: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].favouritelist,
            value: t6
        };
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t1 || $[18] !== t3 || $[19] !== t5 || $[20] !== t7) {
        t8 = [
            t1,
            t3,
            t5,
            t7
        ];
        $[17] = t1;
        $[18] = t3;
        $[19] = t5;
        $[20] = t7;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    const pages = t8;
    let t9;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Header[handleLinkClick]": ()=>{
                setOpen(false);
            }
        })["Header[handleLinkClick]"];
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    const handleLinkClick = t9;
    let t10;
    if ($[23] !== isOpen) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["hamburger-wrapper"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                toggled: isOpen,
                toggle: setOpen
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/components/Header/Header.tsx",
                lineNumber: 133,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Header/Header.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[23] = isOpen;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== routes) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClick: {
                "Header[<Image>.onClick]": ()=>routes.push(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].home)
            }["Header[<Image>.onClick]"],
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["header-container__logo"],
            src: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$imagesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImagesConstants"].headerlogo,
            width: 170,
            height: 170,
            unoptimized: true,
            alt: "headerImage"
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Header/Header.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[25] = routes;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Search$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Header/Header.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== pages) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["navbar-desktop"],
            children: pages.map(_HeaderPagesMap)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Header/Header.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[28] = pages;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== isOpen || $[31] !== pages) {
        t14 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["navbar-mobile-menu"],
            children: pages.map({
                "Header[pages.map()]": (list_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["navbar-container__links__mobile"],
                        href: list_0.navbar,
                        onClick: handleLinkClick,
                        children: list_0.value
                    }, list_0.id, false, {
                        fileName: "[project]/movie-app-clone/src/components/Header/Header.tsx",
                        lineNumber: 167,
                        columnNumber: 42
                    }, this)
            }["Header[pages.map()]"])
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Header/Header.tsx",
            lineNumber: 166,
            columnNumber: 21
        }, this);
        $[30] = isOpen;
        $[31] = pages;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t10 || $[34] !== t11 || $[35] !== t13 || $[36] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["header-container"],
                children: [
                    t10,
                    t11,
                    t12,
                    t13,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/movie-app-clone/src/components/Header/Header.tsx",
                lineNumber: 177,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Header/Header.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[33] = t10;
        $[34] = t11;
        $[35] = t13;
        $[36] = t14;
        $[37] = t15;
    } else {
        t15 = $[37];
    }
    return t15;
}
_s(Header, "PTfifWBN79UeBGjva2ZQR6GXG74=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
function _HeaderPagesMap(list) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["navbar-container"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Header$2f$header$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["navbar-container__links"],
            href: list.navbar,
            children: list.value
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Header/Header.tsx",
            lineNumber: 189,
            columnNumber: 67
        }, this)
    }, list.id, false, {
        fileName: "[project]/movie-app-clone/src/components/Header/Header.tsx",
        lineNumber: 189,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/components/Footer/footer.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btn": "footer-module-scss-module__okQc0a__btn",
  "container-footer": "footer-module-scss-module__okQc0a__container-footer",
});
}),
"[project]/movie-app-clone/src/components/Footer/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Footer$2f$footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/components/Footer/footer.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$imagesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/imagesConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function Footer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "3b4df8c08e3503f5d21d10fd4c4267d22d179817db82bc9a2aec8dbddb454e2b") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3b4df8c08e3503f5d21d10fd4c4267d22d179817db82bc9a2aec8dbddb454e2b";
    }
    const footerTitleTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].FOOTERTITLE);
    const footerDataTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].FOOTERDATA);
    let T0;
    let t0;
    let t1;
    let t2;
    if ($[1] !== footerDataTrans || $[2] !== footerTitleTrans) {
        const footerData = [
            {
                title: footerTitleTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].BASICTITLE),
                data: [
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].ABOUT)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].CONTACT)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].APIDOCUMENTATION)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].SYSTEMSTATUS)
                    }
                ]
            },
            {
                title: footerTitleTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].GETINVOLVEDTITLE),
                data: [
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].CONTRIBUTE)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].ADDNEWMOVIE)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].RECOMMENDATION)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].BUSINESS)
                    }
                ]
            },
            {
                title: footerTitleTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].COMMUNITYTITLE),
                data: [
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].LEADERBOARD)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].SUPPORTSFORUM)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].DISCUSSION)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].SUPPORTSFORUM)
                    }
                ]
            },
            {
                title: footerTitleTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].LEGALTITLE),
                data: [
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].TERMOFUSE)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].APITERMOFUSE)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PRIVACYPOLICY)
                    },
                    {
                        name: footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].DMCAPOLICY)
                    }
                ]
            }
        ];
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
        t0 = __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Footer$2f$footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["container-footer"];
        let t3;
        let t4;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$imagesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImagesConstants"].footerlogo,
                width: 120,
                height: 120,
                alt: "App logo"
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/components/Footer/Footer.tsx",
                lineNumber: 73,
                columnNumber: 12
            }, this);
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/movie-app-clone/src/components/Footer/Footer.tsx",
                lineNumber: 74,
                columnNumber: 12
            }, this);
            $[7] = t3;
            $[8] = t4;
        } else {
            t3 = $[7];
            t4 = $[8];
        }
        let t5;
        if ($[9] !== footerDataTrans) {
            t5 = footerDataTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].HIUSER);
            $[9] = footerDataTrans;
            $[10] = t5;
        } else {
            t5 = $[10];
        }
        if ($[11] !== t5) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t3,
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Footer$2f$footer$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                        children: t5
                    }, void 0, false, {
                        fileName: "[project]/movie-app-clone/src/components/Footer/Footer.tsx",
                        lineNumber: 90,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/movie-app-clone/src/components/Footer/Footer.tsx",
                lineNumber: 90,
                columnNumber: 12
            }, this);
            $[11] = t5;
            $[12] = t1;
        } else {
            t1 = $[12];
        }
        t2 = footerData.map(_FooterFooterDataMap);
        $[1] = footerDataTrans;
        $[2] = footerTitleTrans;
        $[3] = T0;
        $[4] = t0;
        $[5] = t1;
        $[6] = t2;
    } else {
        T0 = $[3];
        t0 = $[4];
        t1 = $[5];
        t2 = $[6];
    }
    let t3;
    if ($[13] !== t0 || $[14] !== t1 || $[15] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: t0,
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/movie-app-clone/src/components/Footer/Footer.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[13] = t0;
        $[14] = t1;
        $[15] = t2;
        $[16] = t3;
    } else {
        t3 = $[16];
    }
    let t4;
    if ($[17] !== T0 || $[18] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t3
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Footer/Footer.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[17] = T0;
        $[18] = t3;
        $[19] = t4;
    } else {
        t4 = $[19];
    }
    return t4;
}
_s(Footer, "8i/hkjZu0hybevzPUgCjlciWLCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = Footer;
function _FooterFooterDataMap(section) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: section.title
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/components/Footer/Footer.tsx",
                lineNumber: 131,
                columnNumber: 35
            }, this),
            section.data.map(_FooterFooterDataMapSectionDataMap)
        ]
    }, section.title, true, {
        fileName: "[project]/movie-app-clone/src/components/Footer/Footer.tsx",
        lineNumber: 131,
        columnNumber: 10
    }, this);
}
function _FooterFooterDataMapSectionDataMap(val, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: val.name
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/components/Footer/Footer.tsx",
            lineNumber: 134,
            columnNumber: 27
        }, this)
    }, index, false, {
        fileName: "[project]/movie-app-clone/src/components/Footer/Footer.tsx",
        lineNumber: 134,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/app/home/_components/Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$home$2f$home$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/home/home.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/components/Cards/MovieCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$topRatedMovie$2f$usetopratedState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/topRatedMovie/usetopratedState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$trendingMovie$2f$useTrendingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/trendingMovie/useTrendingState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$upComingMovie$2f$useUpComingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/upComingMovie/useUpComingState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/components/Header/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/components/Footer/Footer.tsx [app-client] (ecmascript)");
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
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "486764739441a66fbcd86b865a79e5b2d2e8aadac47fefbb7b55e6b81a840aa5") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "486764739441a66fbcd86b865a79e5b2d2e8aadac47fefbb7b55e6b81a840aa5";
    }
    const infoTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].INFORAMTION);
    const { topMovie, handleCardClick, topRatedTrans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$topRatedMovie$2f$usetopratedState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTopRatedState"])();
    const { trendingMovie, handleTrendingCardClick, trendingTrans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$trendingMovie$2f$useTrendingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrendingState"])();
    const { upComingMovie, handleUpComingCardClick, upComingTrans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$upComingMovie$2f$useUpComingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpComingState"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== infoTrans) {
        t1 = infoTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].HOMEPAGEINFORM);
        $[2] = infoTrans;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$home$2f$home$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$home$2f$home$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container__heading,
                children: t1
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                lineNumber: 54,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== topRatedTrans) {
        t3 = topRatedTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].TOPRATINGMOVIESHEADING);
        $[6] = topRatedTrans;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== handleCardClick || $[9] !== t3 || $[10] !== topMovie) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                movieList: topMovie,
                title: t3,
                onCardClick: handleCardClick
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                lineNumber: 70,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[8] = handleCardClick;
        $[9] = t3;
        $[10] = topMovie;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== trendingTrans) {
        t5 = trendingTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].TRENDINGMOVIEHEADING);
        $[12] = trendingTrans;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== handleTrendingCardClick || $[15] !== t5 || $[16] !== trendingMovie) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                movieList: trendingMovie,
                title: t5,
                onCardClick: handleTrendingCardClick
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                lineNumber: 88,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[14] = handleTrendingCardClick;
        $[15] = t5;
        $[16] = trendingMovie;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== upComingTrans) {
        t7 = upComingTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].UPCOMINGMOVIEHEADING);
        $[18] = upComingTrans;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== handleUpComingCardClick || $[21] !== t7 || $[22] !== upComingMovie) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                movieList: upComingMovie,
                title: t7,
                onCardClick: handleUpComingCardClick
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                lineNumber: 106,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[20] = handleUpComingCardClick;
        $[21] = t7;
        $[22] = upComingMovie;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t2 || $[26] !== t4 || $[27] !== t6 || $[28] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t0,
                t2,
                t4,
                t6,
                t8,
                t9
            ]
        }, void 0, true);
        $[25] = t2;
        $[26] = t4;
        $[27] = t6;
        $[28] = t8;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    return t10;
}
_s(Home, "vodEYB/YE2Ioqj8D1sOZYUsvTpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$topRatedMovie$2f$usetopratedState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTopRatedState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$trendingMovie$2f$useTrendingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrendingState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$upComingMovie$2f$useUpComingState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpComingState"]
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

//# sourceMappingURL=movie-app-clone_src_e50eaddb._.js.map