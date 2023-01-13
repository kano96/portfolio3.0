import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  rangeDate: string;
  bulletPoints: string[];
};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-[#292929] p-10  cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        <h4 className="text-3xl font-light">{props.title}</h4>
        <p className="font-bold text-xl mt-1">{props.subtitle}</p>
        <div className="flex space-x-2 my-2 ">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="js-logo"
            width={40}
            height={40}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            alt="ts-logo"
            width={40}
            height={40}
          />
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1280px-Go_Logo_Blue.svg.png"
            alt="js-logo"
            width={70}
            height={40}
          />
          <Image
            src="https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png"
            alt="js-logo"
            width={70}
            height={40}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">{props.rangeDate}</p>
        <ul className="list-disc space-y-4 ml-5">
          {props.bulletPoints.map((detail) => (
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
