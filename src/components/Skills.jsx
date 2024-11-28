import { motion } from "framer-motion";
import { skills } from "../data/skillsData";
import Slider from "react-slick"; // Import Slider from react-slick
import { div } from "framer-motion/client";

export default function Skills() {
  // Slick slider settings for autoplay
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Loop carousel
    speed: 500, // Transition speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Delay between each auto slide (in ms)
    slidesToShow: 5, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at once
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // On medium screens, show 3 items
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // On smaller screens, show 2 items
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // On mobile, show 1 item
        },
      },
    ],
  };

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-8 mt-6">
        Skills
      </h2>
      <div className="py-6 px-6 md:px-10 my-6 w-9/12 mx-auto rounded-2xl bg-gray-900 text-white">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="px-4">
              <div className="flex justify-center items-center h-32 w-32 rounded-full p-2 bg-white hover:text-black transition cursor-pointer backdrop-blur-md">
                <div className="text-center flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center p-3">
                    {skill.icon}
                  </div>
                  <p className="text-base font-medium text-gray-900">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
