import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { variants } from "~/constants/constants";

const gradient = {
  background: "rgb(22, 33, 62)",
  borderRadius: "0 0 100% 100%",
};

export default function Home() {
  return (
    <>
      <div
        className="absolute left-0 top-0 z-[-1] h-[40%] w-full blur-[100px]"
        style={gradient}
      />

      <motion.h1
        variants={variants}
        transition={{ duration: 0.5 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto mb-6 max-w-[650px] bg-gradient-to-r from-white to-white/60 bg-clip-text text-center text-7xl font-semibold leading-tight tracking-tight text-transparent"
      >
        Module UI a way to build websites faster
      </motion.h1>
      <motion.p
        variants={variants}
        transition={{ duration: 0.5, delay: 0.4 }}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-[550px] text-center text-[18px]  text-white/80"
      >
        Explore Tailwind based library of UI components and build breathtaking
        websites or web apps.
      </motion.p>
      <motion.div
        variants={variants}
        transition={{ duration: 0.5, delay: 0.8 }}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="mx-auto flex w-max items-center gap-12"
      >
        <Link
          className="rounded bg-[#3a62c6d5] px-6 py-2 font-semibold text-white transition-all hover:bg-[#3A61C6]"
          href="/components"
        >
          Explore
        </Link>
        <Link
          className="group flex items-center gap-2 font-semibold  transition-all hover:text-white/80"
          href="/docs"
        >
          Get Started{" "}
          <IconArrowNarrowRight className="transition-all group-hover:translate-x-2" />
        </Link>
      </motion.div>
    </>
  );
}

Home.layout = "app";
