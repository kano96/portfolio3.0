import { motion } from "framer-motion";
import Link from "next/link";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left h-screen md:flex-row max-w-7 px-10 justify-evenly mx-auto items-center max-w-5xl "
    >
      <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src="https://res.cloudinary.com/dhbyo6yxl/image/upload/v1673469538/kev_capfgy.png"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base md:text-lg">
          {pageInfo?.backgroundInformation ||
            `I am Kevin Torres. I am a software developer. I have solid front-end
          knowledge of React, Redux, Typescript, NextJS and Jest. Experienced in
          backend technologies including microservices architectures, Go,
          Express, and NodeJS. Strong knowledge of AWS, AWS Certified Cloud
          Practitioner. Driven for results while focusing on high code quality
          and performance. I have been coding for over 2 years now. As a Full
          Stack Developer I have worked with large corporations like Kushki`}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
