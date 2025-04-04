import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

function Movies({ handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist }) {
    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handlePrev = () => {
        if (pageNo > 1) {
            setPageNo(prevPageNo => prevPageNo - 1);
        }
    };

    const handleNext = () => {
        if (pageNo < totalPages) {
            setPageNo(prevPageNo => prevPageNo + 1);
        }
    };

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=60d3dbf2bd1757a03786d9056b54abb4&language=en-US&page=${pageNo}`)
            .then(res => {
                setMovies(res.data.results);
                setTotalPages(res.data.total_pages);
            })
            .catch(error => {
                console.error(error);
            });
    }, [pageNo]);

    return (
        <div className='p-5'>
            <div className='text-2xl m-5 font-bold text-center'>
                Trending Movies
            </div>
            <div className='flex flex-row flex-wrap justify-around gap-8'>
                {movies.map((movieObj) => (
                    <MovieCard 
                      key={movieObj.id} 
                      movieObj={movieObj} 
                      poster_path={movieObj.poster_path} 
                      name={movieObj.original_title} 
                      handleAddtoWatchList={handleAddtoWatchlist} 
                      handleRemoveFromWatchlist={handleRemoveFromWatchlist} 
                      watchlist={watchlist}
                    />
                ))}
            </div>
            <div>
                <Pagination 
                    pageNo={pageNo} 
                    handleNext={handleNext} 
                    handlePrev={handlePrev}
                />
            </div>
        </div>
    );
}

export default Movies;
