import { motion } from "framer-motion";
export default function Card({
  title,
  icon,
  body,
  variants,
}: {
  title: string;
  icon: React.ReactNode;
  body: string;
  variants: { delay: number; x: string };
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: variants.x }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: variants.delay }}
        viewport={{ once: true }}
        className=" w-full rounded border border-white/5 bg-gradient-to-r from-white/0 to-white/5 p-4 shadow-inner shadow-white/0 transition-all hover:shadow-white/5"
      >
        <div className="mb-4"> {icon}</div>
        <h3 className="mb-1 text-lg font-semibold text-white/80">{title}</h3>
        <p className="text-white/60">{body}</p>
      </motion.div>
    </>
  );
}
