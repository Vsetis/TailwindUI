import { motion } from "framer-motion";
import { useState } from "react";

function Folder({
  category,
  count,
  img,
}: {
  category: string;
  count: number;
  img?: string | null | undefined;
}) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group cursor-pointer rounded border border-white/10"
      >
        <div className="relative flex items-center justify-center overflow-hidden before:absolute before:z-[5] before:h-full before:w-full  before:bg-black/0  group-hover:before:bg-black/50">
          <p
            className={`${
              hover ? "text-white" : "text-transparent"
            } absolute z-[6] text-xl font-semibold`}
          >
            {category}
          </p>
          {img && (
            <img
              className="z-[-1] transition-all group-hover:scale-110"
              src={img}
              alt={img}
            />
          )}
        </div>
        <div className="bg-gradient-to-r from-white/0 to-white/5 p-4">
          <h3 className="text-xl">{category}</h3>
          <p className="text-white/60">{count} components</p>
        </div>
      </div>
    </>
  );
}

export default function Categories({
  title,
  count,
  categories,
}: {
  title: string;
  count: number;
  categories: { title: string; count: number; img?: string }[];
}) {
  return (
    <>
      <motion.div className="mb-16">
        <div className="mb-8 flex items-center gap-8">
          <h2 className=" text-3xl leading-none">{title}</h2>
          <p className=" text-white/60">{count} components</p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {categories.map((category) => (
            <Folder
              key={category.title}
              category={category.title}
              count={category.count}
              img={category.img}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
