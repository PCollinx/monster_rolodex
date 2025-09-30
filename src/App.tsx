import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./components/card-list/card-list.component";
import { getData } from "./utils/data.utils";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchString = event.target.value.toLowerCase();
    const newFileredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );
    setFilteredMonsters(newFileredMonsters);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        placeholder="Search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
