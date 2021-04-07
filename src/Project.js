import { Jumbotron } from "react-bootstrap";
import { FaGlobe, FaGithub } from "react-icons/fa";

const styles = {
  jumbo: { boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.5)", marginTop: 20 },
  link: { marginLeft: 10, marginRight: 10 }
};

export default function Project({ screenshot, title, description, appLink, repoLink }) {
  return (
    <Jumbotron style={styles.jumbo}>
      <img src={screenshot} alt={title} style={{ width: "80%" }} />
      <h3 style={{ marginTop: 20 }}>
        <b>{title}</b>
      </h3>
      <i>{description}</i>
      <div style={{ marginTop: 20 }}>
        <a href={appLink} target="_blank" title="Go To App" style={styles.link} rel="noreferrer">
          <FaGlobe size={40} color="black" />
        </a>
        <a href={repoLink} target="_blank" title="View Source Code" style={styles.link} rel="noreferrer">
          <FaGithub size={40} color="black" />
        </a>
      </div>
    </Jumbotron>
  );
}
