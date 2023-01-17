import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-[#292929] p-5 lg:p-10 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://avatars.githubusercontent.com/u/583548?s=280&v=4"
        className="rounded-full w-28 h-28 object-cover object-center"
        alt="devsu-img"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light md:text-3xl">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-lg md:text-xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2 ">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={technology.title}
              width={["Go", "AWS"].includes(technology.title) ? 60 : 30}
              height={30}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 ">
          {experience?.points.map((detail) => (
            <li className="text-md" key={detail}>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
