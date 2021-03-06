import React from 'react'
import { Movie } from '../Movie'

export function MovieList({ movies }) {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
