module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/movie-app-clone/src/constants/movieEnums.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MovieEnums",
    ()=>MovieEnums
]);
var MovieEnums = /*#__PURE__*/ function(MovieEnums) {
    MovieEnums["FAVOURITE"] = "favourite";
    MovieEnums["AUTH_USER"] = "AUTH_USER";
    return MovieEnums;
}({});
}),
"[project]/movie-app-clone/src/constants/translationConstants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRANSLATIONCONSTANTSMOVIE",
    ()=>TRANSLATIONCONSTANTSMOVIE
]);
const TRANSLATIONCONSTANTSMOVIE = {
    HEADER: "header",
    HOME: "home",
    UPCOMINGMOVIE: "upcomingmovie",
    TOPRATEDMOVIE: "topratedmovie",
    TRENDINGMOVIE: "trendingmovie",
    SEARCHMOVIE: "searchmovie",
    MOVIEDETAILS: "moviedetails",
    FAVOURITE: "favourite",
    PAGEHEADING: "pageheading",
    UPCOMINGMOVIEHEADING: "upcomingmovieheading",
    TOPRATINGMOVIESHEADING: "topratingmoviesheading",
    TRENDINGMOVIEHEADING: "trendingmovieheading",
    MOVIEDETAILSHEADING: "moviedetailsheading",
    LOADING: "loading",
    SEARCHPAGE: "searchPage",
    SEARCHMOVIEHEADING: "searchmovieheading",
    PLACEHOLDERSEARCH: "placeholdersearch",
    SEARCHINGTEXT: "searchingtext",
    GORESULTS: "goresults",
    SEARCHBTN: "searchbtn",
    NOTFOUNDMOVIES: "notfoundmovies",
    INFORAMTION: "inforamtion",
    FAVOURITEMOVIEHEADING: "favouritemovieheading",
    HOMEPAGEINFORM: "homepageinform",
    FAVOUTIEEMPTYINFO: "favoutieemptyinfo",
    FAVOURITEADDEDINFO: "favouriteaddedinfo",
    FAVOURITEDELETEINFO: "favouritedeleteinfo",
    DELETEFAVOURITECARDS: "deletefavouritecards",
    ADDEDFAVOURITECARDS: "addedfavouritecards",
    FOOTERTITLE: "footertitle",
    BASICTITLE: "basictitle",
    GETINVOLVEDTITLE: "getinvolvedtitle",
    COMMUNITYTITLE: "communitytitle",
    LEGALTITLE: "legaltitle",
    FOOTERDATA: "footerdata",
    ABOUT: "about",
    CONTACT: "contact",
    APIDOCUMENTATION: "apidocumentation",
    CONTRIBUTE: "contribute",
    ADDNEWMOVIE: "addnewmovie",
    RECOMMENDATION: "recommendation",
    GUIDELINES: "guidelines",
    LEADERBOARD: "leaderboard",
    SUPPORTSFORUM: "Supportsforum",
    DISCUSSION: "discussion",
    TERMOFUSE: "termofuse",
    APITERMOFUSE: "apitermofuse",
    PRIVACYPOLICY: "privacypolicy",
    DMCAPOLICY: "dmcapolicy",
    SYSTEMSTATUS: "systemstatus",
    BUSINESS: "business",
    HIUSER: "hiuser",
    ERRORHANDLING: "errorhandling",
    CONTEXTERROR: "contexterror",
    NETWORKERROR: "networkerror"
};
}),
"[project]/movie-app-clone/src/context/favouriteContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FavouriteProvider",
    ()=>FavouriteProvider,
    "useFavourite",
    ()=>useFavourite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$movieEnums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/movieEnums.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const FavouriteContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const FavouriteProvider = ({ children })=>{
    const favouriteTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].INFORAMTION);
    const [movie, setMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedFavorites = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$movieEnums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MovieEnums"].FAVOURITE);
        if (storedFavorites) {
            setMovie(JSON.parse(storedFavorites));
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$movieEnums$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MovieEnums"].FAVOURITE, JSON.stringify(movie));
    }, [
        movie
    ]);
    const addFavourite = (newMovie)=>{
        setMovie((prevMovies)=>{
            const isAlreadyInFavourites = prevMovies.some((existingMovie)=>existingMovie.id === newMovie.id);
            if (isAlreadyInFavourites) {
                return prevMovies;
            }
            return [
                ...prevMovies,
                newMovie
            ];
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(favouriteTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].FAVOURITEADDEDINFO));
    };
    const deleteFromFavourite = (id)=>{
        setMovie((prev)=>prev.filter((m)=>m.id !== id));
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(favouriteTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].FAVOURITEDELETEINFO));
    };
    const isFavourite = (id)=>{
        const data = movie.some((item)=>item.id === id);
        return data;
    };
    const favouriteToggle = (movie)=>{
        if (isFavourite(movie.id)) {
            deleteFromFavourite(movie.id);
        } else {
            addFavourite(movie);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FavouriteContext.Provider, {
        value: {
            movie,
            addFavourite,
            deleteFromFavourite,
            isFavourite,
            favouriteToggle
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/movie-app-clone/src/context/favouriteContext.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useFavourite = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FavouriteContext);
    const errortrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].ERRORHANDLING);
    if (context === undefined) {
        throw new Error(errortrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].CONTEXTERROR));
    }
    return context;
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a8148a20._.js.map