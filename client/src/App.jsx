import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";
import PostDetails from "./components/PostDetails/postDetails";
import NotFound from "./components/NotFound/notFound";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <div className=" dark:bg-black dark:text-[#dddee3] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
