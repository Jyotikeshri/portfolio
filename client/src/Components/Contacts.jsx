import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "Email",
      value: "jyotikeshri9b21@gmail.com",
    },
    {
      title: "LinkedIn",
      value: (
        <a
          href="https://www.linkedin.com/in/jyoti-keshri"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/jyoti-keshri
        </a>
      ),
    },
    {
      title: "GitHub",
      value: (
        <a
          href="https://github.com/jyotikeshri"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/jyotikeshri
        </a>
      ),
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Here are my contact details. Feel free to reach out to me through any of
        the following platforms.
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className="item" key={key}>
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Contacts;
