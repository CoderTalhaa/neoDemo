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
    title: "Cloud Migration Strategies",
    image: "/img/serviceimg/cloud.png",
    path: "/services/cloud-migration",
  },
  {
    id: 2,
    title: "Network Infrastructure",
    image: "/img/serviceimg/network.png",
    path: "/services/network-infrastructure",
  },
  {
    id: 3,
    title: "Auditing & Pen Testing",
    image: "/img/serviceimg/auditing.jpeg",
    path: "/services/auditing-and-pen-testing",
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
      <section className="relative overflow-hidden pt-4 sm:pt-6 md:pt-8 text-white bg-[#001420]">
        {/* Background image*/}

        <div className="absolute inset-0 z-0">
          <Image
            src="/img/serviceimg/bgremote.jpg"
            alt="Background"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-[#001420] bg-opacity-80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-7 mt-6 sm:mt-8 md:mt-16 mb-6 sm:mb-8 md:mb-12">
          <div className="flex flex-col lg:flex-row justify-center flex-wrap">
            {/* Left Content Column */}
            <div className="w-full lg:w-3/6 mb-6 lg:mb-0">
              <div className="lg:mr-[30px]">
                <MotionH1
                  {...textAnimation}
                  className="relative inline-block mt-3 sm:mt-5 text-[18px] sm:text-[20px] md:text-[22px] font-medium text-white font-montserrat"
                >
                  <span className="relative z-10 pr-2">REST ASSURED</span>
                  <svg
                    className="absolute bottom-[-14px] left-0 w-[150px] sm:w-[200px] h-18 text-[#38b2ac]"
                    viewBox="0 0 210 40"
                    fill="none"
                    stroke="#20c18c"
                    strokeWidth="2"
                  >
                    <path
                      d="M0.6524998052045703 29.55421153176576 C47.04466334928122 26.717087206822384, 92.08576316502536 27.58164050934886, 158.56310806702822 25.879164163954556"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                    <path
                      d="M156.1078063296154 24.008997510187328 C118.90908714758213 24.42131695494509, 84.21842937454542 28.8955397640214, 1.2716061221435666 28.43523649405688"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                  </svg>
                </MotionH1>

                <MotionH1
                  {...textAnimation}
                  className="pb-2 sm:pb-4 text-[32px] sm:text-[38px] md:text-[43px] font-extrabold text-white leading-[1.2em] sm:leading-[1.3em] font-montserrat tracking-tight mb-2 mt-3 shadow-md"
                >
                  Remote Monitoring
                </MotionH1>

                <MotionDiv {...textAnimation}>
                  <h2 className="pb-2 sm:pb-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] leading-[1.6em] sm:leading-[1.8em] text-white font-bold font-montserrat">
                    <p className="text-shadow-md">
                      Assistance & Alerts for Your Home or Business delivered.
                    </p>
                  </h2>
                </MotionDiv>

                <MotionH3
                  {...textAnimation}
                  className="pb-2 sm:pb-3 text-[16px] sm:text-[18px] md:text-[21px] lg:text-[23px] font-bold text-white leading-[1.2em] sm:leading-[1.3em] text-shadow-md my-2 font-montserrat"
                >
                  Do you forget to patch your devices? Leave it to us to monitor
                  your home or business network. With so many devices one
                  vulnerability can compromise your whole network.
                </MotionH3>

                <MotionH2
                  {...textAnimation}
                  className="mb-4 sm:mb-6 md:mb-9 mt-3 sm:mt-5 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] font-light text-white leading-[1.6em] sm:leading-[1.8em] drop-shadow-md"
                >
                  Take the stress out of managing your own PCs and other
                  network-enabled connected devices with our remote monitoring
                  packages. Available and tailored to your needs to ensure you
                  are up to date and secure.
                </MotionH2>

                <MotionH4
                  {...textAnimation}
                  className="pb-3 sm:pb-5 text-[22px] sm:text-[26px] md:text-[29px] font-extrabold text-white text-shadow-md"
                >
                  Capabilities
                </MotionH4>

                <MotionH2
                  {...textAnimation}
                  className="pb-2 text-[14px] sm:text-[16px] md:text-[18px] font-bold text-white leading-relaxed text-shadow-md"
                >
                  Ensure your devices are secured. Inquire for our monitoring
                  packages to secure your Home or Business.
                </MotionH2>
              </div>
            </div>

            {/* Right Side Column */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full mt-6 lg:mt-16 lg:w-[30%] lg:px-6 hidden lg:block"
            >
              <div className="p-4 sm:p-6 mb-6 rounded bg-black bg-opacity-50">
                <h2 className="mb-3 text-xl sm:text-2xl font-extrabold">
                  Looking for 24/7 network & device monitoring?
                </h2>
                <p className="mb-4 text-gray-300 font-secondary">
                  Our engineers will be glad to assist with all your monitoring
                  needs. We are always available to help and troubleshoot remote
                  devices and provide extensive reports and life cycle upgrade
                  packages.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-4 sm:px-6 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white group relative"
                >
                  <span className="flex items-center font-semibold">
                    <span>INQUIRE</span>
                    <AiOutlineRight className="h-4 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </span>
                </a>
              </div>
            </MotionDiv>
          </div>

          {/* Services Section  */}
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 px-2 sm:px-4 md:pl-8 lg:pl-20 lg:ml-10 md:ml-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "Device Audit",
                  items: [
                    "All Network Devices",
                    "PC & Mac Agents",
                    "Printer & IoT Monitoring",
                    "Network Services Monitoring",
                    "More",
                  ],
                },
                {
                  title: "Customer Portal",
                  items: [
                    "Ticketing System",
                    "Chat System",
                    "Patch Releases",
                    "Downtime Schedules",
                    "More",
                  ],
                },
                {
                  title: "Alerts",
                  items: [
                    "Device Alerts",
                    "Audit Reports",
                    "Upgrade Paths",
                    "Decommission Reports",
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
                  className="p-4 w-full"
                >
                  <h3 className="text-[18px] sm:text-[20px] md:text-[21px] font-bold text-white font-montserrat shadow-md tracking-tight leading-tight mb-3">
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
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white font-montserrat shadow-md">
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
          <div className="w-full mt-6 sm:mt-8 md:mt-10 lg:hidden bg-[#001420] bg-opacity-50 rounded-lg">
            <div className="p-4 sm:p-5">
              <h2 className="mb-3 text-lg sm:text-xl font-bold text-gray-100 leading-tight">
                Looking for 24/7 network & device monitoring?
              </h2>
              <p className="mb-3 text-gray-300 text-sm leading-relaxed">
                Our engineers will be glad to assist with all your monitoring
                needs. We are always available to help and troubleshoot remote
                devices and provide extensive reports and life cycle upgrade
                packages.
              </p>
              <a
                href="/contact"
                className="inline-block px-4 sm:px-6 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white"
              >
                INQUIRE
              </a>
            </div>

            <div className="flex items-center justify-center p-3">
              <div className="flex items-center w-full max-w-xs mx-auto">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="mx-4 text-sm text-gray-300 font-medium">
                  or
                </span>
                <div className="flex-grow border-t border-gray-600"></div>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <h2 className="mb-3 text-lg sm:text-xl font-bold text-gray-100 leading-tight">
                Let&apos;s start a monitoring conversation.
              </h2>
              <p className="mb-3 text-gray-300 text-sm leading-relaxed">
                Like what you see? Start working with us by providing your needs
                and details
              </p>
              <a
                href="/contact"
                className="inline-block px-4 sm:px-6 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white"
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
            className="hidden lg:block pt-8"
          >
            <a
              href="/contact"
              className="w-full max-w-[1000px] h-10 items-center justify-center flex mx-auto py-2 text-[14px] font-[500] text-white transition-all rounded bg-[#38b2ac] hover:bg-[#38b2ac] group relative"
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
                className="absolute bottom-[-8px] left-0 w-full h-20 pt-7 text-[#38b2ac]"
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
