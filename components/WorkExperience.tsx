import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experience: Experience[];
};

const WorkExperience = ({ experience }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex p-10 space-x-4 snap-x overflow-x-scroll snap-mandatory md:justify-center scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experience?.map((item) => (
          <ExperienceCard key={item._id} experience={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
