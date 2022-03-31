import React, { useState } from "react";
import Project from "../Project";
/**
 * This function returns a div with a class of "flex-row" and a child div with a class of "project"
 * @returns A div with a class of flex-row.
 */
function Portfolio() {
  const [projects] = useState([
    {
      name: "shozup",
      description: "Node/Express/JS/Handlebar/MySQL",
      link: "https://shozup.herokuapp.com/",
      repo: "https://github.com/dparmar32/ShoZup",
    },
    {
      name: "treak-stats",
      description: "HTML/CSS/JS",
      link: "https://dparmar32.github.io/TrekStats/",
      repo: "https://github.com/dparmar32/TrekStats",
    },
    {
      name: "books",
      description: "MERN Stack - InProgress",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Weather Dashboard",
      description: "HTML/CSS/JS",
      link: "https://dparmar32.github.io/new_weather_dashboard/",
      repo: "https://github.com/dparmar32/new_weather_dashboard",
    },
    {
      name: "quiz",
      description: "HTML/CSS/JS",
      link: "https://dparmar32.github.io/coding_quiz_challenge/",
      repo: "https://github.com/dparmar32/coding_quiz_challenge",
    },
    {
      name: "text-editor",
      description: "Heroku/MERN Stack",
      link: "https://text-editor-031921.herokuapp.com/",
      repo: "https://github.com/dparmar32/TextEditor",
    },
  ]);
  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
