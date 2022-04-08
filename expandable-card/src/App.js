import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [showText, setShowText] = useState(false);

  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setShowText(!showText)}
      className="card"
      style={{
        borderRadius: "1rem",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
      }}
    >
      <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
      {showText && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="card-text"
        >
          <motion.p className="card-text-one">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis cum corporis at iusto provident ratione harum impedit.
            Commodi, ut qui?
          </motion.p>
          <motion.p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            nihil.
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}
