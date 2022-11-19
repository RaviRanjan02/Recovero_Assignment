import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProtectedRoutes from "../HOC/ProtectedRoutes";
import Admin from "./Admin";
import AdminTask from "./AdminTask";
import Blog from "./Blog";
import Homepage from "./Homepage";
import Login from "./Login";
import Register from "./Register";
import SingleBlog from "./SingleBlog";
import Writter from "./Writter";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admintask" element={<AdminTask />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/writter"
          element={
            <ProtectedRoutes>
              <Writter />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/Blog"
          element={
            <ProtectedRoutes>
              <Blog />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <ProtectedRoutes>
              <SingleBlog />
            </ProtectedRoutes>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoutes;
