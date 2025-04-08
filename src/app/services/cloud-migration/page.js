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
    title: "Auditing & Pen Testing",
    image: "/img/serviceimg/auditing.jpeg",
    path: "/services/auditing-and-pen-testing",
  },

  {
    id: 2,
    title: "Remote Mointoring",
    image: "/img/serviceimg/remote.jpeg",
    path: "/services/remote-monitoring",
    
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
      <section className="relative overflow-hidden pt-8 text-white bg-black">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/serviceimg/bgcloud.jpg"
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
                  className="relative inline-block mt-5 text-[22px] font-medium text-white font-montserrat"
                >
                  <span className="relative z-10 pr-2">
                    RESILIANCE & ELASTICITY DELIVERED
                  </span>

                  <svg
                    className="absolute bottom-[-10px] left-0 w-full h-[60px] text-emerald-500"
                    viewBox="0 0 330 50"
                    fill="none"
                    stroke="#20c18c"
                    strokeWidth="2"
                  >
                    <path
                      d="M-1.4507875095262635 45.4313362827378 C120.04144064665074 41.64620365536448, 243.22365160738528 41.819504476870605, 331.26465785891753 45.252535257245334"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                    <path
                      d="M328.9864328350791 46.76051390161125 C201.45775181295923 46.76492761249716, 73.92623336460787 47.75442949965497, 1.1242837111900366 46.610465054255165"
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
                  Cloud Migration Strategies
                </motion.h1>

                <motion.div {...textAnimation}>
                  <h2 className="pb-4 text-[20px] lg:text-[23px] md:text-[16px] sm:text-[14px] leading-[1.8em] text-white font-semibold font-montserrat">
                    <p className="text-shadow-md">
                      Does your business need a Hybrid Cloud? Are you ready to
                      go full cloud?
                    </p>
                  </h2>
                </motion.div>

                <motion.h3
                  {...textAnimation}
                  className=" pb-3 text-[21px] lg:text-[24px] md:text-[18px] sm:text-[16px] font-bold text-white leading-[1.3em] text-shadow-md my-2 font-montserrat"
                >
                  Let us assist you in migrating your existing infrastructure
                  from a full On-Prem Solution to a hybrid or full cloud-based
                  solutions.
                </motion.h3>

                <motion.h2
                  {...textAnimation}
                  className="mb-9 mt-5 text-[20px] lg:text-[23px] md:text-[18px] sm:text-[16px] font-light text-white leading-[1.8em] drop-shadow-md"
                >
                  We recommend the best cloud providers for your use case
                  scenarios and assist during the migration too! Let us bring
                  your business into a Hyper-scalable model today!
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
                  Ample experience in moving on-prem to cloud-based deployments.
                  From microservices VPS to full IaaS cloud solutions. We will
                  provide great options to tailor each requirement.
                </motion.h2>
              </div>
            </div>

            {/* Right Side Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full px-6 mt-3 lg:w-[34%]  lg:h-full lg:block hidden"
            >
              <div className="p-6 mb-6 rounded bg-black bg-opacity-50">
                <h2 className="mb-3  text-2xl font-extrabold">
                  {" "}
                  Looking for Migration Suggestions?
                </h2>
                <p className="mb-4 mt-4 text-[18px] text-gray-300 font-secondary">
                  Our Team is ready to assist in your business needs to move to
                  the cloud.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white group relative"
                >
                  <span className="flex items-center font-bold ">
                    <span>INQUIRE</span>
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
                  title: "Project Planning",
                  items: [
                    "Architecture",
                    "Services",
                    "Segmentation",
                    "Elasticity",
                    "Other Deliverables",
                    "More",
                  ],
                },
                {
                  title: "Cloud Deployment",
                  items: [
                    "Infrastructure Choice (AWS, Azure, GCP)",
                    "Microservices (Docker, Kubernetes)",
                    "High Availability (HA, Cloudflare, Caching)",
                    "Multi Region (GSLB Load Balancing)",
                    "VPN Connectivity",
                    "More",
                  ],
                },
                {
                  title: "Cloud Security",
                  items: [
                    "SSH Keys",
                    "IP Whitelisting",
                    "WAF Lockdown",
                    "ID Lockdown",
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
              <h2 className="mb-3 p-4 text-3xl font-bold text-gray-100 leading-tight">
                Let&apos;s start a marketing converstion.
              </h2>
              <p className="mb-3 pl-4 pr-4 text-gray-300 text-sm leading-relaxed">
                Our Team is ready to assist in your business needs to move to
                the cloud.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center ml-4 px-6 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white group relative"
              >
                <span className="flex items-center font-bold ">
                  <span>INQUIRE</span>
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
              <h2 className="mb-7 text-3xl pl-5 pr-4 font-bold text-gray-100 leading-tight">
                Let&apos;s Talk Cloud Migration.
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
                className="absolute bottom-[-8px] left-0 w-full h-20 pt-7 text-emerald-500"
                viewBox="0 0 210 40"
                fill="none"
                stroke="#20c18c"
                strokeWidth="2"
              >
                <motion.path
                  d="M0.5871608531693153 31.669048849324856 C70.4950003968655 30.292531853249343, 139.19194704102625 31.631962431228278, 206.95766502162178 33.457158481444885"
                  strokeDasharray="212.096"
                  strokeDashoffset="212.096"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.path
                  d="M209.55185623271373 31.669092434293095 C164.41254146236474 31.267510143104957, 123.75909396651686 33.65930299106921, 0.8367532792294219 33.2660562018582"
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
