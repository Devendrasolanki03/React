import { motion } from "framer-motion";

const benefits = [
  {
    title: "Boosts Energy",
    desc: "Enhances mitochondrial function for sustained energy.",
    icon: "⚡",
  },
  {
    title: "Improves Vitality",
    desc: "Supports stamina, strength, and overall wellness.",
    icon: "💪",
  },
  {
    title: "Enhances Focus",
    desc: "Improves mental clarity and cognitive performance.",
    icon: "🧠",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-green-700">Rivedic</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scientifically backed benefits rooted in ancient Ayurveda.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
