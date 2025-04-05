import React, { useState, useEffect } from "react";

function getCurrentTime() {
  const now = new Date();

  return now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function getDay() {
  const now = new Date();

  return now.toLocaleDateString("en-US", {
    weekday: "short",
  });
}

const Time = () => {
  const [time, setTime] = useState(getCurrentTime());
  const [day, setDay] = useState(getDay());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
      setDay(getDay());
    }, 1000);

    setTime(getCurrentTime());
    setDay(getDay());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="uppercase">
      {time}, {day}
    </div>
  );
};

export default Time;
