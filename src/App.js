import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./Components/Users/UserList";
import NotFound from "./Components/Users/NotFound";
import SideBar from "./Components/SideBar/SideBar";
import Gallery from "./Components/Pages/Gallery";
import Posts from "./Components/Pages/Posts";
import Todo from "./Components/Pages/Todo";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/user/:id/" element={<SideBar />} />
          <Route path="/user/:id/gallery" element={<Gallery />} />
          <Route path="/user/:id/posts" element={<Posts />} />
          <Route path="/user/:id/todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
