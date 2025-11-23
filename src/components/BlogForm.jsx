import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "./BlogForm.css";


export default function BlogForm() {
  const navigate = useNavigate();
  const categories = ["Entertainment", "Technology", "Sports", "Business", "Health", "Science"];

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    blogger_name: "",
    image: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};

    if (!formData.category) err.category = "Category is required";
    if (formData.title.length < 3) err.title = "Title must be 3+ characters";
    if (formData.blogger_name.length < 3)
      err.blogger_name = "Blogger name must be 3+ characters";
    if (!formData.image) err.image = "Image link required";
    if (formData.description.length < 3)
      err.description = "Description must be 3+ characters";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    await api.post("/blogs", formData);
    navigate("/");
  };

  return (
    <div className="blog-form-container">
      <h2>Add Blog</h2>

      <form onSubmit={handleSubmit} >
        {/* Category */}
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <p className="error">{errors.category}</p>

        {/* Title */}
        <input
          type="text"
          placeholder="Blog Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <p className="error">{errors.title}</p>

        {/* Blogger */}
        <input
          type="text"
          placeholder="Blogger Name"
          value={formData.blogger_name}
          onChange={(e) =>
            setFormData({ ...formData, blogger_name: e.target.value })
          }
        />
        <p className="error">{errors.blogger_name}</p>

        {/* Image */}
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <p className="error">{errors.image}</p>

        {/* Description */}
        <textarea
          placeholder="Blog Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <p className="error">{errors.description}</p>

        <button>Add Blog</button>
      </form>
    </div>
  );
}
