import React, { useMemo } from "react";
import { motion } from "framer-motion";

const RandomText = ({ text = "", className = "" }) => {
  const formattedText = text.replace(/ /g, "\u00A0");

  const letters = useMemo(() => {
    return formattedText.split("").map((char, i) => ({
      char,
      id: i,
    }));
  }, [text]);

  return (
    <div className={`inline-flex flex-wrap ${className}`}>
      {letters.map(({ char, id }) => (
        <motion.span
          key={id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: Math.random() * 1, duration: 0.3 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default RandomText;
