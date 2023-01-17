import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="group relative flex cursor-pointer"
    >
      <Image
        className="rounded-full border border-gray-500 object-cover w-24 h-24   md:w-28 md:h-28  filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
        alt="tech-name"
        width={["AWS", "Go"].includes(skill?.title) ? 150 : 112}
        height={112}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full md:w-28 md:h-28 z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold  text-black opacity-100 text-center">
            {skill?.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
