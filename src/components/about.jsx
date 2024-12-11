import React, { useState } from "react";
import project from "./data/about.json";

const Projects = () => {
  const [expanded, setExpanded] = useState({}); // Store expanded state for each project

  const handleExpandClick = (key) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [key]: !prevExpanded[key], // Toggle the expanded state for the clicked project
    }));
  };

  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>ABOUT ME</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <div
              key={data.key}
              className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
            >
              <div
                className="card bg-dark text-light"
                style={{
                  width: "18rem",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "250px",
                      height: "200px",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">
                    {expanded[data.key]
                      ? data.description
                      : `${data.description.slice(0, 85)}...`}
                  </p>
                  <button
                    onClick={() => handleExpandClick(data.key)}
                    className="btn btn-link"
                    style={{ textDecoration: "none", color: "yellow" }}
                  >
                    {expanded[data.key] ? "See Less" : "See More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
