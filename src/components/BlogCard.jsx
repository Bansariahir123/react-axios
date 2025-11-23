import { Link } from "react-router-dom";
import "./BlogCard.css"
export default function BlogCard({ blog }) {
  const preview = blog.description.slice(0, 120) + "...";

  return (
    <div style={styles.card} className="blog-card">
      <img src={blog.image} alt="" style={styles.img} />

      <h3 style={styles.title}>{blog.title}</h3>
      <p style={styles.category}>— {blog.category}</p>

      <p style={styles.desc}>{preview}</p>

      <Link to={`/blogs/${blog.id}`} style={styles.btn}>
        Read More…
      </Link>
    </div>
  );
}

const styles = {
  card: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fff"
  },
  img: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "5px"
  },
  title: {
    fontSize: "17px",
    marginTop: "10px",
    marginBottom: "5px"
  },
  category: {
    color: "gray",
    fontSize: "14px"
  },
  desc: {
    marginTop: "10px",
    marginBottom: "15px",
    fontSize: "14px",
    color: "#333"
  },
  btn: {
    background: "#007bff",
    color: "white",
    padding: "8px 12px",
    borderRadius: "5px",
    textDecoration: "none"
  }
};
