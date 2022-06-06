import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({ title, info, tags, demo, github }) => {
  return (
    <div>
      {/* card */}
      <div className="bg-gray-800 rounded-md p-6 w-100 sm:w-full my-4 sm:my-0 h-64 relative">
        {/* title and icon */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl flex-1 ">{title}</h1>
          <div className="flex gap-4 my-2">
            <div>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  className="hover:text-purple-400 transition ease-out duration-300"
                >
                  <AiFillGithub size={25} />
                </a>
              )}
            </div>
            <div>
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  className="hover:text-purple-400 transition ease-out duration-300"
                >
                  <BiLinkExternal size={25} />
                </a>
              )}
            </div>
          </div>
        </div>
        {/* info */}
        <div className="my-4">
          <p>{info}</p>
        </div>
        {/* tags */}
        <div className="flex gap-2 absolute bottom-4">
            {tags &&
              tags.map((tag) => (
                <span className="bg-purple-800 text-white px-2  rounded-sm">
                  {tag}
                </span>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
