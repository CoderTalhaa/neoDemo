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
const services = [
  {
    id: 1,
    title: "Digital Marketing",
    image: "/img/serviceimg/digitalmarkiting.png",
    path: "/services/digital-marketing",
  },
  {
    id: 2,
    title: "Smart Homes",
    image: "/img/serviceimg/smarthome.jpg",
    path: "/services/smart_homes",
  },
  {
    id: 3,
    title: "Web Design and Hosting",
    image: "/img/serviceimg/webdesign.webp",
    path: "/services/website-design-and-hosting",
  },
];
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
      <section className="relative overflow-hidden pt-8 text-white bg-black">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/serviceimg/bgdrone.jpg"
            alt="Background"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-[#001420] bg-opacity-80"></div>
        </div>

        <div className=" relative z-10 md:mt-16 py-7 mb-12 px-4">
          <div className="flex justify-center flex-wrap">
            {/* Left Content Column */}
            <div className="w-full lg:w-3/6 lg:mb-0">
              <div className="lg:mr-[30px]">
                <MotionH1
                  {...textAnimation}
                  className="relative inline-block mt-5 text-[22px] font-medium text-white font-montserrat"
                >
                  <span className="relative z-10 pr-2">TAKE FLIGHT</span>
                  <svg
                    className="absolute bottom-[-10px] left-0 w-[190px] text-emerald-500"
                    viewBox="0 0 210 40"
                    fill="none"
                    stroke="#20c18c"
                    strokeWidth="2"
                  >
                    <path
                      d="M0.004302553832530975 24.053169555962086 C44.25265205660654 23.353271037540143, 88.55037137139227 25.46470382829637, 134.56801062077284 24.268083162605762"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                    <path
                      d="M131.09610468894243 23.896847777068615 C84.59167605348102 27.30519971024184, 39.32364420757041 24.154174176565693, 0.9202788546681404 25.145187191665173"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                  </svg>
                </MotionH1>

                <MotionH1
                  {...textAnimation}
                  className="pb-4 text-[43px] font-extrabold text-white leading-[1.3em] font-montserrat tracking-tight mb-2 mt-3 shadow-md"
                >
                  Drone Cinematography
                </MotionH1>

                <MotionDiv {...textAnimation}>
                  <h2 className="pb-4 text-[20px] lg:text-[23px] md:text-[16px] sm:text-[14px] leading-[1.8em] text-white font-bold font-montserrat">
                    <p className="text-shadow-md">
                      Ready to Elevate your Content to the Next Level?
                    </p>
                  </h2>
                </MotionDiv>

                <MotionH3
                  {...textAnimation}
                  className=" pb-3 text-[21px] lg:text-[23px] md:text-[18px] sm:text-[16px] font-bold text-white leading-[1.3em] text-shadow-md my-2 font-montserrat"
                >
                  With so much competition, you must elevate your content to
                  stand out at the forefront of your business.
                </MotionH3>

                <MotionH2
                  {...textAnimation}
                  className="mb-9 mt-5 text-[20px] lg:text-[23px] md:text-[18px] sm:text-[16px] font-ligh text-white leading-[1.8em] drop-shadow-md"
                >
                  Our Drone Photography and Videography services are here to
                  deliver. We offer an ample amount of packages ready for our
                  next flight to be your deliverable and are licensed & insured!
                </MotionH2>

                <MotionH4
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="pb-5 text-[29px] lg:text-[29px] md:text-[26px] sm:text-[22px] font-extrabold text-white text-shadow-md"
                >
                  Capabilities
                </MotionH4>

                <MotionH2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className="pb-2 text-[18px] lg:text-[20px] md:text-[14px] sm:text-[12px] font-bold text-white leading-relaxed text-shadow-md"
                >
                  Fully Licensed, Insured & Ready to take Flight.
                </MotionH2>
              </div>
            </div>

            {/* Right Side Column */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full px-6 mt-10 lg:w-[30%] lg:block hidden"
            >
              <div className="p-6 mb-6 rounded bg-black bg-opacity-50">
                <h2 className="mb-3 text-2xl font-extrabold">
                  {" "}
                  Looking for Drone Work?
                </h2>
                <p className="mb-4 text-gray-300 font-secondary">
                  Our Drone Cinematography experts are ready to deliver Photos
                  and Videos for your next project.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white group relative"
                >
                  <span className="flex items-center ">
                    <span>INQUIRE</span>
                    <AiOutlineRight className="h-4 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </span>
                </a>
              </div>
            </MotionDiv>
          </div>

          {/* Services Section */}
          <div className="md:pl-20 md:ml-6 md:pt-6 lg:mt-14">
            <div className="grid grid-cols-1 md:flex md:gap-6">
              {[
                {
                  title: "Photography",
                  items: [
                    "Real Estate",
                    "Restaurants",
                    "Promotional Content",
                    "Events",
                    "More",
                  ],
                },
                {
                  title: "Videography",
                  items: [
                    "Motion Picture",
                    "Hyperlapses",
                    "Promotional Content",
                    "Commericals",
                    "More",
                  ],
                },
                {
                  title: "Editing & Composition",
                  items: [
                    "Introductions",
                    "Color Grading",
                    "Outtros",
                    "Platform Based Rendering",
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
                  className="p-4 w-full md:w-[250px]"
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

          {/* Mobile CTA Section */}
          <div className="w-full px-4 lg:hidden bg-black bg-opacity-50 rounded-lg ">
            <div className="p-5">
              <h2 className="mb-3 p-4 text-lg font-bold text-gray-100 leading-tight">
                Looking for Drone Work?
              </h2>
              <p className="mb-3 pl-4 pr-4 text-gray-300 text-sm leading-relaxed">
                Our Drone Cinematography experts are ready to deliver Photos and
                Videos for your next project.
              </p>
              <a
                href="/contact"
                className="inline-block ml-5 px-4 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white"
              >
                INQUIRE
              </a>
            </div>

            <div className="flex items-center justify-center p-3">
              <div className="flex items-center w-full max-w-xs">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="mx-4 text-sm text-gray-300 font-medium">
                  or
                </span>
                <div className="flex-grow border-t border-gray-600"></div>
              </div>
            </div>

            <div className="p-5">
              <h2 className="mb-3 text-lg pl-5 pr-4 font-bold text-gray-100 leading-tight">
                Let&apos;s talk about Aerial Cinematography.
              </h2>
              <p className="mb-3 text-gray-300 pl-5 text-sm leading-relaxed">
                Like what you see? Start working with us by providing your needs
                and details.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 ml-5 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white"
              >
                CONTACT US
              </a>
            </div>
          </div>

          {/* Desktop Contact Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:block hidden pt-8"
          >
            <a
              href="/contact"
              className="w-full lg:w-[1000px] h-10 items-center justify-center flex mx-auto py-2 text-[14px] font-[500] text-white transition-all rounded bg-[#38b2ac] hover:bg-[#38b2ac] group relative"
            >
              <span className="flex justify-center items-center gap-2">
                <span>Contact Us</span>
                <AiOutlineRight className="h-4 w-5 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </span>
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
                className="absolute bottom-[-16px] left-0 w-full h-20 pt-7 text-emerald-500"
                viewBox="0 0 210 40"
                fill="none"
                stroke="#20c18c"
                strokeWidth="2"
              >
                <motion.path
                  d="M2.4592289145266353 31.79533628487218 C69.55965310070292 26.988089753888087, 137.18863734853835 24.52936489791827, 209.79917941495106 29.275974706854214"
                  strokeDasharray="212.096"
                  strokeDashoffset="212.096"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.path
                  d="M206.12843673222287 27.77390998131277 C127.38900934103435 27.68324283997804, 45.40642930723566 26.1094104099692, 1.2433287104058663 28.35625969767434"
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
