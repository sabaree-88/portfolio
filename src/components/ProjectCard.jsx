import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  category,
  duration,
  technology,
  contribution,
}) {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-teal-700 via-slate-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Animated Background Accent */}
      <motion.div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-teal-500/30 blur-xl"
        animate={{
          y: [0, 10, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          y: [0, 15, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-sm text-teal-300 mb-4">
          {category} | {duration}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300">Technologies:</h4>
          <p className="text-sm text-gray-100">{technology}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-300">Contribution:</h4>
          <p className="text-sm text-gray-100">{contribution}</p>
        </div>
      </div>
    </motion.div>
  );
}
