import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default DarkModeToggle;
