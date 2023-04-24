import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoPage from "./components/TodoPage";

function App(): JSX.Element {
  return (
    <div className="app-container">
      <div className="dates-container">
        <Routes>
        	<Route path="/" element={<TodoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;