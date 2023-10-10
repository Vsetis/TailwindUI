import { motion } from "framer-motion";
import { variants } from "~/constants/constants";

import {
  IconBrandHtml5,
  IconBrandNextjs,
  IconBrandVue,
} from "@tabler/icons-react";

const gradient = {
  borderRadius: "0 0 100% 100%",
};

export default function Hero() {
  return (
    <>
      <div
        className="absolute left-0 top-0 z-[-1] h-[40%] w-full bg-[#16213e] blur-[100px]"
        style={gradient}
      />
      <div className="container mx-auto">
        <motion.h1
          variants={variants}
          transition={{ duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-[60%] bg-gradient-to-r from-white to-white/60 bg-clip-text pb-1 text-center text-6xl font-semibold  leading-tight tracking-tight text-transparent"
        >
          Find modern UI components for your website or web app
        </motion.h1>
        <motion.p
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-[40%] text-center text-[18px] text-white/80"
        >
          Visually-stunning, easy to customize TailwindCSS based components
          built with React and Next.js. The perfect starting point for your next
          project.
        </motion.p>

        <motion.h2
          variants={variants}
          transition={{ duration: 0.5, delay: 0.4 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 text-center text-4xl font-semibold"
        >
          Designed for
        </motion.h2>
        <div className="mb-16 flex items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <IconBrandHtml5 className="text-white/60" size={48} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <IconBrandNextjs className="text-white/80" size={48} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-20%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <IconBrandVue className="text-white/60" size={48} />
          </motion.div>
        </div>
      </div>
    </>
  );
}
