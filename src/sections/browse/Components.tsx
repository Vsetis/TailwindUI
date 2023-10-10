import { motion } from "framer-motion";

import Categories from "~/components/Components/Categories";

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

export default function Components() {
  return (
    <>
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
