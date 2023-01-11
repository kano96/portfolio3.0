import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profilePic from "../public/profile-pic.jpeg";
import Link from "next/link";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Kevin Torres",
      "I am a Software Developer",
      "Who loves JavaScript.",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={profilePic}
        alt="Picture of the author"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Welcome to my site
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton ">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton ">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton ">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton ">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
