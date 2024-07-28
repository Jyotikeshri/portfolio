import React, { useRef } from "react";
import CustomHook from "./CustomHook";
import resume from "./resume_jyoti_keshri1.pdf";
import me from "./Jyoi_keshri.png";
function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          MY NAME IS <span>Jyoti Keshri</span>
        </div>
        <div className="des">
          {/* 30 */}
          Hello! I'm Jyoti keshri, a passionate and dedicated computer science
          enthusiast currently pursuing my degree at DSEU Dwarka. With a strong
          foundation in both theoretical and practical aspects of computer
          science, I have cultivated a diverse skill set that includes C, Java,
          Data Structures and Algorithms, HTML, CSS, JavaScript, MongoDB, SQL,
          Node.js, Express.js, React.js, Bootstrap, Tailwind CSS, JWT, CLERK,
          STREAM, and tools like Git and GitHub.
        </div>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          Download My CV
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src={me} alt="" />
          <div className="info">
            <div>Developer</div>
            <div>Indian</div>

            <div>Female</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
