import React from "react";
import { motion } from "framer-motion";
import useScreenSize from "../../utils/ScreenSize.jsx";

function MaskingGrid({
  color = "#f1f1f1",
  baseRowSize = 30,
  baseColumnSize = 60,
  totalCells = 100,
}) {
  const screenSize = useScreenSize();

  const getSize = (base, step) => {
    if (screenSize === "sm") return base;
    if (screenSize === "md") return base + step;
    return base + step * 2;
  };

  const rowSize = getSize(baseRowSize, 15);
  const columnSize = getSize(baseColumnSize, 30);

  return (
    <div
      className="absolute inset-0 z-10 pointer-events-none grid"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${columnSize}px, 1fr))`,
        gridTemplateRows: `repeat(auto-fit, minmax(${rowSize}px, 1fr))`,
      }}
    >
      {[...Array(totalCells)].map((_, i) => (
        <motion.div
          key={i}
          style={{ backgroundColor: color }}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: Math.random() * 1.5, duration: 0.3 }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  );
}

export default MaskingGrid;
