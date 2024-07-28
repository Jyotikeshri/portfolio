import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faNodeJs,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure for a webpage, allowing developers to define headings, paragraphs, links, images, and other elements.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "CSS (Cascading Style Sheets) is used to style and layout web pages. It allows developers to apply styles, such as colors, fonts, and spacing, to HTML elements, enhancing the visual appearance and user experience of a website.",
      icon: faCss3,
    },
    {
      name: "JavaScript",
      des: "JavaScript is a versatile programming language primarily used for creating dynamic and interactive effects within web browsers. It allows developers to implement complex features such as form validation, animations, and asynchronous requests.",
      icon: faJs,
    },
    {
      name: "ReactJs",
      des: "React.js is a popular JavaScript library for building user interfaces, particularly single-page applications. It enables developers to create reusable UI components and manage the state of complex applications efficiently.",
      icon: faReact,
    },
    {
      name: "VueJs",
      des: "Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications. It is known for its simplicity and flexibility, allowing developers to incrementally adopt its features as needed.",
      icon: faVuejs,
    },
    {
      name: "Node.js",
      des: "Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It is built on Chrome's V8 JavaScript engine and is used to build scalable network applications and backend services.",
      icon: faNodeJs,
    },
    {
      name: "MongoDB",
      des: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is known for its scalability and performance, making it ideal for handling large volumes of data in modern web applications.",
      icon: faDatabase, // assuming you have an icon for MongoDB
    },
    {
      name: "Java",
      des: "Java is a widely-used, class-based, object-oriented programming language designed for portability and cross-platform compatibility. It is commonly used for building enterprise-scale applications, Android apps, and server-side development.",
      icon: faJava, // assuming you have an icon for Java
    },
  ]);
  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur
        consequatur quisquam harum.
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className={"item "}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
