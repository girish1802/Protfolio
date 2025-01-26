import React from "react";

export default function About() {
  return (
    <>
      <div
        name="About"
        className="mt-10 md:space-y-6 ml-5 mr-5 md:ml-20 md:mr-20"
      >
        {/* Introduction Section */}
        <div>
          <h1 className="text-3xl font-semibold">About Me</h1>
          <p className="mt-4 text-lg text-gray-700">
            Hello, I'm Girish, a passionate Web Developer with a keen eye for
            the MERN Stack. With a background in IT, I strive to create
            impactful and visually stunning software solutions that leave a
            lasting impression.
          </p>
        </div>

        {/* Education & Training Section */}
        <section>
          <h2 className="text-2xl text-green-400 font-semibold">
            Education & Training
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            <strong>MCA</strong>, Dr. D Y Patil Center For Management & Research
            College in Maharashtra ,2022-2024 <br />
            <strong>BCA</strong>, Moolji Jaitha (Autonomous) College, Jalgaon
            ,2019-2022 <br />
          </p>
        </section>

        {/* Skills & Expertise Section */}
        <section>
          <h2 className="text-2xl text-green-400 font-semibold">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Proficient in <span className="font-bold ">HTML , CSS , TailwindCSS , Javascript , Reactjs, Nodejs, MongoDB </span><br />
            Experienced with <span className="font-bold">git</span> and <span className="font-bold"> github </span><br />
            Excellent problem-solving skills <br />
            Effective communicator and collaborator
          </p>
        </section>

        {/* Professional Experience Section */}
        <section>
          <h2 className="text-2xl text-green-400 font-semibold">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-700 mt-2">
           <h2 className="font-bold"> Junior web Developer Intern, Codding Savvy,  June 2024-Oct 2024</h2> 
            <ul>
              <li> Develop and complete assigned web development tasks.</li>
              <li>
                Collaborate with team members to design and implement web
                applications.
              </li>
              <li>
                {" "}
                Participate in code reviews and provide constructive feedback.
              </li>
              <li>
                Continuously learn and apply new web development technologies
                and best practices.
              </li>
            </ul>{" "}
            <br />
         
          </p>
        </section>

        {/* Achievements & Awards Section */}
       

        {/* Mission Statement Section */}
        <section>
          <h2 className="text-2xl text-green-400 font-semibold">
            Mission Statement
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            My mission is to leverage my skills and creativity to deliver
            innovative solutions that exceed client expectations and contribute
            positively to the digital landscape. I am committed to continuous
            learning and growth, always seeking new challenges and opportunities
            to expand my horizons.
          </p>
        </section>
      </div>

      <hr className="mt-6" />
    </>
  );
}
