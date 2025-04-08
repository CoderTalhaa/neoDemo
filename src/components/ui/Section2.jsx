  import { motion, useInView } from "framer-motion";
  import Link from "next/link";
  import { useRef } from "react";

  const data = [
    {
      name: "Smart Homes",
      path: "/services/smart_homes",
      description:
        "Bringing today's cutting-edge technology right into your home with ease. Internet of Things allows you to control the utilities and features of your home via the Internet.",
    },
    {
      name: "Digital Marketing",
      path: "/services/digital-marketing",
      description:
        "Our Digital Marketing team is ready to take your business to the next level. Businesses of all kinds have seen new opportunities for growth.",
    },
    {
      name: "Auditing & Pen Testing",
      path: "/services/auditing-and-pen-testing",
      description:
        "Are your Devices and Network Compliant? Bring our Pen Testing Expertise to verify Compliance, and deliver a full audit report.",
    },
    {
      name: "Drone Cinematography",
      path: "/services/drone-cinematography",
      description:
        "Ready to Elevate your Content to the Next Level? With so much competition, you must elevate your content to stand out at the forefront of your business.",
    },
    {
      name: "Cloud Migration Strategies",
      path: "/services/cloud-migration",
      description:
        "Does your business need a Hybrid Cloud? Are you ready to go full cloud? Let us assist you in migrating your existing infrastructure.",
    },
  ];

  // Variants for staggered character animation
  const charVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  // Variants for description fade-in
  const descVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  // Child component for each service item
  function ServiceItem({ name, description, isEven, path }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: false, // Animates every time it enters view
      margin: "-100px 0px 0px 0px", // Triggers when fully in viewport
    });

    return (
      <motion.div
        ref={ref}
        className={`h-[100vh] flex flex-col justify-center ${
          isEven ? "md:items-start" : "md:items-end"
        }  `}
      >
        <div className="flex flex-col gap-2 bg-transparent backdrop-blur-md border border-slate-700 shadow-xl p-4 rounded-xl lg:border-0 lg:shadow-none lg:backdrop-blur-none lg:p-0 lg:rounded-none ">
          <Link
            data-hover
            href={path}
            className="~text-2xl/6xl font-primary font-semibold text-text max-w-[570px]"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={charVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </Link>
          <motion.p
            className="~text-base/2xl font-secondary tracking-tight text-white max-w-[500px]"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descVariants}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    );
  }

  export default function Section2({ scrollY }) {
    return (
      <section className="relative mt-14 section2 z-10">
        <div className="container flex flex-col">
          {data.map((d, i) => (
            <ServiceItem
              key={i}
              name={d.name}
              description={d.description}
              isEven={i % 2 === 0}
              path={d.path}
            />
          ))}
        </div>
      </section>
    );
  }
