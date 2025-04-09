import React, { useMemo } from "react";
import { motion } from "framer-motion";

const RandomText = ({
  text = "",
  className = "",
  delaySpread = 1,
  startDelay = 0,
}) => {
  const words = useMemo(() => {
    return text.split(" ").map((word, wordIdx) => {
      return word.split("").map((char, charIdx) => ({
        char,
        id: `${wordIdx}-${charIdx}`,
        delay: startDelay + Math.random() * delaySpread,
      }));
    });
  }, [text, delaySpread]);

  return (
    <div className={`inline-flex flex-wrap gap-x-4 ${className}`}>
      {words.map((letters, wordIdx) => (
        <motion.span key={wordIdx} className="inline-block ">
          {letters.map(({ char, id, delay }) => (
            <motion.span
              key={id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay, duration: 0.3 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </div>
  );
};

export default RandomText;
