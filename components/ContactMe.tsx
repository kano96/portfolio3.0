"use client";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const { register, reset, handleSubmit } = useForm<Inputs>();
  const [messageSent, setMessageSent] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_MAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE!,
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(() => setMessageSent(true))
      .catch(() => alert("Something went wrong please try again :c"))
      .finally(() => {
        reset({ email: "", name: "", subject: "", message: "" });
        setTimeout(() => {
          setMessageSent(false);
        }, 2000);
      });
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+593 987515576</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">kevintorresi1996@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Quito, Ecuador</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-1 md:space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
        {messageSent && (
          <div className="text-center lg:fixed top-16 right-24 bg-slate-400/10 rounded-sm px-5 py-2 ">
            <h3 className="text-xl">Thank you! Message sent :D</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
