
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { data } from "@/data/data";

export default function MobileNav() {
  return (
    <nav className="flex items-center justify-between md:hidden px-2 relative">
      <Link href='/'>
      <div className="relative w-[100px]">
        <Image 
          alt="logo" 
          src={"/img/logo.png"} 
          width={100} 
          height={100} 
          priority
        />
      </div>
      </Link>
      <MobileMenu />
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [open]);

  return (
    <>
      <button 
        onClick={() => setOpen(!open)}
        className="z-50 p-2"
        aria-label="Mobile menu"
      >
        <Menu className="text-white" size={32} />
      </button>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="main-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-screen bg-[#141414] flex flex-col items-center justify-center text-white z-[9999]"
          >
      

            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 p-2"
              aria-label="Close menu"
            >
              <X className="text-white" size={32} />
            </button>

            <ul className="text-lg font-medium space-y-6 text-center">
              <li>
                <Link
                  href="/"
                  className={`block px-4 py-2 transition-colors ${
                    pathname === "/" ? "text-teal-300" : "hover:text-gray-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block px-4 py-2 transition-colors ${
                    pathname === "/about" ? "text-teal-300" : "hover:text-gray-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowServices(!showServices)}
                  className={`px-4 py-2 ${
                    pathname.startsWith("/services") 
                      ? "text-teal-300" 
                      : "hover:text-gray-300"
                  }`}
                >
                  Services
                </button>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block px-4 py-2 transition-colors ${
                    pathname === "/contact" ? "text-teal-300" : "hover:text-gray-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <AnimatePresence>
              {showServices && (
                <motion.div
                  key="services-menu"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute inset-0 bg-[#141414] pt-20 pb-10 overflow-y-auto"
                >
                  <div className="px-4">
                    <h2 className="text-2xl font-semibold text-teal-300 mb-6">
                      Our Services
                    </h2>
                    <div className="grid gap-4">
                      {data.map((service) => (
                        <Link
                          key={service.name}
                          href={service.path}
                          onClick={() => {
                            setShowServices(false);
                            setOpen(false);
                          }}
                          className="block p-4 bg-[#001420] rounded-lg hover:bg-[#002535] transition"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-teal-300">{service.icon}</span>
                            <h3 className="font-medium">{service.name}</h3>
                          </div>
                          <p className="text-sm text-gray-400">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}