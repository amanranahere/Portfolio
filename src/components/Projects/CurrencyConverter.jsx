import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import CurrencyConverterVideo from "../../assets/videos/CurrencyConverterVideo.mp4";
import CurrConvImage from "../../assets/images/currencyConverter.png";
import CurrConvImage02 from "../../assets/images/currencyConverter02.png";

import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

function CurrencyConverter() {
  const builtWith = [
    {
      name: "HTML",
      logo: <SiHtml5 className="w-6 h-6 leading-tight" />,
    },
    {
      name: "CSS",
      logo: <SiCss3 className="w-6 h-6" />,
    },
    {
      name: "JavaScript",
      logo: <SiJavascript className="w-6 h-6" />,
    },
  ];

  return (
    <ProjectTemplate
      projectName="CURRENCY CONVERTER"
      projectTagline="A simple tool to convert between different currencies using real-time exchange rates."
      projectLink="https://amanranahere.github.io/Currency-Converter"
      projectVideo={CurrencyConverterVideo}
      projectYear="2024"
      projectOverview="Currency Converter is a simple static website that allows users to convert different currencies based on their input. Built with HTML, CSS, and JavaScript, the project features a user-friendly interface and real-time conversion using JavaScript logic. By selecting the desired currencies and entering an amount, users can instantly get the exchange rate and converted value."
      projectMaking="This project was a great way for me to practice working with APIs and handling real-time data in JavaScript. To fetch exchange rates, I used @fawazahmed0/currency-api, which provided up-to-date currency conversion data. This was one of my first experiences making API calls using fetch() and dynamically updating the UI based on the response. I also learned how to handle asynchronous operations in JavaScript while ensuring smooth user interaction.&nbsp;&nbsp;&nbsp;&nbsp;
      On the frontend, I focused on keeping the design simple and intuitive. I used vanilla CSS for styling and made sure the layout was clean and responsive. One interesting part of the project was integrating country flags using FlagsAPI, which added a nice visual touch to the currency selection. Overall, this project helped me solidify my understanding of API integration, working with external data, and improving JavaScript logic for real-time updates."
      projectCodeLink="https://github.com/amanranahere/Currency-Converter"
      projectBuiltWith={
        <>
          {builtWith.map((item) => (
            <div
              key={item.name}
              className="border border-black/20 flex items-center gap-2 py-1 px-2"
            >
              {item.logo && item.logo}
              <span className="leading-tight">{item.name}</span>
            </div>
          ))}
        </>
      }
      projectImages={
        <div className="">
          <div className="md:w-[49.5%] flex flex-col md:flex-row justify-between gap-4">
            <img src={CurrConvImage} alt="Currency converter" />
            <img src={CurrConvImage02} alt="Currency converter 02" />
          </div>
        </div>
      }
    />
  );
}

export default CurrencyConverter;
