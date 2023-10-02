import {
  IconBrandHtml5,
  IconBrandReact,
  IconBrandVue,
} from "@tabler/icons-react";
import Categories from "~/components/Components/Categories";
import { motion } from "framer-motion";
import { variants } from "~/constants/constants";

const gradient = {
  borderRadius: "0 0 100% 100%",
};

const categories = [
  {
    title: "Application UI",
    categories: [
      { title: "Navbars", count: 8, img: "/navbars.png" },
      { title: "Sidebars", count: 4, img: "/sidebar.png" },
      { title: "Footers", count: 2, img: "/footers.png" },
    ],
  },
  {
    title: "Page Selections",
    categories: [
      { title: "Hero headers", count: 1, img: "/hero.png" },
      { title: "Feature sections", count: 1, img: "/features.png" },
    ],
  },
];

const ease = [1, 0.71, 0.2, 1.01];

export default function ComponentsPage() {
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
            <IconBrandReact className="text-white/80" size={48} />
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
      <div className="relative mt-32">
        <div className=" flex flex-col items-center bg-gradient-to-t from-white/0 to-sky-900/5">
          <div className="mb-32 h-[1px] w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
          <div className="container relative mx-auto ">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...ease, duration: 0.5 }}
              viewport={{ amount: 0.8 }}
              className="absolute left-32 top-1/3 z-[-1] h-[40%] w-[40%] bg-sky-700/50 blur-[100px]"
            />
            {categories.map((category) => (
              <Categories
                key={category.title}
                title={category.title}
                count={category.categories
                  .map((c) => c.count)
                  .reduce((a, b) => a + b)}
                categories={category.categories}
              ></Categories>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

ComponentsPage.layout = "app";
