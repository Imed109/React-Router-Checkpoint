import { useState } from "react";

const Adding = ({addToMovies}) => {
  const [lobjet, setlobjet] = useState({
    title: '',
    description: '',
    rating: '',
    posterUrl: '',
  });
  const Handlechange = (event) => {
    setlobjet({ ...lobjet, [event.target.name]: event.target.value });
  };
  const handleClick =()=> {
    const newMovie= {...lobjet};
    addToMovies (newMovie);
    setlobjet({
      title: '',
      description: '',
      rating: '',
      posterUrl: '',
    });

  }
  return (
    <div>
      <input placeholder="title" onChange={Handlechange} value={lobjet.title} type="text" name="title"/>
      <input placeholder="description" onChange={Handlechange} value={lobjet.description} type="text" name="description"/>
      <input placeholder="rating"onChange={Handlechange} value={lobjet.rating} type="text" name="rating"/>
      <input placeholder="Image" onChange={Handlechange} value={lobjet.posterUrl} type="text" name="posterUrl"/>
      <button onClick={handleClick}>ADD A MOVIE !!!!</button>
     

    </div>
  );
};
export default Adding;
