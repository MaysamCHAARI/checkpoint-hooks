import { useState } from "react";
import "./App.css";
import Rate from "./components/Rate";
import Cardfilm from "./components/Cardfilm";

import Filter from "./components/Filter";
import AddFilm from "./components/AddFilm";
function App() {
  //1-initialisation du state filter
  const [filter, setFilter] = useState([]);
  const [rate, setRate] = useState(1);
  const [MovieList, setMovieList] = useState([
    {
      title: "Spider-Man",
      description:
        "Based on Marvel Comics superhero character, this is a story of Peter Parker who is a nerdy high-schooler. ",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
      rating: 2,
    },
    {
      title: "Wrath of Man",
      description:
        "Mysterious and wild-eyed, a new security guard for a cash truck surprises his co-workers when he unleashes precision . ",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNGVkOTlhOTktNjZiNS00NDg3LWIxMDAtZTY5Y2E0YjllN2IxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      rating: 5,
    },
  ]);
  //2-declaration de fonction aspirateur
  const handleFilter = (val) => setFilter(val);
  const handleAddFilm = (val) => {
    setMovieList([...MovieList, val]);
  };

  return (
    <>
      <div className="App-header">
        {/* pass Filter as props */}

        <Filter handleFilter={handleFilter} setRate={setRate} />
        <Cardfilm
          list={
            rate === 1
              ? MovieList
              : MovieList.filter(
                  (elm) =>
                    elm.title.toLowerCase().includes(filter) &&
                    elm.rating === rate
                )
          }
        />
        <AddFilm list={MovieList} handleAddFilm={handleAddFilm} />
      </div>
    </>
  );
}
export default App;
