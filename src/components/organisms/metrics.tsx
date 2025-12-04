"use client";

import { LuBookMarked, LuCoins } from "react-icons/lu";
import { CardSection } from "../atoms/card-section";
import { SectionContainer } from "../atoms/section-container";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";

const metricsData = [
  {
    icon: <LuCoins className="text-coin" />,
    title: "Bookis",
    value: 100,
  },
  {
    icon: <FaArrowTrendUp className="text-arrow" />,
    title: "Reputación",
    value: 10,
  },
  {
    icon: <LuBookMarked className="text-book-spine"/>,
    title: "Libros Subidos",
    value: 25,    
  },  
  {
    icon: <GoPeople className="text-people" />,
    title: "Intercambios",
    value: 75,    
  },  
];


export const Metrics = () => {
  return (
    <SectionContainer classProps="mt-8 px-0!">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metricsData.map((metric, index) => (
          <CardSection key={index} classProps="flex items-center gap-2 sm:gap-4  mx-0">
            <div className="text-xl">{metric.icon}</div>
            <div>
              <p className="text-xl font-bold">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.title}</p>
            </div>
          </CardSection>
        ))}
      </div>
    </SectionContainer>
  );
};
