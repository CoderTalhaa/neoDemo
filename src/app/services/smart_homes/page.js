"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion";
import { AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";
import Image from "next/image";
import Link from 'next/link';
const services = [
  {
    id: 1,
    title: "Home & Office Security",
    image: "/img/serviceimg/home.webp",
    path: "/services/home-and-office-security",
  },

  {
    id: 2,
    title: "Drone Cinematography",
    image: "/img/serviceimg/dron.png",
    path: "/services/drone-cinematography",
  },
  {
    id: 3,
    title: "Network Infrastructure",
    image: "/img/serviceimg/network.png",
    path: "/services/network-infrastructure",
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
      <section className="relative overflow-hidden pt-8 text-white ">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/serviceimg/bgsmarthome.jpg"
            alt="Background"
            fill
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#001420] bg-opacity-80"></div>
        </div>

        <div className=" relative z-10 md:mt-20 py-7 mb-12 px-4">
          <div className="flex justify-center flex-wrap">
            {/* Left Content Column */}
            <div className="w-full lg:w-3/6 lg:mb-0">
              <div className="lg:mr-[30px]">
                <motion.h1
                  {...textAnimation}
                  className="relative inline-block mt-5 text-[22px] font-medium text-white font-montserrat"
                >
                  <span className="relative z-10 pr-2">
                    HOME AT YOUR FINGERTIPS
                  </span>

                  <svg
                    className="absolute bottom-[-50px] left-0 w-[320px] h-[100px] text-emerald-500"
                    viewBox="0 0 330 50"
                    fill="none"
                    stroke="#20c18c"
                    strokeWidth="2"
                  >
                    <path
                      d="M-1.8268035364366684 24.302617903745634 C61.083301825096356 25.159943149736684, 125.93716554892401 24.88289320650186, 292.1831851676607 26.643820282553477"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                    <path
                      d="M291.56771530494296 25.47991273858865 C184.00035279536397 28.336315440279343, 78.32713129353489 27.7277694172498, -0.820815416296871 26.19245855201304"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.h1>

                <motion.h1
                  {...textAnimation}
                  className="pb-4 text-[45px] font-extrabold text-white leading-[1.3em] font-montserrat tracking-tight mb-2 mt-3 shadow-md"
                >
                  SMART HOMES
                </motion.h1>

                <motion.div {...textAnimation}>
                  <h2 className="pb-4 text-[20px] lg:text-[21px] md:text-[16px] sm:text-[14px]  text-white font-bold font-montserrat">
                    <p className="text-shadow-md">
                      Bring today’s cutting edge technology right into your home
                      with ease.
                    </p>
                  </h2>
                </motion.div>

                <motion.h3
                  {...textAnimation}
                  className=" pb-3 text-[21px] lg:text-[24px] md:text-[18px] sm:text-[16px] font-bold text-white leading-[1.3em] text-shadow-md my-2 font-montserrat"
                >
                  Internet of Things allows you to control the utilities and
                  features of your home via the Internet, at the same time
                  making life more convenient and secure.
                </motion.h3>

                <motion.h2
                  {...textAnimation}
                  className="mb-9 mt-5 text-[20px] lg:text-[24px] md:text-[18px] sm:text-[16px] font-light text-white leading-[1.5em] drop-shadow-md"
                >
                  Home automation can be a chore, let us deliver customized
                  routines for your lifestyle. Your Home tailored to Your Liking
                  & Commands.
                </motion.h2>

                <motion.h4
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="pb-5 text-[29px] lg:text-[29px] md:text-[26px] sm:text-[22px] font-extrabold text-white text-shadow-md"
                >
                  Capabilities
                </motion.h4>

                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className="pb-2 text-[18px] lg:text-[20px] md:text-[14px] sm:text-[12px] font-semibold text-white leading-relaxed text-shadow-md"
                >
                  We design a smart home just for you. All the capabilities you
                  want, none of the extra fuss.
                </motion.h2>
              </div>
            </div>

            {/* Right Side Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full px-6 mt-3 lg:w-[32%]  lg:h-full lg:block hidden"
            >
              <div className="p-6 mb-6 rounded bg-black bg-opacity-50">
                <h2 className="mb-3  text-2xl font-bold">
                  {" "}
                  Looking to upgrade your home with the best?
                </h2>
                <p className="mb-4 mt-4 text-[17px] text-gray-300 ">
                  Our team will install and configure all of your devices
                  tailored to you, making your life a breeze.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white group relative"
                >
                  <span className="flex items-center font-semibold">
                    <span>VIEW OUR PORTFOLIO</span>
                    <AiOutlineRight className="h-4 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Services Section */}
          <div className="md:pl-20 md:ml-6 md:pt-6 lg:mt-14">
            <div className="grid grid-cols-1 md:flex md:gap-6">
              {[
                {
                  title: "Installation",
                  items: [
                    "Configuration",
                    "Product Placement",
                    "Device Security",
                    "Provisioned Accounts",
                    "More",
                  ],
                },
                {
                  title: "Smart Platforms",
                  items: [
                    "Amazon Alexa",
                    "Apple HomeKit",
                    "Google Assistant",
                    "IFTTT",
                    "Z-Wave",
                    "Zigbee",
                  ],
                },
                {
                  title: "Devices",
                  items: [
                    "Speakers & Lights",
                    "Thermostats & Plugs",
                    "Doorbell & Security",
                    "Cameras",
                    "Smart Locks",
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
                  className="p-4 w-full md:w-[270px]"
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
                        <p className="text-[21px] text-white font-montserrat shadow-md">
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
              <h2 className="mb-3 p-4 text-3xl font-bold text-gray-100 leading-tight">
                Upgrade your home with us today!
              </h2>
              <p className="mb-3 pl-4 pr-4 text-gray-300 text-sm leading-relaxed">
                Our team will install and configure all of your devices tailored
                to you, making your life a breeze.
              </p>
              <a
                href="#"
                className="inline-flex items-center ml-4 mt-5 px-6 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white group relative"
              >
                <span className="flex items-center font-bold ">
                  <span>VIEW OUR PORTFOLIO</span>
                  <AiOutlineRight className="h-4 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                </span>
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
              <h2 className="mb-7 text-2xl pl-5 pr-4 font-bold text-gray-100 leading-tight">
                Looking to make your home smarter?
              </h2>
              <p className="mb-5 text-gray-300 pl-5 text-sm leading-relaxed">
                Like what you see? Start working with us by providing your needs
                and details
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
                className="absolute bottom-[-26px] left-0 w-[280px] h-[100px] pt-7 text-emerald-500"
                viewBox="0 0 210 40"
                fill="none"
                stroke="#20c18c"
                strokeWidth="2"
              >
                <motion.path
                  d="M2.0917623192627124 32.67794170701401 C56.83771071483315 36.464868179221064, 118.50862260475212 34.445652239901506, 206.54371912712244 30.778666898511904"
                  strokeDasharray="212.096"
                  strokeDashoffset="212.096"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.path
                  d="M209.9812796369346 34.95203260869995 C165.03589040100502 33.34973647362646, 117.36396051771507 32.156478128298296, -0.8304079443109674 30.643577532767797"
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
