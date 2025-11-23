// import { Link } from "react-router-dom";

// export default function Navbar({ onCategorySelect }) {
    
//   const categories = [
//     "Home",
//     "Entertainment",
//     "Technology",
//     "Sports",
//     "Business",
//     "Health",
//     "Science"
//   ];

//   return (
//     <nav style={styles.nav}>
//       <Link to="/" style={{ ...styles.logo, textDecoration: "none", color: "black" }}
//       onClick={() => setSelectedCategory("Home")} >
//   News Geek
// </Link>
//       <ul style={styles.menu}>
//         {categories.map((cat) => (
//           <li key={cat}>
//             <Link
//               to="/"
//               onClick={() => onCategorySelect && onCategorySelect(cat)}
//               style={styles.link}
//             >
//               {cat}
//             </Link>
//           </li>
//         ))}
//         <li>
//           <Link to="/add-blog" style={styles.addBlogBtn}>Add Blog</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// const styles = {
//   nav: {
//     width: "100%",
//     padding: "15px 40px",
//     background: "#fff",
//     borderBottom: "1px solid #ccc",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "sticky",
//     top: 0,
//     zIndex: 1000
//   },
//   logo: {
//     margin: 0,
//     fontWeight: "bold"
//   },
//   menu: {
//     listStyle: "none",
//     display: "flex",
//     gap: "20px",
//     margin: 0
//   },
//   link: {
//     textDecoration: "none",
//     color: "black",
//     fontSize: "15px"
//   },
//   addBlogBtn: {
//     background: "#007bff",
//     padding: "6px 12px",
//     borderRadius: "5px",
//     color: "white",
//     textDecoration: "none"
//   }
// };

import { Link } from "react-router-dom";
import './Navbar.css';
export default function Navbar({ onCategorySelect }) {
  const categories = [
    "Home",
    "Entertainment",
    "Technology",
    "Sports",
    "Business",
    "Health",
    "Science"
  ];

  const handleCategoryClick = (cat) => {
    onCategorySelect && onCategorySelect(cat);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <Link
          to="/" className="logo"
          style={{ ...styles.logo, textDecoration: "none", color: "black" } }
          onClick={() => handleCategoryClick("Home")}
        >
          News Geek
        </Link>
      </div>

      <ul style={styles.menu}>
        {categories.map((cat) => (
          <li key={cat}>
            <Link
              to="/"
              onClick={() => handleCategoryClick(cat)}
              style={styles.link}
            >
              {cat}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/add-blog" className="add-blog-btn" style={styles.addBlogBtn}>
            Add Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    padding: "10px 20px",
    background: "#fff",
    borderBottom: "1px solid #ccc",
    display: "flex",
    flexDirection: "column", // stack logo + menu
    alignItems: "flex-start",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    gap: "10px"
  },
  logoContainer: {
    width: "100%",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "24px"
  },
  menu: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap", // wrap items to next line if overflow
    gap: "15px",
    margin: 0,
    padding: 0
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    padding: "6px 0"
  },
  addBlogBtn: {
    background: "#007bff",
    padding: "6px 12px",
    borderRadius: "5px",
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
  }
};
