module.exports = [
"[project]/src/app/favouriteList/favouriteList.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "favouriteList-module-scss-module__v2ZhGG__container",
  "container__delbtn": "favouriteList-module-scss-module__v2ZhGG__container__delbtn",
  "container__images": "favouriteList-module-scss-module__v2ZhGG__container__images",
  "container__original": "favouriteList-module-scss-module__v2ZhGG__container__original",
  "container__title": "favouriteList-module-scss-module__v2ZhGG__container__title",
  "delete-modal": "favouriteList-module-scss-module__v2ZhGG__delete-modal",
  "delete-modal__actions": "favouriteList-module-scss-module__v2ZhGG__delete-modal__actions",
  "delete-modal__cancel": "favouriteList-module-scss-module__v2ZhGG__delete-modal__cancel",
  "delete-modal__content": "favouriteList-module-scss-module__v2ZhGG__delete-modal__content",
  "delete-modal__delete": "favouriteList-module-scss-module__v2ZhGG__delete-modal__delete",
  "delete-modal__text": "favouriteList-module-scss-module__v2ZhGG__delete-modal__text",
  "delete-modal__title": "favouriteList-module-scss-module__v2ZhGG__delete-modal__title",
  "heading2": "favouriteList-module-scss-module__v2ZhGG__heading2",
  "main-container": "favouriteList-module-scss-module__v2ZhGG__main-container",
  "main-container__heading": "favouriteList-module-scss-module__v2ZhGG__main-container__heading",
});
}),
"[project]/src/app/favouriteList/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Favourite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/configMovie.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/favouriteContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/favouriteList/favouriteList.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/translationConstants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Favourite() {
    const { movie, deleteFromFavourite } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$favouriteContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFavourite"])();
    const infoTrans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].INFORAMTION);
    // -----------------------------
    // Delete Modal State
    // -----------------------------
    const [showDeleteModal, setShowDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMovieId, setSelectedMovieId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // -----------------------------
    // Open Delete Modal
    // -----------------------------
    const handleDeleteClick = (movieId)=>{
        setSelectedMovieId(movieId);
        setShowDeleteModal(true);
    };
    // -----------------------------
    // Confirm Delete
    // -----------------------------
    const handleConfirmDelete = ()=>{
        if (selectedMovieId !== null) {
            deleteFromFavourite(selectedMovieId);
        }
        setShowDeleteModal(false);
        setSelectedMovieId(null);
    };
    // -----------------------------
    // Cancel Delete
    // -----------------------------
    const handleCancelDelete = ()=>{
        setShowDeleteModal(false);
        setSelectedMovieId(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    textAlign: "center"
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["heading2"],
                children: infoTrans(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].FAVOURITEMOVIEHEADING)
            }, void 0, false, {
                fileName: "[project]/src/app/favouriteList/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["main-container"],
                children: movie.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["main-container__heading"],
                    children: infoTrans(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].FAVOUTIEEMPTYINFO)
                }, void 0, false, {
                    fileName: "[project]/src/app/favouriteList/page.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this) : movie.map((list, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container__images"],
                                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$configMovie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigMovie"].image_url}/w500/${list.poster_path}`,
                                alt: list.title || "Movie",
                                width: 300,
                                height: 300,
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/favouriteList/page.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container__title"],
                                children: list.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/favouriteList/page.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container__original"],
                                children: list.original_title
                            }, void 0, false, {
                                fileName: "[project]/src/app/favouriteList/page.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["container__delbtn"],
                                onClick: ()=>handleDeleteClick(Number(list.id)),
                                children: infoTrans(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$translationConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANSLATIONCONSTANTSMOVIE"].DELETEFAVOURITECARDS)
                            }, void 0, false, {
                                fileName: "[project]/src/app/favouriteList/page.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this)
                        ]
                    }, list.id ?? index, true, {
                        fileName: "[project]/src/app/favouriteList/page.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/favouriteList/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            showDeleteModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["delete-modal"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["delete-modal__content"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["delete-modal__title"],
                            children: "Remove Favourite?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/favouriteList/page.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["delete-modal__text"],
                            children: "Are you sure you want to remove this movie from your favourites?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/favouriteList/page.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["delete-modal__actions"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["delete-modal__cancel"],
                                    onClick: handleCancelDelete,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/favouriteList/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favouriteList$2f$favouriteList$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]["delete-modal__delete"],
                                    onClick: handleConfirmDelete,
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/favouriteList/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/favouriteList/page.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/favouriteList/page.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/favouriteList/page.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/favouriteList/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_favouriteList_aa22d66f._.js.map