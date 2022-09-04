import react from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Crew, Destination, Technology, Home } from "./Components"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/destination" element={<Destination />} />
          <Route exact path="/crew" element={<Crew />} />
          <Route exact path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
