import LandingPage from "./pages/LandingPage";
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
