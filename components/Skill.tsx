import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24   md:w-28 md:h-28  filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full md:w-28 md:h-28 z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold  text-black opacity-100">
            TypeScript
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
