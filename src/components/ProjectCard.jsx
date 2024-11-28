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
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-xl font-bold mb-2 text-teal-400">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">
        {category} | {duration}
      </p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-300">
          Technologies Used:
        </h4>
        <p className="text-sm text-gray-300">{technology}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-300">Contribution:</h4>
        <p className="text-sm text-gray-300">{contribution}</p>
      </div>
    </motion.div>
  );
}
