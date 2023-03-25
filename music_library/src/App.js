import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import SearchBar from "./SearchBar";
import MusicTable from "./MusicTable";
import NavigationBar from "./NavigationBar";
import axios from "axios";

function App() {
  let [music, setMusic] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/songs/")
      .then((response) => {
        console.log(response.data)
        setMusic(response.data);
      })
      .then((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="App">
      <NavigationBar />
    </div>
  );
}

export default App;
