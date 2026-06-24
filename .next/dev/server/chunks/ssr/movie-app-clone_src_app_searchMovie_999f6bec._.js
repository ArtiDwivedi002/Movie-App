module.exports = [
"[project]/movie-app-clone/src/app/searchMovie/searchMovieDetails.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "searchMovieDetails-module-scss-module__0rPvrq__container",
  "container-search": "searchMovieDetails-module-scss-module__0rPvrq__container-search",
  "container__heading": "searchMovieDetails-module-scss-module__0rPvrq__container__heading",
  "loading": "searchMovieDetails-module-scss-module__0rPvrq__loading",
  "movie": "searchMovieDetails-module-scss-module__0rPvrq__movie",
  "movie__images": "searchMovieDetails-module-scss-module__0rPvrq__movie__images",
  "movie__original-title": "searchMovieDetails-module-scss-module__0rPvrq__movie__original-title",
  "movie__searching": "searchMovieDetails-module-scss-module__0rPvrq__movie__searching",
  "movie__title": "searchMovieDetails-module-scss-module__0rPvrq__movie__title",
});
}),
"[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/searchMovie/searchMovieDetails.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$imagesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/imagesConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f5b$text$5d2f$_useSearchState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/searchMovie/[text]/_useSearchState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/routesConstants.ts [app-ssr] (ecmascript)");
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
function SearchDetailsPage() {
    const { searchTrans, isLoading, searchMovie } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f5b$text$5d2f$_useSearchState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchState"])();
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container__heading"],
                    children: searchTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].SEARCHMOVIE)
                }, void 0, false, {
                    fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container-search"],
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["loading"],
                        children: searchTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].SEARCHINGTEXT)
                    }, void 0, false, {
                        fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                        lineNumber: 23,
                        columnNumber: 25
                    }, this) : searchMovie.length > 0 ? searchMovie.map((movie)=>{
                        const imageUrl = movie.poster_path ? `${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigMovie"].image_url}/w500/${movie.poster_path}` : __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$imagesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImagesConstants"].defaultImages;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>{
                                route.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoutesConstants"].movieDetails}/${movie.id}`);
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["movie"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["movie__images"],
                                    src: imageUrl,
                                    width: 300,
                                    height: 300,
                                    unoptimized: true,
                                    alt: movie.title
                                }, void 0, false, {
                                    fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["movie__title"],
                                    children: movie.title
                                }, void 0, false, {
                                    fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["movie__original-title"],
                                    children: movie.original_title
                                }, void 0, false, {
                                    fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, movie.id, true, {
                            fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                            lineNumber: 30,
                            columnNumber: 31
                        }, this);
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["movie__searching"],
                        children: searchTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].NOTFOUNDMOVIES)
                    }, void 0, false, {
                        fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=movie-app-clone_src_app_searchMovie_999f6bec._.js.map