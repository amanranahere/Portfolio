import ProjectTemplate from "./ProjectTemplate";
import CurrConvImage from "../../assets/images/currencyConverter.png";
import CurrConvImage02 from "../../assets/images/currencyConverter02.png";
import { motion } from "framer-motion";
import MaskingGrid from "../Animations/MaskingGrid";

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

  const delays = builtWith.map(() => Math.random() * 1);

  return (
    <ProjectTemplate
      projectName="CURRENCY CONVERTER"
      projectTagline="A simple tool to convert between different currencies using real-time exchange rates."
      projectLink="https://amanranahere.github.io/Currency-Converter"
      projectVideo="/videos/currencyConverter_vid.mp4"
      projectYear="2024"
      projectOverview="Currency Converter is a simple static website that allows users to convert different currencies based on their input. Built with HTML, CSS, and JavaScript, the project features a user-friendly interface and real-time conversion using JavaScript logic. By selecting the desired currencies and entering an amount, users can instantly get the exchange rate and converted value."
      projectMaking01="This project was a great way for me to practice working with APIs and handling real-time data in JavaScript. To fetch exchange rates, I used @fawazahmed0/currency-api, which provided up-to-date currency conversion data. This was one of my first experiences making API calls using fetch() and dynamically updating the UI based on the response. I also learned how to handle asynchronous operations in JavaScript while ensuring smooth user interaction."
      projectMaking02="On the frontend, I focused on keeping the design simple and intuitive. I used vanilla CSS for styling and made sure the layout was clean and responsive. One interesting part of the project was integrating country flags using FlagsAPI, which added a nice visual touch to the currency selection. Overall, this project helped me solidify my understanding of API integration, working with external data, and improving JavaScript logic for real-time updates."
      projectCodeLink="https://github.com/amanranahere/Currency-Converter"
      projectBuiltWith={
        <>
          {builtWith.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delays[index], duration: 0.5 }}
              viewport={{ once: true }}
              key={item.name}
              className="border border-[#6b6b6c] flex items-center gap-2 py-1 px-2"
            >
              {item.logo && item.logo}
              <span className="leading-tight">{item.name}</span>
            </motion.div>
          ))}
        </>
      }
      projectImages={
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="md:w-[49.5%] relative">
            <img src={CurrConvImage} alt="Currency converter" />

            <MaskingGrid
              color="#161616"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>

          <div className="md:w-[49.5%] relative">
            <img src={CurrConvImage02} alt="Currency converter 02" />

            <MaskingGrid
              color="#161616"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>
        </div>
      }
    />
  );
}

export default CurrencyConverter;
