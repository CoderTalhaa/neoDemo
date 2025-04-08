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
    title: "Web Design and Hosting",
    image: "/img/serviceimg/webdesign.webp",
    path: "/services/website-design-and-hosting",
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
      <section className="relative overflow-hidden pt-8 text-white bg-black">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/serviceimg/bgauditing.jpg"
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
                <MotionH1
                  {...textAnimation}
                  className="relative inline-block mt-5 text-[30px] text-white"
                >
                  <span className="relative z-10 pr-2">
                    COMPLIANCE SIMPLIFIED
                  </span>
                  <svg
                    className="absolute bottom-[-10px] left-0 text-emerald-500"
                    style={{
                      width: "100%",
                      height: "70px",
                    }}
                    viewBox="0 0 210 40"
                    fill="none"
                    stroke="#20c18c"
                    strokeWidth="2"
                  >
                    <path
                      d="M-0.40488177900627903 38.957866487828106 C77.89434224715974 36.424522708148594, 160.06540869933815 37.55047628751133, 351.89434202074364 36.60521078555538"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                    <path
                      d="M352.7535829531686 38.800345643166175 C216.70154140339062 35.72595543169615, 82.94478999604122 36.663951510096815, -0.9818106419715175 38.498841352173656"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                  </svg>
                </MotionH1>

                <MotionH1
                  {...textAnimation}
                  className="pb-4 text-[28px] text-white font-semibold leading-[1.3em] mb-2 mt-10"
                >
                  Auditing & Pen Testing
                </MotionH1>

                <MotionDiv {...textAnimation}>
                  <h2 className="pb-4 text-[20px] text-white lg:text-[23px] md:text-[16px] sm:text-[14px] leading-[1.8em] font-semibold font-montserrat">
                    <p className="text-shadow-md font-bold">
                      Are your Devices and Network Complaint? Bring our Pen
                      Testing Expertise to verify Compliance, and deliver a full
                      audit report.
                    </p>
                  </h2>
                </MotionDiv>

                <MotionH3
                  {...textAnimation}
                  className="pb-3 text-[21px] lg:text-[23px] md:text-[18px] sm:text-[16px] font-semibold text-white leading-[1.3em] text-shadow-md my-2 font-montserrat"
                >
                  95% of businesses have no idea their network has the ability
                  to be compromised in a matter of minutes. Let us deliver a
                  full audit and pen test your network and devices to ensure you
                  can protect your data.
                </MotionH3>

                <MotionH2
                  {...textAnimation}
                  className="mb-9 mt-5 text-[20px] lg:text-[24px] md:text-[18px] sm:text-[16px] text-white"
                >
                  Our Pen Testers are certified to deliver results from ensuring
                  CVEs are not present, to recommending solutions for weak
                  encryption, password rotation, and more.
                  <p className="text-white text-sm italic">
                    (Results may vary *)
                  </p>
                </MotionH2>

                <MotionH4
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="pb-5 text-[29px] lg:text-[18px] md:text-[26px] sm:text-[22px] text-white"
                >
                  Capabilities
                </MotionH4>

                <MotionH2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className="pb-2 text-[18px] lg:text-[26px] md:text-[14px] sm:text-[12px] font-bold text-white leading-relaxed text-shadow-md"
                >
                  Full open source pen testing delivered. Need more? We can
                  deliver Qualys Scans too.
                </MotionH2>
              </div>
            </div>

            {/* Right Side Column */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full px-10  mt-1 lg:w-[38%] lg:block hidden"
            >
              <div className="mb-6 rounded pl-5 pt-4 pb-4 bg-black/40 h-[230px] bg-opacity-50">
                <h2 className="mb-3 text-2xl font-bold text-white">
                  Looking for Audit or Pen Test Reports?
                </h2>
                <p className="mb-4 mt-4 text-white font-secondary">
                  Our Team is ready to deliver an up-to-date report on your
                  current infrastructure condition. On-Prem, Cloud, and more, we
                  handle it all.
                </p>
                <a
                  href="/contact"
                  className="py-2 w-[150px] ml-5 flex items-center justify-center bg-[#009999] text-white transition-all duration-300 rounded  group relative "
                >
                  <span className="flex justify-center items-center font-semibold">
                    <span className="pl-5">INQUIRE</span>
                    <AiOutlineRight className="h-[20px] font-semibold w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                </a>
              </div>
            </MotionDiv>
          </div>

          {/* Services Section */}
          <div className="md:pl-20 md:ml-6 md:pt-6 lg:mt-4 lg:mb-5">
            <div className="grid grid-cols-1 md:flex md:gap-6">
              {[
                {
                  title: "Auditing",
                  items: [
                    "Network",
                    "PCs",
                    "Servers",
                    "Wi-Fi",
                    "Cloud Infrastructure",
                    "Hybrid Cloud",
                    "More",
                  ],
                },
                {
                  title: "Pen Testing",
                  items: [
                    "Active",
                    "Passive",
                    "Dictionary",
                    "Kali",
                    "Network Sniffing",
                    "Exploit Exfiltration",
                    "More",
                  ],
                },
                {
                  title: "Reports",
                  items: [
                    "Generated Audits",
                    "Post Pen-Test",
                    "Remediations",
                    "Vulnerability Discovery",
                    "Compliance",
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
                  <h3 className="text-[20px] font-bold  text-white font-montserrat  tracking-tight leading-tight mb-3">
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
                        <p className="text-[16px] text-white font-montserrat shadow-md">
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
              <h2 className="mb-3 p-4 text-lg font-bold text-white leading-tight">
                Looking for Audit or Pen Test Reports?
              </h2>
              <p className="mb-3 pl-4 pr-4 text-white font-semibold text-sm leading-relaxed">
                Our Team is ready to deliver an up-to-date report on your
                current infrastructure condition. On-Prem, Cloud, and more, we
                handle it all.
              </p>
              <a
                href="/contact"
                className=" py-2 ml-4  w-[100px] flex items-center justify-center text-white transition-all duration-300 rounded border-2 border-white group relative 
     hover:bg-white/15 hover:border-[#444844] hover:w-[180px]"
              >
                <span className="flex justify-center items-center font-semibold ">
                  <span className="pl-5 text-white">INQUIRE</span>
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
                Let&apos;s start a Pen Testing conversation.
              </h2>
              <p className="mb-3 text-white pl-5 text-sm leading-relaxed">
                Like what you see? Start working with us by providing your needs
                and details.
              </p>
              <a
                href="/contact"
                className=" py-2 ml-4  w-[140px] flex items-center justify-center text-white transition-all duration-300 rounded border-2 border-white group relative 
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
              className=" py-3 w-[140px] flex items-center justify-center text-white transition-all duration-300 rounded bg-[#38b2ac] group relative 
"
            >
              <span className="flex justify-center items-center font-semibold ">
                <span className="pl-5">Contact Us</span>
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
