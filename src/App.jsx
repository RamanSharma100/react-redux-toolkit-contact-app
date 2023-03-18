import { CssBaseline } from "@mui/material";
import { Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";

import { Navbar } from "./components";
import { AddUser, EditUser, Home } from "./pages";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default App;
