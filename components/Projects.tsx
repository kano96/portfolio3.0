import { motion } from "framer-motion";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              className="md:w-[600px] w-[400px]"
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://res.cloudinary.com/dhbyo6yxl/image/upload/v1673560342/Captura_de_pantalla_2023-01-12_165130_v9hsxm.png"
              alt="project-admin-img"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Admin Dashboard
              </h4>

              <p className="text-lg text-center lg:text-left">
                This is a frontend app with a music player which consumes Shazam
                Rapid API, in this site you can explore, play, pause and search
                music. This is a frontend app with a music player which consumes
                Shazam Rapid API, in this site you can explore, play, pause and
                search music.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#bcd8c1]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
