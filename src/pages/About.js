import { Jumbotron, Row, Col } from "react-bootstrap";
import {
  FaMailBulk,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
  FaPaperclip
} from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Layout from "../Layout";

const styles = {
  contactItem: { marginTop: 20 },
  contactLink: { textDecoration: "none" },
  about: { color: "#17a2b8" },
  description: { color: "gray" },
  jumbo: { boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.5)", marginTop: 20 },
  link: { marginLeft: 10, marginRight: 10 }
};

export default function About({ match }) {
  return (
    <Layout match={match}>
      <Row>
        <Col md={8}>
          <Fade bottom cascade>
            <Jumbotron style={styles.jumbo}>
              <h1 style={styles.about}>About</h1>
              <hr />
              <Row>
                <Col lg={6}>
                  <img
                    src="https://raw.githubusercontent.com/dibenso/tutor-portfolio/main/public/images/profilePicture.jpg"
                    alt="Profile"
                  />
                  <div style={{ marginTop: 20 }}>
                    <a
                      href="https://www.linkedin.com/in/carolineablynch/"
                      target="_blank"
                      title="LinkedIn"
                      style={styles.link}
                      rel="noreferrer">
                      <FaLinkedin size={40} color="black" />
                    </a>
                    <a
                      href="https://instagram.com/_cabl/"
                      target="_blank"
                      title="Instagram"
                      style={styles.link}
                      rel="noreferrer">
                      <FaInstagramSquare size={40} color="black" />
                    </a>
                    <a
                      href="https://github.com/carolineablynch"
                      target="_blank"
                      title="Github"
                      style={styles.link}
                      rel="noreferrer">
                      <FaGithubSquare size={40} color="black" />
                    </a>
                    <a
                      href="https://github.com/dibenso/tutor-portfolio/raw/main/public/resume.pdf"
                      target="_blank"
                      title="Resume"
                      style={styles.link}
                      rel="noreferrer">
                      <FaPaperclip size={40} color="black" />
                    </a>
                  </div>
                </Col>
                <Col lg={6}>
                  <p style={styles.description}>
                    My name is Caroline A.B. Lynch but I go by my initials, CABL. Former finance major at American
                    University, currently Global Index Sales at Bloomberg LP, and coding student at Columbia University.
                  </p>
                  <div style={styles.contactItem}>
                    <a href="mailto:carolineablynch@gmail.com" style={styles.contactLink}>
                      <FaMailBulk size={20} color="black" />
                      {" carolineablynch@gmail.com"}
                    </a>
                  </div>
                  <div style={styles.contactItem}>
                    <a href="tel:1-845-702-5595" style={styles.contactLink}>
                      <FaPhoneSquareAlt size={20} color="black" />
                      {" +1-845-702-5595"}
                    </a>
                  </div>
                </Col>
              </Row>
            </Jumbotron>
          </Fade>
        </Col>
      </Row>
    </Layout>
  );
}
