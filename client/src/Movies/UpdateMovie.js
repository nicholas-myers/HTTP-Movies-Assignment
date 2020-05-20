import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
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
  metascore: "",
};

export default function UpdateMovie(props) {
  const { push } = useHistory();
  //   console.log(props.movieList);
  const { id } = useParams();
  //   console.log(id);
  const [movie, setMovie] = useState(initialMovie);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        // console.log(res);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const changeMovieInputs = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const updateMovie = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${id}`, movie)
      .then((res) => {
        console.log(res.data)
        push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UpdateMovieForm onSubmit={updateMovie}>
      <label htmlFor="title">title</label>
      <input name="title" value={movie.title} onChange={changeMovieInputs} />
      <label htmlFor="director">director</label>
      <input
        name="director"
        value={movie.director}
        onChange={changeMovieInputs}
      />
      <label htmlFor="metascore">metascore</label>
      <input
        name="metascore"
        value={movie.metascore}
        onChange={changeMovieInputs}
      />
      <button>Update Movie</button>
    </UpdateMovieForm>
  );
}
