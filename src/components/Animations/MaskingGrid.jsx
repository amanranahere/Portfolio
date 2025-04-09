import React from "react";
import { delay, motion } from "framer-motion";
import useScreenSize from "../../utils/ScreenSize.jsx";

function MaskingGrid({
  color = "#f1f1f1",
  rowSizes = { sm: 30, md: 45, lg: 60 },
  columnSizes = { sm: 60, md: 90, lg: 120 },
  totalCells = 100,
  delaySpread = 1,
  startDelay = 0,
}) {
  const screenSize = useScreenSize();

  const rowSize = rowSizes[screenSize] || rowSizes.md;
  const columnSize = columnSizes[screenSize] || columnSizes.md;

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
          transition={{
            delay: startDelay + Math.random() * delaySpread,
            duration: 0.3,
          }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  );
}

export default MaskingGrid;
