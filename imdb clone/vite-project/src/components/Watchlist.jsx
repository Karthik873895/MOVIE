import React, { useState, useEffect } from 'react'; 
import genres from '../Utility/Genre'; 

function Watchlist({ watchlist, setwatchlist, handleRemoveFromWatchlist }) {
    const [search, setSearch] = useState('');
    const [genreList, setGenreList] = useState(['All Genres']); 
    const [currGenre, setCurrGenre] = useState('All Genres'); // Initialize as string

    let handleSearch = (e) => {
        setSearch(e.target.value);
    };

    let handleFilter = (genre) => {
        setCurrGenre(genre);
    }

    let sortIncreasing = () => {
        let sortedIncreasing = [...watchlist].sort((movieA, movieB) => movieA.vote_average - movieB.vote_average);
        setwatchlist(sortedIncreasing);
    };

    let sortDecreasing = () => {
        let sortedDecreasing = [...watchlist].sort((movieA, movieB) => movieB.vote_average - movieA.vote_average);
        setwatchlist(sortedDecreasing);
    };

    useEffect(() => {
        let temp = watchlist.map((movieObj) => genres[movieObj.genre_ids[0]]); 
        setGenreList(['All Genres', ...new Set(temp)]); // Use Set to remove duplicates
    }, [watchlist]);


    // Handle filtering based on current genre
    const filteredWatchlist = watchlist.filter((movieObj) => 
        (currGenre === 'All Genres' || genres[movieObj.genre_ids[0]] === currGenre) &&
        movieObj.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className='flex justify-center flex-wrap m-4'>
                {genreList.map((genre) => (
                    <div 
                        key={genre} // Add a unique key
                        onClick={() => handleFilter(genre)} 
                        className={
                            currGenre === genre 
                            ? 'flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4' 
                            : 'flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4'
                        }
                    >
                        {genre}
                    </div>
                ))}
            </div>

            <div className='flex justify-center my-4'>
                <input
                    onChange={handleSearch}
                    value={search}
                    type="text"
                    placeholder="search Movies"
                    className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
                />
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
                <table className="w-full text-gray-500 text-center">
                    <thead className="border-b-2">
                        <tr>
                            <th>Name</th>
                            <th className='flex justify-center'>
                                <div onClick={sortIncreasing} className="p-2"><i className="fa-solid fa-arrow-up"></i></div>
                                <div>Rating</div>
                                <div onClick={sortDecreasing} className="p-2"><i className="fa-solid fa-arrow-down"></i></div>
                            </th>
                            <th>Popularity</th>
                            <th>Genre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredWatchlist.map((movieObj) => (
                            <tr key={movieObj.id} className='border-b-2'>
                                <td className='h-[10rem] w-[10rem]'>
                                    <img
                                        className='h-[8rem] w-[6rem] mx-auto'
                                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                                        alt={movieObj.title}
                                    />
                                    <div className='mt-2'>{movieObj.title}</div>
                                </td>
                                <td>{movieObj.vote_average}</td>
                                <td>{movieObj.popularity}</td>
                                <td>{genres[movieObj.genre_ids[0]]}</td>
                                <td className='text-red-800 cursor-pointer' onClick={() => handleRemoveFromWatchlist(movieObj)}>Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Watchlist;
