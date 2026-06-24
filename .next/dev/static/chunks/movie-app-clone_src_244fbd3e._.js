(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/movie-app-clone/src/constants/movieEnums.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/constants/translationConstants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/movie-app-clone/src/context/favouriteContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FavouriteProvider",
    ()=>FavouriteProvider,
    "useFavourite",
    ()=>useFavourite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$movieEnums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/movieEnums.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/movie-app-clone/src/constants/translationConstants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const FavouriteContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const FavouriteProvider = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "03cca0f37634a8afd6d6ff50eb988cd8d6fa7cff49e624bbf36cac4d2ac3ab59") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "03cca0f37634a8afd6d6ff50eb988cd8d6fa7cff49e624bbf36cac4d2ac3ab59";
    }
    const { children } = t0;
    const favouriteTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].INFORAMTION);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [movie, setMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            const storedFavorites = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$movieEnums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MovieEnums"].FAVOURITE);
            if (storedFavorites) {
                setMovie(JSON.parse(storedFavorites));
            }
        };
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[4] !== movie) {
        t4 = ()=>{
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$movieEnums$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MovieEnums"].FAVOURITE, JSON.stringify(movie));
        };
        t5 = [
            movie
        ];
        $[4] = movie;
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[7] !== favouriteTrans) {
        t6 = (newMovie)=>{
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
            __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(favouriteTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].FAVOURITEADDEDINFO));
        };
        $[7] = favouriteTrans;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const addFavourite = t6;
    let t7;
    if ($[9] !== favouriteTrans) {
        t7 = (id)=>{
            setMovie((prev)=>prev.filter((m)=>m.id !== id));
            __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(favouriteTrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].FAVOURITEDELETEINFO));
        };
        $[9] = favouriteTrans;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const deleteFromFavourite = t7;
    let t8;
    if ($[11] !== movie) {
        t8 = (id_0)=>{
            const data = movie.some((item)=>item.id === id_0);
            return data;
        };
        $[11] = movie;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const isFavourite = t8;
    let t9;
    if ($[13] !== addFavourite || $[14] !== deleteFromFavourite || $[15] !== isFavourite) {
        t9 = (movie_0)=>{
            if (isFavourite(movie_0.id)) {
                deleteFromFavourite(movie_0.id);
            } else {
                addFavourite(movie_0);
            }
        };
        $[13] = addFavourite;
        $[14] = deleteFromFavourite;
        $[15] = isFavourite;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const favouriteToggle = t9;
    let t10;
    if ($[17] !== addFavourite || $[18] !== deleteFromFavourite || $[19] !== favouriteToggle || $[20] !== isFavourite || $[21] !== movie) {
        t10 = {
            movie,
            addFavourite,
            deleteFromFavourite,
            isFavourite,
            favouriteToggle
        };
        $[17] = addFavourite;
        $[18] = deleteFromFavourite;
        $[19] = favouriteToggle;
        $[20] = isFavourite;
        $[21] = movie;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== children || $[24] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FavouriteContext.Provider, {
            value: t10,
            children: children
        }, void 0, false, {
            fileName: "[project]/movie-app-clone/src/context/favouriteContext.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = children;
        $[24] = t10;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    return t11;
};
_s(FavouriteProvider, "/pVWOo8Ynv97u9BfhvleFpw3FBs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = FavouriteProvider;
const useFavourite = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "03cca0f37634a8afd6d6ff50eb988cd8d6fa7cff49e624bbf36cac4d2ac3ab59") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "03cca0f37634a8afd6d6ff50eb988cd8d6fa7cff49e624bbf36cac4d2ac3ab59";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FavouriteContext);
    const errortrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].ERRORHANDLING);
    if (context === undefined) {
        throw new Error(errortrans(__TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].CONTEXTERROR));
    }
    return context;
};
_s1(useFavourite, "97Hir7YDQBuitJDJfjRAJSvVSJg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$movie$2d$app$2d$clone$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
var _c;
__turbopack_context__.k.register(_c, "FavouriteProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=movie-app-clone_src_244fbd3e._.js.map