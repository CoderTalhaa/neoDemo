"use client";
import { Instagram, Linkedin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { data } from "@/data/data";

export default function Footer() {
  const [openServices, setOpenServices] = useState(false);
  const servicesRef = useRef(null);
  const itemsToShow = 4;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setOpenServices(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#001e30c7] relative z-[999] flex flex-col lg:flex-row justify-between p-3 items-start lg:items-center gap-2">
      <Link href='/'>
      <div className="relative w-[140px]">
        <Image alt="logo" src={"/img/logo.png"} width={100} height={100} />
      </div>
      </Link>

      <ul className="flex flex-wrap gap-4 md:gap-8 font-thin font-secondary relative">
        <li>
          <Link href="/" className="hover:text-teal-300 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-teal-300 transition-colors">
            About
          </Link>
        </li>
        <li
          className="relative"
          ref={servicesRef}
          onMouseEnter={() => setOpenServices(true)}
          onMouseLeave={() => setOpenServices(false)}
        >
          <button
            className="flex items-center gap-1 hover:text-teal-300 transition-colors"
            onClick={() => setOpenServices(!openServices)}
          >
            Services
            <IoIosArrowDown
              className={`transform transition-transform ${
                openServices ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {openServices && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute bottom-full left-0 bg-[#f7f5f5] rounded-lg p-4 min-w-[300px] shadow-lg mt-2 text-black "
              >
                <h3 className="text-lg font-semibold mb-2">Our Services</h3>
                <div className="max-h-[250px] overflow-y-auto">
                  <ul className="grid gap-2 pr-2">
                    {data.map((service, index) => (
                      <motion.li
                        key={service.name}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={`${
                          index >= itemsToShow ? "opacity-70" : ""
                        } hover:bg-white hover:shadow-md hover:shadow-teal-100 transition-all duration-300 ease-in-out rounded-lg cursor-pointer`}
                      >
                        <Link
                          href={service.path}
                          className="block p-2 hover:bg-gray-100 rounded transition-colors"
                          onClick={() => setOpenServices(false)}
                        >
                          <div className="flex items-center gap-2">
                            {service.icon}
                            <span>{service.name}</span>
                          </div>

                          <p className="text-sm text-gray-600 mt-1">
                            {service.description}
                          </p>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        <li>
          <Link
            href="/contact"
            className="hover:text-teal-300 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>

      <ul className="flex gap-3 pt-3 lg:pt-0">
        <li className="p-2 rounded-full bg-primary hover:bg-teal-300 transition-colors">
          <Link
            href="https://www.linkedin.com/company/88644480/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={15} />
          </Link>
        </li>
        <li className="p-2 rounded-full bg-primary hover:bg-teal-300 transition-colors">
          <Link
            href="https://www.instagram.com/neotechdevs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={15} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
