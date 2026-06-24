module.exports = [
"[project]/movie-app-clone/src/app/home/home.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "home-module-scss-module__dbm0bW__container",
  "container__heading": "home-module-scss-module__dbm0bW__container__heading",
});
}),
"[project]/movie-app-clone/src/components/Cards/movieCards.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/movie-app-clone/src/components/Cards/MovieCards.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MovieCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/components/Cards/movieCards.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$icons$2f$fc$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/react-icons/fc/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/context/favouriteContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function MovieCards({ movieList, title, onCardClick }) {
    const { isFavourite, favouriteToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFavourite"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["main-container"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container__heading"],
                        children: [
                            " ",
                            title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                    lineNumber: 24,
                    columnNumber: 10
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["movie-container"],
                    children: movieList?.map((list)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["movie"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: ()=>onCardClick(list.id),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["movie__images"],
                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigMovie"].image_url}/w500/${list?.poster_path}`,
                                    alt: "images",
                                    width: 300,
                                    height: 300,
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container-progress"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["progress-label"],
                                            style: {
                                                "--progress": `${list?.vote_average * 10}%`
                                            },
                                            children: [
                                                Math.round(list.vote_average * 10) ?? "30%",
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>favouriteToggle(list),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["favorite-button"],
                                            children: isFavourite(list?.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$icons$2f$fc$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FcLike"], {
                                                size: 35
                                            }, void 0, false, {
                                                fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoHeartOutline"], {
                                                size: 35,
                                                color: "#ccc"
                                            }, void 0, false, {
                                                fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["movie__title"],
                                    children: list.title
                                }, void 0, false, {
                                    fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$movieCards$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["movie__original-title"],
                                    children: list?.original_title
                                }, void 0, false, {
                                    fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, list?.id, true, {
                            fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
                    lineNumber: 27,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/movie-app-clone/src/components/Cards/MovieCards.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/movie-app-clone/src/app/topRatedMovie/usetopratedState.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTopRatedState",
    ()=>useTopRatedState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apiEndpointsConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apikeyConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/routesConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const useTopRatedState = ()=>{
    const [topMovie, setTopMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const toproutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const topRatedTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PAGEHEADING);
    const handleCardClick = (id)=>{
        toproutes.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoutesConstants"].movieDetails}/${id}`);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchtopRatedMovieUrl() {
            const fetchmovies = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigMovie"].movie_url}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiMoviesUrls"].topRatedMovieUrl}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiKeyUrl"].api_keys}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiKeys"].apikeyValue}`);
            const response = await fetchmovies.json();
            setTopMovie(response.results);
        }
        fetchtopRatedMovieUrl();
    }, []);
    return {
        topMovie,
        handleCardClick,
        topRatedTrans
    };
};
}),
"[project]/movie-app-clone/src/app/trendingMovie/useTrendingState.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTrendingState",
    ()=>useTrendingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apiEndpointsConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apikeyConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/routesConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const useTrendingState = ()=>{
    const [trendingMovie, setTrendingMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const trendingTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PAGEHEADING);
    const routes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleTrendingCardClick = (id)=>{
        routes.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoutesConstants"].movieDetails}/${id}`);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchtrendingMovie() {
            const fetchTrending = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigMovie"].movie_url}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiMoviesUrls"].trendingMovieUrl}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiKeyUrl"].api_keys}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiKeys"].apikeyValue}`);
            const response = await fetchTrending.json();
            setTrendingMovie(response.results);
        }
        fetchtrendingMovie();
    }, []);
    return {
        trendingMovie,
        handleTrendingCardClick,
        trendingTrans
    };
};
}),
"[project]/movie-app-clone/src/app/upComingMovie/useUpComingState.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUpComingState",
    ()=>useUpComingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apiEndpointsConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apikeyConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/routesConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const useUpComingState = ()=>{
    const [upComingMovie, setUpComingMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const upComingTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PAGEHEADING);
    const upComeRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleUpComingCardClick = (id)=>{
        upComeRoutes.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoutesConstants"].movieDetails}/${id}`);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchUpComingMovie() {
            const fetchNewMovie = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigMovie"].movie_url}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiMoviesUrls"].upComingMovieUrl}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiKeyUrl"].api_keys}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiKeys"].apikeyValue}`);
            const response = await fetchNewMovie.json();
            setUpComingMovie(response.results);
            console.log(response.results);
        }
        fetchUpComingMovie();
    }, []);
    return {
        upComingMovie,
        handleUpComingCardClick,
        upComeRoutes,
        upComingTrans
    };
};
}),
"[project]/movie-app-clone/src/app/home/_components/Home.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$home$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/home/home.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/components/Cards/MovieCards.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$topRatedMovie$2f$usetopratedState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/topRatedMovie/usetopratedState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$trendingMovie$2f$useTrendingState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/trendingMovie/useTrendingState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$upComingMovie$2f$useUpComingState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/upComingMovie/useUpComingState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-ssr] (ecmascript)");
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
    const infoTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].INFORAMTION);
    const { topMovie, handleCardClick, topRatedTrans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$topRatedMovie$2f$usetopratedState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTopRatedState"])();
    const { trendingMovie, handleTrendingCardClick, trendingTrans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$trendingMovie$2f$useTrendingState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTrendingState"])();
    const { upComingMovie, handleUpComingCardClick, upComingTrans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$upComingMovie$2f$useUpComingState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUpComingState"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$home$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$home$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container__heading"],
                    children: infoTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].HOMEPAGEINFORM)
                }, void 0, false, {
                    fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    movieList: topMovie,
                    title: topRatedTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].TOPRATINGMOVIESHEADING),
                    onCardClick: handleCardClick
                }, void 0, false, {
                    fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    movieList: trendingMovie,
                    title: trendingTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].TRENDINGMOVIEHEADING),
                    onCardClick: handleTrendingCardClick
                }, void 0, false, {
                    fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$components$2f$Cards$2f$MovieCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    movieList: upComingMovie,
                    title: upComingTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].UPCOMINGMOVIEHEADING),
                    onCardClick: handleUpComingCardClick
                }, void 0, false, {
                    fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/movie-app-clone/src/app/home/_components/Home.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=movie-app-clone_src_34dcc03c._.js.map