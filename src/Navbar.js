import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2> Editing Application</h2>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};
export default Navbar;
