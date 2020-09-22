import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMoviesList } from './moviesSlice';

export const MoviesListPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);

  useEffect(() => {
    dispatch(getMoviesList({ title: 'test' }));
  }, [dispatch]);

  return (
    <div>
      <h1>Movies list</h1>
      <ul>
        {movies.map((m) => (
          <li key={m.imdbID}>
            <Link to={`/${m.imdbID}`}>{m.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
