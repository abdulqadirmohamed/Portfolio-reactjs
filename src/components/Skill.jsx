import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Skill = () => {
  const skills = [
    { name: "ReactJs", info: "as my Frontend Framework" },
    { name: "JavaScript", info: "as my main language" },
    { name: "Tailwind CSS", info: "as my CSS framework" },
    { name: "Adobe XD", info: "as my designing tool" },
    { name: "Express JS", info: "as my API framework" },
    { name: "Git & GitHub", info: "VCSs" },
    { name: "Visual Studio Code", info: " as my code editor" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-medium my-4">Skills & Uses</h1>
      {skills.map((skill) => (
        <div className="flex border-b-[1px] border-gray-600 py-1">
          <BsArrowRightShort size={25} className="text-gray-400" />
          <span className="ml-1"> {skill.name}</span>
          <span className="text-gray-300 ml-4 font-light"> {skill.info}</span>
        </div>
      ))}
      <p className="mt-4">
        <span className="text-gray-400">...more skills include </span>HTML5, CSS3, WordPress, TypeScript,
        NextJS, Automation, Databases, APIs
      </p>
    </div>
  );
};

export default Skill;
