import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";
/**
 * It takes in a project object and returns a div with the project's name, link, repo, and description
 * @returns A div with a background image and a div with text.
 */
function Project({ project }) {
  const { name, repo, link, description } = project;
  return (
    <div className="project" key={name}>
      <img
        src={require(`../../assets/projects/${name}.jpg`)}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{" "}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default Project;
