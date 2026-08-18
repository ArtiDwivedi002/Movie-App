"use client";

import { ConfigMovie } from "@/config/configMovie";
import { useFavourite } from "@/context/favouriteContext";
import Image from "next/image";
import style from "@/app/favouriteList/favouriteList.module.scss";
import { Fragment, useState } from "react";
import { useTranslations } from "next-intl";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";

export default function Favourite() {
  const { movie, deleteFromFavourite } = useFavourite();

  const infoTrans = useTranslations(
    TRANSLATIONCONSTANTSMOVIE.INFORAMTION
  );

  // -----------------------------
  // Delete Modal State
  // -----------------------------
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null | any>(
    null
  );

  // -----------------------------
  // Open Delete Modal
  // -----------------------------
  const handleDeleteClick = (movieId: number) => {
    setSelectedMovieId(movieId);
    setShowDeleteModal(true);
  };

  // -----------------------------
  // Confirm Delete
  // -----------------------------
  const handleConfirmDelete = () => {
    if (selectedMovieId !== null) {
      deleteFromFavourite((selectedMovieId));
    }

    setShowDeleteModal(false);
    setSelectedMovieId(null);
  };

  // -----------------------------
  // Cancel Delete
  // -----------------------------
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedMovieId(null);
  };

  return (
    <Fragment>
      {/* Heading */}
      <h2
        style={{ textAlign: "center" }}
        className={style["heading2"]}
      >
        {infoTrans(
          TRANSLATIONCONSTANTSMOVIE.FAVOURITEMOVIEHEADING
        )}
      </h2>

      {/* Favourite Movies */}
      <div className={style["main-container"]}>
        {movie.length === 0 ? (
          <h1 className={style["main-container__heading"]}>
            {infoTrans(
              TRANSLATIONCONSTANTSMOVIE.FAVOUTIEEMPTYINFO
            )}
          </h1>
        ) : (
          movie.map((list, index) => (
            <div
              className={style["container"]}
              key={list.id ?? index}
            >
              <Image
                className={style["container__images"]}
                src={`${ConfigMovie.image_url}/w500/${list.poster_path}`}
                alt={list.title || "Movie"}
                width={300}
                height={300}
                unoptimized
              />

              <h1 className={style["container__title"]}>
                {list.title}
              </h1>

              <h2 className={style["container__original"]}>
                {list.original_title}
              </h2>

              {/* Delete Button */}
              <button
                type="button"
                className={style["container__delbtn"]}
                onClick={() => handleDeleteClick(Number(list.id))}
              >
                {infoTrans(
                  TRANSLATIONCONSTANTSMOVIE.DELETEFAVOURITECARDS
                )}
              </button>
            </div>
          ))
        )}
      </div>

      {/* =========================
          DELETE CONFIRMATION MODAL
      ========================== */}
      {showDeleteModal && (
        <div className={style["delete-modal"]}>
          <div className={style["delete-modal__content"]}>
            <h2 className={style["delete-modal__title"]}>
              Remove Favourite?
            </h2>

            <p className={style["delete-modal__text"]}>
              Are you sure you want to remove this movie
              from your favourites?
            </p>

            <div className={style["delete-modal__actions"]}>
              {/* Cancel */}
              <button
                type="button"
                className={style["delete-modal__cancel"]}
                onClick={handleCancelDelete}
              >
                Cancel
              </button>

              {/* Delete */}
              <button
                type="button"
                className={style["delete-modal__delete"]}
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}