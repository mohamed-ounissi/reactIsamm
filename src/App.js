import React from "react";
import "./App.css";
import Hello from "./components/hello/Hello";
import TaskPage from "./pages/tasksPage/TaskPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import TaskDetails from "./pages/TaskDetails/TaskDetails";

function App() {
  return (
    <Router>
      <Menu></Menu> 
      <>
        <Routes>
          <Route exact path="/" element={<Navigate to="/tasks" />} />
          <Route exact path="/hello" element={<Hello />} />
          <Route exact path="/tasks" element={<TaskPage />} />
          <Route exact path="/tasks/:id" element={<TaskDetails />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
