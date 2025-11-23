import { useEffect, useState } from "react";
import api from "../api";
import BlogCard from "./BlogCard";
import "./BlogList.css"; // import CSS file
export default function BlogList({ selectedCategory }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    const res = await api.get("/blogs");
    setBlogs(res.data);
  };

  const filteredBlogs =
    selectedCategory === "Home"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  return (
    <div className="blog-container">
      {filteredBlogs.map((blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "30px 40px"
  }
};
