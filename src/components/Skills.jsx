import ScrollAnimation from "react-animate-on-scroll";
import { skills } from "../data/skillsData";
import Slider from "react-slick"; // Import Slider from react-slick

export default function Skills() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <section
      id="skills"
      className="min-h-screen py-16 flex flex-col justify-center bg-opacity-20 skills-bg relative"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-teal-900/30 to-slate-950 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-8 mt-6">
          Skills
        </h2>
        <ScrollAnimation animateIn="jackInTheBox" initiallyVisible={true}>
          <div className=" px-6 md:px-10 my-6 w-9/12 mx-auto rounded-2xl backdrop-blur-lg text-white">
            <Slider {...settings}>
              {skills.map((skill, index) => (
                <div key={index} className="px-4">
                  <div className="flex justify-center items-center h-32 w-32 rounded-full p-2 bg-white hover:text-black transition cursor-pointer backdrop-blur-md">
                    <div className="text-center flex flex-col justify-center items-center">
                      <div className="flex justify-center items-center p-3">
                        {skill.icon}
                      </div>
                      <p className="text-base font-medium text-gray-900">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
