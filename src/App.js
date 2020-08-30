import React from "react";
import CharacterList from "./components/CharacterList";
import "./App.css";
import HeroList from "./components/HeroList";

function App() {
  return (
    <div className="App">
      <h1>SuperSquad</h1>
      <div className="row">
        <div className="col-md-6">
          <CharacterList />
        </div>
        <div className="col-md-6">
          <HeroList />
        </div>
      </div>
    </div>
  );
}

export default App;
