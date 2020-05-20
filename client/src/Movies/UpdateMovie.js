import React from "react";

export default function UpdateMovie(props) {
    console.log(props.movieList)
  return (
    <form>
      <label>title</label>
      <input />
      <label>director</label>
      <input />
      <label>metascore</label>
      <input />
      <button>Update Movie</button>
    </form>
  );
}
