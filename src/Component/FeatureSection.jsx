import { motion } from "framer-motion";
const FeatureSection = () => {
  const features = [
    { title: "Real-Time Sync", desc: "Instant updates with MongoDB & WebSockets" },
    { title: "Drag & Drop", desc: "Seamless task movement between categories" },
    { title: "Mobile Friendly", desc: "Manage tasks from anywhere easily" },
  ];

  return (
    <div className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default FeatureSection;