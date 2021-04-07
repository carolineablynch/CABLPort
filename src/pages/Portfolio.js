import Bounce from "react-reveal/Bounce";
import Layout from "../Layout";
import Project from "../Project";

const projects = [
  {
    screenshot: "https://raw.githubusercontent.com/dibenso/tutor-portfolio/main/public/images/employee.jpg",
    title: "Employee Directory",
    description: "View entire employee directory at once to have quick access to their information.",
    appLink: "https://carolineablynch.github.io/EmployeeDirectory/",
    repoLink: "https://github.com/carolineablynch/EmployeeDirectory"
  },
  {
    screenshot: "https://raw.githubusercontent.com/dibenso/tutor-portfolio/main/public/images/hungerBusters.png",
    title: "Hunger-Buster",
    description:
      "This app was created through the use of Javascript, jQuery, CSS, and two CSS frameworks, Materialize and UiKit.",
    appLink: "https://carolineablynch.github.io/Hunger-Buster/",
    repoLink: "https://github.com/carolineablynch/Hunger-Buster"
  },
  {
    screenshot: "https://raw.githubusercontent.com/dibenso/tutor-portfolio/main/public/images/workday.png",
    title: "Work-Day-Calendar",
    description: "Help employees and workers effectively view and manage the hours they work during a typical day.",
    appLink: "https://carolineablynch.github.io/Work-Day-Calender/",
    repoLink: "https://github.com/carolineablynch/Work-Day-Calender"
  },
  {
    screenshot: "https://raw.githubusercontent.com/dibenso/tutor-portfolio/main/public/images/password.png",
    title: "Password Generator",
    description: "Allows users to generate random passwords based on the inputs they contribute to the app.",
    appLink: "https://carolineablynch.github.io/PasswordGenerator/",
    repoLink: "https://github.com/carolineablynch/PasswordGenerator"
  },
  {
    screenshot: "https://raw.githubusercontent.com/dibenso/tutor-portfolio/main/public/images/quiz.jpg",
    title: "Coding Quiz",
    description: "Put your coding skills to the test!",
    appLink: "",
    repoLink: ""
  },
  {
    screenshot: "https://raw.githubusercontent.com/dibenso/tutor-portfolio/main/public/images/weather.jpg",
    title: "Weather Dashboard",
    description: "See the weather outlook for multiple cities",
    appLink: "",
    repoLink: ""
  }
];

export default function Portfolio({ match }) {
  return (
    <Layout match={match}>
      <Bounce bottom>
        <h1>Portfolio</h1>
        {projects.map((project, index) => (
          <Project key={String(index)} {...project} />
        ))}
      </Bounce>
    </Layout>
  );
}
