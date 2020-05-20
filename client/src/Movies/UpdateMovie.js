import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const UpdateMovieForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
`;

const initialMovie = {
    title: "",
    director: "",
    metascore: ""
}

export default function UpdateMovie(props) {
  console.log(props.movieList);
  const { id } = useParams();
//   console.log(id);
  const [movie, setMovie] = useState(initialMovie)

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${id}`)
    .then(res => {
        console.log(res)
        setMovie(res.data)
    })
    .catch(err => {
        console.log(err)
    })
  }, [id])

  return (
    <UpdateMovieForm>
      <label htmlFor="title">title</label>
      <input 
      name="title"
      value={movie.title}
      />
      <label htmlFor="director">director</label>
      <input 
      name="director"
      value={movie.director}
      />
      <label htmlFor="metascore">metascore</label>
      <input 
      name="metascore"
      value={movie.metascore}
      />
      <button>Update Movie</button>
    </UpdateMovieForm>
  );
}
