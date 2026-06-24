(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/movie-app-clone/src/app/searchMovie/searchMovieDetails.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/config/configMovie.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/searchMovie/searchMovieDetails.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$imagesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/imagesConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f5b$text$5d2f$_useSearchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/app/searchMovie/[text]/_useSearchState.ts [app-client] (ecmascript)");
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
;
;
;
function SearchDetailsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "515e69e1a68e6e059f03cfe320a0bec281d49862abf468823f36b6faa37842f4") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "515e69e1a68e6e059f03cfe320a0bec281d49862abf468823f36b6faa37842f4";
    }
    const { searchTrans, isLoading, searchMovie } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f5b$text$5d2f$_useSearchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchState"])();
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] !== searchTrans) {
        t0 = searchTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].SEARCHMOVIE);
        $[1] = searchTrans;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container__heading,
            children: t0
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== isLoading || $[6] !== route || $[7] !== searchMovie || $[8] !== searchTrans) {
        t2 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
            children: searchTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].SEARCHINGTEXT)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
            lineNumber: 45,
            columnNumber: 22
        }, this) : searchMovie.length > 0 ? searchMovie.map({
            "SearchDetailsPage[searchMovie.map()]": (movie)=>{
                const imageUrl = movie.poster_path ? `${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigMovie"].image_url}/w500/${movie.poster_path}` : __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$imagesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImagesConstants"].defaultImages;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: {
                        "SearchDetailsPage[searchMovie.map() > <div>.onClick]": ()=>{
                            route.push(`${__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$routesConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesConstants"].movieDetails}/${movie.id}`);
                        }
                    }["SearchDetailsPage[searchMovie.map() > <div>.onClick]"],
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movie,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movie__images,
                            src: imageUrl,
                            width: 300,
                            height: 300,
                            unoptimized: true,
                            alt: movie.title
                        }, void 0, false, {
                            fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                            lineNumber: 52,
                            columnNumber: 107
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movie__title,
                            children: movie.title
                        }, void 0, false, {
                            fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                            lineNumber: 52,
                            columnNumber: 225
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["movie__original-title"],
                            children: movie.original_title
                        }, void 0, false, {
                            fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                            lineNumber: 52,
                            columnNumber: 278
                        }, this)
                    ]
                }, movie.id, true, {
                    fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                    lineNumber: 48,
                    columnNumber: 16
                }, this);
            }
        }["SearchDetailsPage[searchMovie.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].movie__searching,
            children: searchTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].NOTFOUNDMOVIES)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
            lineNumber: 54,
            columnNumber: 50
        }, this);
        $[5] = isLoading;
        $[6] = route;
        $[7] = searchMovie;
        $[8] = searchTrans;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["container-search"],
            children: t2
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== t1 || $[13] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f$searchMovieDetails$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    t1,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
                lineNumber: 73,
                columnNumber: 20
            }, this)
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/app/searchMovie/[text]/page.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[12] = t1;
        $[13] = t3;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    return t4;
}
_s(SearchDetailsPage, "AnstTXV+RA9FNlM5lkbwtp3iJt0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$app$2f$searchMovie$2f5b$text$5d2f$_useSearchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SearchDetailsPage;
var _c;
__turbopack_context__.k.register(_c, "SearchDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=movie-app-clone_src_75196f4c._.js.map