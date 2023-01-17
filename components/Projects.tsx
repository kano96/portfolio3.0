import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              className=" lg:w-[400px] w-[200px]"
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt="project-admin-img"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl font-semibold text-center md:text-2xl xl:text-3xl">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies?.map((technology) => {
                  return technology ? (
                    <Image
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt={technology.title}
                      width={40}
                      height={40}
                    />
                  ) : null;
                })}
              </div>

              <p className="text-sm md:text-md lg:text-xl text-center lg:text-left">
                {project.summary}
              </p>
              <div className="flex justify-center items-center gap-5">
                <Link
                  href={project.linkToBuild}
                  className="text-gray-500 hover:text-white"
                  target="_blank"
                >
                  View build
                </Link>
                {project.linkToRepo.map((link, i) => (
                  <Link
                    href={link}
                    key={`Repo${link}`}
                    className="text-gray-500 hover:text-white"
                    target="_blank"
                  >
                    Go to {i === 0 ? "Frontend" : "Backend"} repository
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#bcd8c1]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
