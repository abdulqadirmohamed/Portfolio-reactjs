import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { db } from "../firebase";
import { getDocs, collection, doc } from "firebase/firestore";
import { async } from "@firebase/util";
import Test from "./Test";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loads, setLoads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const projectCollectionRef = collection(db, "projects");

  // Fetch data
  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectCollectionRef);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoads(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
      setIsLoading(true);
    };
    getProjects();
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-medium">Projects</h1>
      {/* cards */}
      {isLoading ? (
        <motion.div
          animate={{ y: 100 }}
          className="mt-8 md:grid grid-cols-3 md:gap-6"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              info={project.info}
              tags={project.tags}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </motion.div>
      ) : (
        <div className="mt-8 md:grid grid-cols-3 md:gap-6">
          <Test />
        </div>
      )}
    </div>
  );
};

export default Projects;
