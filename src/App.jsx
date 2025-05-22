import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";

import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
        setFilteredMonsters(data);
      });
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    const newFileredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );
    setFilteredMonsters(newFileredMonsters);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
