"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion";
import { AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from 'next/link';

const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h1),
  { ssr: false }
);
const MotionH2 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h2),
  { ssr: false }
);
const MotionH3 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h3),
  { ssr: false }
);
const MotionH4 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h4),
  { ssr: false }
);
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const services = [
  {
    id: 1,
    title: "Smart Homes",
    image: "/img/serviceimg/smarthome.jpg",
    path: "/services/smart_homes",
  },
  {
    id: 2,
    title: "Drone Cinematography",
    image: "/img/serviceimg/dron.png",
    path: "/services/network-infrastructure",
  },
  {
    id: 3,
    title: "Remote Mointoring",
    image: "/img/serviceimg/remote.jpeg",
    path: "/services/remote-monitoring",
  },
];

const Page = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute left-4 top-[40%] -translate-y-1/2 w-10 h-10 flex items-center justify-center z-20 md:-left-12 md:text-gray-700 text-white"
      aria-label="Previous service"
    >
      <ChevronLeft size={36} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute right-4 top-[40%] -translate-y-1/2 w-10 h-10 flex items-center justify-center z-20 md:-right-12 md:text-gray-700 text-white"
      aria-label="Next service"
    >
      <ChevronRight size={36} />
    </button>
  );

  const textAnimation = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
    viewport: {
      once: true,
      amount: 0.3,
    },
  };

  return (
    <div className="min-h-screen w-full">
      <section className="relative overflow-hidden pt-8 text-white bg-[#001420]">
        {/* Background Image with Enhanced Responsiveness */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/serviceimg/bghomesecurity.jpg"
            alt="Background"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-[#001420] bg-opacity-80"></div>
        </div>

        <div className="relative z-10 md:mt-20 py-7 mb-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:flex-nowrap justify-center md:items-start">
            {/* Left Content Column */}
            <div className="w-full md:w-3/6 lg:w-2/5 xl:w-1/2 md:pr-8">
              <div className="md:max-w-[600px]">
                <MotionH1
                  {...textAnimation}
                  className="relative inline-block mt-5 text-lg sm:text-xl md:text-2xl font-medium text-white font-montserrat"
                >
                  <span className="relative z-10 pr-2">PEACE OF MIND</span>
          
                  <svg
                    className="absolute bottom-[-14px] left-0 w-[160px] sm:w-[180px] md:w-[200px] h-18 text-emerald-500"
                    viewBox="0 0 210 40"
                    fill="none"
                    stroke="#20c18c"
                    strokeWidth="2"
                  >
                    {/* ... keep existing path data ... */}
                  </svg>
                </MotionH1>

                <MotionH1
                  {...textAnimation}
                  className="pb-4 text-3xl xs:text-4xl sm:text-5xl md:text-[43px] font-extrabold text-white leading-[1.2] md:leading-[1.3] tracking-tight mt-3"
                >
                  Home & Office Security
                </MotionH1>

                {/* Responsive Text Sizing Hierarchy */}
                <MotionDiv {...textAnimation}>
                  <h2 className="pb-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.6] md:leading-[1.8] text-white font-semibold">
                    Looking to keep your home or office safe? Look no further
                    than our customized security solutions
                  </h2>
                </MotionDiv>

                <MotionH3
                  {...textAnimation}
                  className="pb-3 text-lg sm:text-xl md:text-2xl font-bold text-white leading-[1.4]"
                >
                  We deliver customized security solutions, so you can have
                  assurance and peace of mind.
                </MotionH3>

                <MotionH2
                  {...textAnimation}
                  className="mb-9 mt-5 text-base sm:text-lg md:text-xl font-light text-white leading-[1.6]"
                >
                  Our security solutions are from only the best providers in the
                  security business. Surveillance? No Problem. We have you
                  Covered.
                </MotionH2>

                
                <MotionH4
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="pb-5 text-xl sm:text-2xl md:text-3xl font-extrabold"
                >
                  Capabilities
                </MotionH4>

                <MotionH2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className="pb-2 text-sm sm:text-base md:text-lg font-bold text-white leading-relaxed"
                >
                  Physical Security Delivered. These solutions will provide
                  peace of mind for your home or business.
                </MotionH2>
              </div>
            </div>

            {/* Right Side Column  */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full mt-8 md:mt-0 md:w-2/5 lg:w-1/3 xl:w-[34%] md:pl-4"
            >
              <div className="p-6 rounded bg-black bg-opacity-50 backdrop-blur-sm">
                <h2 className="mb-3 text-xl md:text-2xl font-extrabold">
                  Looking for Security Solutions?
                </h2>
                <p className="mb-4 mt-4 text-sm md:text-base text-gray-300">
                  Our Team is ready to assist in your home or business security
                  needs.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-2 text-sm md:text-base font-medium text-[#20C18C] uppercase transition-all rounded bg-white hover:bg-gray-50"
                >
                  <span className="flex items-center">
                    INQUIRE
                    <AiOutlineRight className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              </div>
            </MotionDiv>
          </div>
          {/* Services Section */}
          <div className="md:pl-20  md:ml-6 md:pt-6 lg:mt-14">
            <div className="grid grid-cols-1 md:flex md:gap-6">
              {[
                {
                  title: "Camera Systems",
                  items: [
                    "Planning",
                    "Installation",
                    "NVR Deployment",
                    "Schedules",
                    "More",
                  ],
                },
                {
                  title: "System Installs",
                  items: ["Cove", "August", "Yale", "Ring", "Nest", "More"],
                },
                {
                  title: "Smart Home Integration",
                  items: [
                    "Amazon Alexa",
                    "Google Home",
                    "Apple HomeKit",
                    "Samsung SmartThings",
                    "OpenHab",
                    "More",
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="p-4 w-full md:w-[220px]"
                >
                  <h3 className="text-[21px] font-bold text-white font-montserrat shadow-md tracking-tight leading-tight mb-3">
                    {section.title}
                  </h3>

                  <ul className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={`${section.title}-${itemIndex}`}
                        className="flex items-center"
                      >
                        <span className="flex items-center justify-center w-2 h-2 mr-2 text-white">
                          <MdPlayArrow className="text-xs" />
                        </span>
                        <p className="text-[20px] text-white font-montserrat shadow-md">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile CTA - Optimized for Touch */}
          <div className="mt-8 md:hidden bg-black bg-opacity-50 rounded-xl p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-100 mb-3">
                  Looking for Security Solutions?
                </h2>
                <p className="text-sm text-gray-300 mb-4">
                  Our Team is ready to assist in your home or business security
                  needs.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-2 text-sm font-medium text-[#20C18C] bg-white rounded"
                >
                  INQUIRE
                </a>
              </div>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 text-sm text-gray-300 bg-transparent">
                    or
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-100 mb-3">
                  Lets Secure Your Property
                </h2>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-2 text-sm font-medium text-[#20C18C] bg-white rounded"
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </div>

          {/* Optimized Desktop Contact Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden md:block mt-12 max-w-4xl mx-auto"
          >
            <a
              href="/contact"
              className="flex items-center justify-center px-8 py-3 text-sm md:text-base font-medium text-white bg-[#38b2ac] hover:bg-[#2e968f] rounded-lg transition-colors"
            >
              Contact Us
              <AiOutlineRight className="ml-2 h-5 w-5 opacity-80 hover:opacity-100" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Carousal Section */}
      <section className="py-12 bg-[#001420] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative text-4xl font-bold mb-10 inline-block pb-1"
          >
            <span className="relative">
              Related Services
              <svg
                className="absolute bottom-[-8px] left-0 w-full h-20 pt-7 text-emerald-500"
                viewBox="0 0 210 40"
                fill="none"
                stroke="#20c18c"
                strokeWidth="2"
              >
                <motion.path
                  d="M-2.6129780051317275 30.644895129283494 C72.30817526188751 33.9999915060291, 141.3690497085347 33.253687148975686, 209.43457981487168 34.67660060115552"
                  strokeDasharray="212.096"
                  strokeDashoffset="212.096"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.path
                  d="M210.63320280598697 30.985419839122933 C141.52703257478063 29.601489218630086, 70.78033455151709 31.54190993947984, -0.1062767907725801 30.131298177699403"
                  strokeDasharray="210.747"
                  strokeDashoffset="210.747"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
                />
              </svg>
            </span>
          </motion.h1>

          <div className="relative">
            <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />

            <Slider ref={sliderRef} {...settings}>
              {services.map((service) => (
                <div key={service.id} className="px-2">
                  <div
                    className="rounded-lg overflow-hidden relative shadow-lg"
                    style={{ width: "100%", minHeight: "280px" }}
                  >
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-[#38b2ac] text-white text-sm px-3 py-1 rounded-full">
                        Related Service
                      </span>
                    </div>
                    <Link href={service.path} passHref>
            <div className="relative w-full h-64 cursor-pointer">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={256}
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>

            <div className="p-2 flex justify-center bg-[#001420] ">
              <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                {service.title}
              </h3>
            </div>
          </Link>
                  </div>
                </div>
              ))}
            </Slider>

            <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
