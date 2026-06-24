"use client";
import Image from "next/image";
import style from "@/app/movieDetails/movieDetails.module.scss";
import { Fragment } from "react";
import { useMovieDetails } from "@/app/movieDetails/[id]/_useMovieDetails";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
import { ConfigMovie } from "@/config/configMovie";
export default function MovieDetails() {
  const { movieDetails, addFavourite, movieTrans, addTrans, imageUrl } =
    useMovieDetails();

  if (!movieDetails) {
    return <div>{movieTrans(TRANSLATIONCONSTANTSMOVIE.LOADING)}</div>;
  }
  return(
    <Fragment>
    <div className={style.container}>
  <div className={style.card}>
    <h4 className={style.heading}>Detailed Overview Of : {movieDetails.title}</h4>
    {/* 🎬 Movie Image */}
    <Image
      src={`${ConfigMovie.image_url}/w500${movieDetails.poster_path}`}
      alt={movieDetails.title}
      width={350}
      height={400}
      className={style.card__image}
    />

    {/* 🎬 Content */}
    <div className={style.card__content}>
      
      <div className={style.card__header}>
        <h3>{movieDetails.title}</h3>

        {/* ⭐ Rating */}
        <span className={style.card__rating}>
          {movieDetails.vote_average.toFixed(1)}
        </span>
      </div>

      <p className={style.card__overview}>
        {movieDetails.overview}
      </p>

      <button
        className={style.card__btn}
        onClick={() => addFavourite(movieDetails)}
      >
        Add to Favourite
      </button>

    </div>
  </div>
</div>
    </Fragment>
  );
}
