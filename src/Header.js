import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const styles = {
  link: { marginLeft: 10, marginRight: 10, color: "black" }
};

export default function Header({ match }) {
  const { path } = match;
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand>
        <Link to="/" style={{ ...styles.link, textDecoration: "none" }}>
          Welcome! You can call me CABL.
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" style={{ ...styles.link, color: path === "/" ? "black" : "gray" }}>
            About
          </Link>
          <Link to="/portfolio" style={{ ...styles.link, color: path === "/portfolio" ? "black" : "gray" }}>
            Portfolio
          </Link>
          <Link to="/contact" style={{ ...styles.link, color: path === "/contact" ? "black" : "gray" }}>
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}