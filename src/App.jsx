import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import BlogDetails from "./components/BlogDetails";
import Navbar from "./components/Navbar";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  return (
    <BrowserRouter>
     <Navbar onCategorySelect={(cat) => setSelectedCategory(cat)}/>
      <Routes>
        <Route path="/" element={<BlogList selectedCategory={selectedCategory}/>} />
        <Route path="/add-blog" element={<BlogForm />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

