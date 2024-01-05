import CompoundInterest from './sites/compound'
import { Component } from "react";
import { Route, Routes,  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="korkoa">Korkoa korolle -laskuri</h1>
      </header>
      <Routes>
        <Route path="/" element={<CompoundInterest></CompoundInterest>}></Route>
      </Routes>
    </div>
  );
}

export default App;
