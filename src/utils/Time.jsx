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
    weekday: "long",
  });
}

const Time = () => {
  const [time, setTime] = useState(getCurrentTime());
  const [day, setDay] = useState(getDay());
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
      setDay(getDay());
    }, 1000);

    const colonBlink = setInterval(() => {
      setShowColon((prev) => !prev);
    }, 500);

    setTime(getCurrentTime());
    setDay(getDay());

    return () => {
      clearInterval(timer);
      clearInterval(colonBlink);
    };
  }, []);

  const [hour, minute] = time.split(":");

  return (
    <span className="uppercase">
      {hour}
      <span style={{ opacity: showColon ? 1 : 0, transition: "opacity 0.2s" }}>
        :
      </span>
      {minute}, {day}
    </span>
  );
};

export default Time;
