import React from "react";
import DarkModeToggle from "../DarkModeToggle";

function Footer() {
  return (
    <div className="fixed bottom-0 -z-10 p-6 bg-[#1e1919] flex justify-center items-center">
      <div className="p-6 h-80 lg:p-20 text-[#f1f1f1] w-full text-xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        quibusdam, necessitatibus nemo ipsam sapiente recusandae magni
        praesentium doloremque veritatis id veniam, ipsum odit harum eum aliquid
        facilis, hic vitae error?
      </div>

      <DarkModeToggle />
    </div>
  );
}

export default Footer;
