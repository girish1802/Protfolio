import React from "react";

export default function About() {
  return (
    <>
      <div name="About" className="mt-10 md:space-y-6 ml-5 mr-5 md:ml-20 md:mr-20">
        {/* Introduction Section */}
        <div>
          <h1 className="text-3xl font-semibold">About Me</h1>
          <p className="mt-4 text-lg text-gray-700">
            Hello, I'm Girish, a passionate Web Developer with a keen eye for the MERN Stack. With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
          </p>
        </div>

        {/* Education & Training Section */}
        <section>
          <h2 className="text-2xl text-green-400 font-semibold">Education & Training</h2>
          <p className="text-lg text-gray-700 mt-2">
            [Degree/Certification], [Institution], [Year] <br />
            [Degree/Certification], [Institution], [Year] <br />
            [Relevant Course], [Platform/Institution], [Year]
          </p>
        </section>

        {/* Skills & Expertise Section */}
        <section>
          <h2 className="text-2xl text-green-400 font-semibold">Skills & Expertise</h2>
          <p className="text-lg text-gray-700 mt-2">
            Proficient in [Programming Languages] <br />
            Experienced with [Software Tools/Technologies] <br />
            Strong grasp of [Design Principles/Concepts] <br />
            Excellent problem-solving skills <br />
            Effective communicator and collaborator
          </p>
        </section>

        {/* Professional Experience Section */}
        <section>
          <h2 className="text-2xl text-green-400 font-semibold">Professional Experience</h2>
          <p className="text-lg text-gray-700 mt-2">
            [Job Title], [Company/Organization], [Dates] <br />
            [Brief description of responsibilities and achievements] <br />
            [Job Title], [Company/Organization], [Dates] <br />
            [Brief description of responsibilities and achievements] <br />
            [Freelance/Contract Work], [Client/Organization], [Dates] <br />
            [Brief description of projects and contributions]
          </p>
        </section>

        {/* Achievements & Awards Section */}
        <section>
          <h2 className="text-2xl text-green-400 font-semibold">Achievements & Awards</h2>
          <p className="text-lg text-gray-700 mt-2">
            [Award/Recognition], [Organization/Institution], [Year] <br />
            [Achievement], [Organization/Platform], [Year]
          </p>
        </section>

        {/* Mission Statement Section */}
        <section>
          <h2 className="text-2xl text-green-400 font-semibold">Mission Statement</h2>
          <p className="text-lg text-gray-700 mt-2">
            My mission is to leverage my skills and creativity to deliver innovative solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
          </p>
        </section>
      </div>

      <hr className="mt-6" />
    </>
  );
}
