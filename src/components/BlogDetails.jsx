import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import './BlogDetails.css';
export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    api.get(`/blogs/${id}`).then((res) => setBlog(res.data));
  }, [id]);

  if (!blog) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <p><b>Category:</b> {blog.category}</p>
      <p><b>By:</b> {blog.blogger_name}</p>

      <img src={blog.image} width="400px" alt="" />

      <p style={{ marginTop: "20px" }}>{blog.description}</p>
    </div>
  );
}
