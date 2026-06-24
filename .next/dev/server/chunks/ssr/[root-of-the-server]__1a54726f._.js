module.exports = [
"[project]/movie-app-clone/src/app/movieDetails/movieDetails.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "movieDetails-module-scss-module__bTRk_W__card",
  "card__btn": "movieDetails-module-scss-module__bTRk_W__card__btn",
  "card__content": "movieDetails-module-scss-module__bTRk_W__card__content",
  "card__header": "movieDetails-module-scss-module__bTRk_W__card__header",
  "card__image": "movieDetails-module-scss-module__bTRk_W__card__image",
  "card__overview": "movieDetails-module-scss-module__bTRk_W__card__overview",
  "card__rating": "movieDetails-module-scss-module__bTRk_W__card__rating",
  "container": "movieDetails-module-scss-module__bTRk_W__container",
});
}),
"[project]/movie-app-clone/src/config/configMovie.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigMovie",
    ()=>ConfigMovie
]);
const ConfigMovie = {
    movie_url: ("TURBOPACK compile-time value", "https://api.themoviedb.org/3") || "",
    image_url: ("TURBOPACK compile-time value", "https://image.tmdb.org/t/p") || ""
};
}),
"[project]/movie-app-clone/src/constants/apiEndpointsConstants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/movie-app-clone/src/constants/apikeyConstants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiKeys",
    ()=>ApiKeys
]);
const ApiKeys = {
    apikeyValue: 'bbd7813ce47d8561b21b7eaee35599e8'
};
}),
"[project]/movie-app-clone/src/constants/imagesConstants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/movie-app-clone/src/app/movieDetails/[id]/_useMovieDetails.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMovieDetails",
    ()=>useMovieDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apiEndpointsConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/apikeyConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$imagesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/imagesConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/context/favouriteContext.tsx [app-ssr] (ecmascript)");
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
;
const useMovieDetails = ()=>{
    const { addFavourite } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFavourite"])();
    const [movieDetails, setMovieDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const movieId = params.id;
    const movieTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].PAGEHEADING);
    const addTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].INFORAMTION);
    const imageUrl = movieDetails?.poster_path ? `${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigMovie"].image_url}/w500/${movieDetails?.poster_path}` : __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$imagesConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImagesConstants"].defaultImages;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchmovieDetails() {
            const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigMovie"].movie_url}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailsMoviesApiUrl"].detailsMoviesUrl}${movieId}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apiEndpointsConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiKeyUrl"].api_keys}${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$apikeyConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiKeys"].apikeyValue}`);
            const movieData = await res.json();
            setMovieDetails(movieData);
        }
        if (movieId) {
            fetchmovieDetails();
        }
    }, [
        movieId
    ]);
    return {
        addFavourite,
        movieDetails,
        movieId,
        movieTrans,
        addTrans,
        imageUrl
    };
};
}),
"[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MovieDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$movieDetails$2f$movieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/movieDetails/movieDetails.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$movieDetails$2f5b$id$5d2f$_useMovieDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/movieDetails/[id]/_useMovieDetails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function MovieDetails() {
    const { movieDetails, addFavourite, movieTrans, addTrans, imageUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$movieDetails$2f5b$id$5d2f$_useMovieDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMovieDetails"])();
    if (!movieDetails) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: movieTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].LOADING)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx",
            lineNumber: 13,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$movieDetails$2f$movieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$movieDetails$2f$movieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigMovie"].image_url}/w500${movieDetails.poster_path}`,
                        alt: movieDetails.title,
                        width: 350,
                        height: 400,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$movieDetails$2f$movieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card__image
                    }, void 0, false, {
                        fileName: "[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx",
                        lineNumber: 21,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$movieDetails$2f$movieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card__content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$movieDetails$2f$movieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card__header,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: movieDetails.title
                                    }, void 0, false, {
                                        fileName: "[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$movieDetails$2f$movieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card__rating,
                                        children: movieDetails.vote_average.toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx",
                                lineNumber: 32,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$movieDetails$2f$movieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card__overview,
                                children: movieDetails.overview
                            }, void 0, false, {
                                fileName: "[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx",
                                lineNumber: 41,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$movieDetails$2f$movieDetails$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card__btn,
                                onClick: ()=>addFavourite(movieDetails),
                                children: "Add to Favourite"
                            }, void 0, false, {
                                fileName: "[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx",
                                lineNumber: 45,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx",
                        lineNumber: 30,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx",
                lineNumber: 18,
                columnNumber: 3
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/movie-app-clone/src/app/movieDetails/[id]/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1a54726f._.js.map