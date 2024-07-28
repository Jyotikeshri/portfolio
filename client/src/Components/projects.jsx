import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
  faLink, // Add FontAwesome icon for the link
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";
import nexaro from "./nexaro.png";
import extragram from "./extragram.png";
import taskMate from "./taskMate.png";
import fredioCall from "./fredioCall.png";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Extragram",
      des: "A social media platform that allows users to connect, share, and communicate. It includes features like user authentication, profile management, posting updates, liking and commenting on posts, and real-time notifications.",
      mission: "Full Stack Developer, system analysis and design",
      language: "HTML5, CSS3, React JS, Node.js, Express.js, MongoDB",
      images: extragram,
    },
    {
      name: "Frediocall",
      des: "A communication platform designed for seamless and real-time interaction. It includes features for voice and video calls, messaging, and user management.",
      mission: "Full Stack Developer, system analysis and design",
      language:
        "HTML5, CSS3, React JS, Node.js, Express.js, Socket.IO, MongoDB",
      images: fredioCall,
      website: "https://metube-fredio-call-xv4s.vercel.app/", // Add the website link
    },
    {
      name: "Nexaro",
      des: "An e-commerce application built with the MERN stack, featuring integrated Stripe payment processing. It allows users to browse products, add items to the cart, and complete purchases securely.",
      mission: "Full Stack Developer, system analysis and design",
      language: "HTML5, CSS3, React JS, Node.js, Express.js, MongoDB, Stripe",
      images: nexaro,
      website: "https://nexaro-six8.vercel.app/", // Add the website link
    },
    {
      name: "TaskMate",
      des: "A task management app designed to enhance productivity and organization. Users can create, edit, and manage tasks, set deadlines, and track progress.",
      mission: "Full Stack Developer, system analysis and design",
      language: "HTML5, CSS3, React JS, Node.js, Express.js, MongoDB",
      images: taskMate,
      website: "https://taskmate1.netlify.app/", // Add the website link
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Here are some of the projects I have worked on, showcasing my skills in
        full-stack development and system analysis and design. Each project
        highlights my ability to create scalable and efficient applications
        using various technologies.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              <img src={value.images} alt={value.name} />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
              <div className="website">
                <div>
                  <FontAwesomeIcon icon={faLink} />
                </div>
                {value.website && (
                  <div>
                    <h4>Website</h4>
                    <a
                      href={value.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="des"
                    >
                      {value.website}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
