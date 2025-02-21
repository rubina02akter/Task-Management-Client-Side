import Lottie from "lottie-react";
import taskAnimation from "../../src/assets/lottifi/Animation - 1740003375266.json";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center py-24 bg-[#3C7160] text-white">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Streamline Your Workflow Effortlessly
      </motion.h1>
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Organize tasks with a seamless drag-and-drop experience.
      </motion.p>
     
      <div className="w-72 mt-8">
        <Lottie animationData={taskAnimation} loop autoplay />
      </div>
    </div>
  );
};

export default HeroSection;