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
    title: "Cloud Migration Strategies",
    image: "/img/serviceimg/cloud.png",
    path: "/services/cloud-migration",
  },
  {
    id: 2,
    title: "Auditing & Pen Testing",
    image: "/img/serviceimg/auditing.jpeg",
    path: "/services/auditing-and-pen-testing",
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
      <section className="relative overflow-hidden pt-8 text-white bg-black">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/serviceimg/bgnetwork.jpg"
            alt="Background"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="w-full h-full"
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
                  className="relative inline-block mt-5 text-[30px] text-white"
                >
                  <span className="relative z-10 pr-2">SCALE YOUR NETWORK</span>

                  <svg
                    className="absolute bottom-[-5px] left-0 text-emerald-500"
                    style={{
                      width: "100%",
                      height: "40px",
                      overflow: "visible",
                      pointerEvents: "none",
                    }}
                    viewBox="0 0 330 40"
                    fill="none"
                    stroke="#20c18c"
                    strokeWidth="2"
                  >
                    <path
                      d="M0.22737077718822152 35.8423003929006 C103.55308450815535 38.863788085259365, 202.35962496434277 39.056181454784905, 326.614179537502 38.77032914315917"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                    <path
                      d="M327.761994202772 36.38281702867969 C254.23930575096875 35.62600284562649, 178.8093297682477 36.285009502311475, 0.07517523194039684 39.240395424656754"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.h1>

                <motion.h1
                  {...textAnimation}
                  className="pb-4 text-[30px]   text-white leading-[1.3em]  mb-2 mt-10  "
                >
                  Network Infrastructure
                </motion.h1>

                <motion.div {...textAnimation}>
                  <h2 className="pb-4 text-[38px] text-white lg:text-[30px] md:text-[16px] sm:text-[14px] font-bold font-montserrat text-shadow-md ">
                    Our engineers will analyze your current network and advise
                    you on the deployment of infrastructure devices, services,
                    and technologies.
                  </h2>
                </motion.div>

                <motion.h3
                  {...textAnimation}
                  className=" pb-3 text-[21px] lg:text-[23px] md:text-[18px] sm:text-[16px] font-bold text-white leading-[1.3em] text-shadow-md my-2 font-montserrat"
                >
                  Running a successful business requires stable, optimized,
                  reliable, up-to-date technology. With the vast amount of
                  options and the endless upgrades, we recommend the best to
                  suit your needs.
                </motion.h3>

                <motion.h2
                  {...textAnimation}
                  className="mb-9 mt-5 text-[20px] lg:text-[24px] md:text-[18px] sm:text-[16px]  text-white "
                >
                  We are here to provide expertise, from planning to
                  implementation, ensuring the least downtime, greatest
                  scalability, and security-centric deployment. Leave the
                  network to us so you can focus on scaling your business, and
                  leave worries at the door for intruders invading your network.
                </motion.h2>

                <motion.h4
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="pb-5 text-[29px] lg:text-[18px] md:text-[26px] sm:text-[22px] text-white"
                >
                  Capabilities
                </motion.h4>

                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className="pb-2 text-[18px] lg:text-[26px] md:text-[14px] sm:text-[12px] font-bold text-white leading-relaxed text-shadow-md"
                >
                  We have experience securing networks of all sizes. From small
                  doctor&apos;s offices that require HIPPA compliance, to
                  medium-large offices that can be subject to PCI auditing, we
                  are here to ensure you are fully in compliance at the network
                  layer.
                </motion.h2>
                <p className="italic text-xl">
                  (Consultations highly recommended *)
                </p>
              </div>
            </div>

            {/* Right Side Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full  px-6  mt-1 lg:w-[34%]   lg:block hidden"
            >
              <div className=" rounded p-6 bg-black/40 h-[330px] bg-opacity-50">
                <h2 className=" text-2xl font-bold text-white">
                  {" "}
                  Looking for a network overhaul?
                </h2>
                <p className="mb-10 mt-8 text-white font-secondary">
                  Our team has implemented and optimized networks of all shapes
                  and sizes to ensure business needs and deadlines are met.
                </p>
                <a
                  href="#"
                  className=" py-3  w-[260px] flex items-center justify-center text-white transition-all duration-300 rounded border-2 border-white group relative 
     hover:bg-white/15 hover:border-none hover:w-[280px]"
                >
                  <span className="flex justify-center items-center font-bold ">
                    <span>NETWORK PORTFOLIO</span>
                    <AiOutlineRight className="h-[20px] font-semibold w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Services Section */}
          <div className="md:pl-20 md:ml-6 md:pt-6 lg:mt-4 lg:mb-5">
            <div className="grid grid-cols-1 md:flex md:gap-16">
              {[
                {
                  title: "Infrastructure Planning",
                  items: [
                    "Device Mapping",
                    "Floorplan Modeling",
                    "Wi-Fi Planning",
                    "Firewall Planning",
                    "Network Switch Planning",
                    "Cable Routing",
                  ],
                },
                {
                  title: "Implementation",
                  items: [
                    "Firewall Implementation",
                    "Switch Configuration",
                    "Wi-Fi Deployment",
                    "VLAN Implementation",
                    "QOS",
                    "VOIP",
                  ],
                },
                {
                  title: "Network Lockdown",
                  items: [
                    "Guest Network Access",
                    "Admin Network",
                    "DMZ Configuration",
                    "Captive Portal",
                    "Remote VPN",
                    "LDAPS",
                    "More",
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="p-4 w-full md:w-[250px]"
                >
                  <h3 className="text-[18px] text-white font-bold  tracking-tight leading-tight mb-3">
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
                        <p className="text-[16px] text-white">{item}</p>
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
              <h2 className="mb-3 p-4 text-lg font-bold text-white leading-tight">
                Looking for a network overhaul?
              </h2>
              <p className="mb-3 pl-4 pr-4 text-white  text-sm leading-relaxed">
                Our team has implemented and optimized networks of all shapes
                and sizes to ensure business needs and deadlines are met.
              </p>
              <a
                href="#"
                className=" py-3 mt-8 ml-3  w-[240px] flex items-center justify-center text-white transition-all duration-300 rounded border-2 border-[#9fa39f] group relative 
     hover:bg-white/15 hover:border-[#444844]  hover:w-[280px]"
              >
                <span className="flex justify-center items-center font-bold ">
                  <span className="text-white">NETWORK PORTFOLIO</span>
                  <AiOutlineRight className="h-[20px] font-semibold w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              <h2 className="mb-3 text-lg pl-5 pr-4 font-bold text-white leading-tight">
                Let&apos;s optimize your network
              </h2>
              <p className="mb-3 text-white pl-5 text-sm leading-relaxed">
                Like what you see? Start working with us by providing your needs
                and details.
              </p>
              <a
                href="/contact"
                className=" py-2 ml-4 mt-5 w-[140px] flex items-center justify-center text-[#9fa39f] transition-all duration-300 rounded border-2 border-[#9fa39f] group relative 
     hover:bg-white/15 hover:border-[#444844] hover:w-[180px]"
              >
                <span className="flex justify-center items-center font-semibold ">
                  <span className="pl-5 text-white">CONTACT US</span>
                  <AiOutlineRight className="h-[20px] font-semibold w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </a>
            </div>
          </div>

          {/* Desktop Contact Button */}
          <div className="lg:block hidden  ml-28">
            <a
              href="/contact"
              className=" py-3 w-[140px] flex items-center justify-center text-white transition-all duration-300 rounded border-2 border-white group relative 
    bg-white/10 hover:bg-white/15   hover:border-none hover:w-[180px]"
            >
              <span className="flex justify-center items-center font-semibold ">
                <span className="pl-5 ">Contact Us</span>
                <AiOutlineRight className="h-[20px] font-semibold w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </a>
          </div>
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
