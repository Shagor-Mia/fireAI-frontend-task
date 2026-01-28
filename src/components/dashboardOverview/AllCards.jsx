import React from "react";

import call from "../../assets/Container1.png";
import ai from "../../assets/Container2.png";
import warm from "../../assets/Container3.png";
import appointment from "../../assets/Container4.png";
import missed from "../../assets/Container5.png";
import duration from "../../assets/Container6.png";

import Card from "./Card";
const AllCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Total Calls Today",
      value: 127,
      percent: "+12%",
      icon: call,
    },
    {
      id: 2,
      title: "AI-Handled Calls",
      value: 98,
      percent: "+77%",
      icon: ai,
    },
    {
      id: 3,
      title: "Warm Transfer",
      value: 23,
      percent: "+18%",
      icon: warm,
    },
    {
      id: 4,
      title: "Appointments Booked",
      value: 34,
      percent: "8%",
      icon: appointment,
    },
    {
      id: 5,
      title: "Missed/Failed Calls",
      value: 6,
      percent: "-3%",
      icon: missed,
    },
    {
      id: 6,
      title: "Avg Call Duration",
      value: "3:42",
      percent: "+15%",
      icon: duration,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
      {cardData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default AllCards;
