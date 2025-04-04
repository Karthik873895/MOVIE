import React from "react";

function MovieCard({ movieObj, poster_path, name, handleAddtoWatchList, handleRemoveFromWatchlist, watchlist }) {

  const doesContain = (movieObj) => {
    return watchlist.some(movie => movie.id === movieObj.id);
  };

  return (
    <div
      className="relative h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center text-2xl bg-gray-900 text-white cursor-pointer"
        >
          &#10060; {/* X mark */}
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center text-2xl bg-gray-900 text-white cursor-pointer"
        >
          &#128525; {/* Emoji */}
        </div>
      )}
      <div className="absolute bottom-0 text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
