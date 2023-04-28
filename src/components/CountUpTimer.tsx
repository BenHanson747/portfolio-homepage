import React, { useState, useEffect } from "react";
import ClientData from "./data/ClientData";
import { ClientDataType } from "./types/types";
import { SectionContainer } from "./styles/SectionContainer";
import { SectionTitle } from "./styles/SectionTitle";

const startDate = ClientData.reduce((earliest: ClientDataType | null, current) => {
  if (!earliest || new Date(current.startDate) < new Date(earliest.startDate)) {
    return current;
  }
  return earliest;
}, null)?.startDate;

const endDate: Date = new Date();

const CountUpTimer = () => {
    const diffMs = endDate.getTime() - new Date(startDate!).getTime();

    const years = Math.floor(diffMs / 31536000000);
    const days = Math.floor((diffMs % 31536000000) / 86400000);
    const hours = Math.floor(((diffMs % 31536000000) % 86400000) / 3600000);
    const minutes = Math.floor((((diffMs % 31536000000) % 86400000) % 3600000) / 60000);
    const seconds = Math.floor(((((diffMs % 31536000000) % 86400000) % 3600000) % 60000) / 1000);

  const [timeElapsed, setTimeElapsed] = useState({years, days, hours, minutes, seconds });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prevTimeElapsed) => {
        const newSeconds = prevTimeElapsed.seconds + 1;
        const newMinutes = prevTimeElapsed.minutes + Math.floor(newSeconds / 60);
        const newHours = prevTimeElapsed.hours + Math.floor(newMinutes / 60);
        const newDays = prevTimeElapsed.days + Math.floor(newHours / 24);
        const newYears = prevTimeElapsed.years + Math.floor(newDays / 365);

        return {
          years: newYears,   
          days: newDays,
          hours: newHours % 24,
          minutes: newMinutes % 60, 
          seconds: newSeconds % 60, 
        };
      });
    }, 1000); 

    return () => clearInterval(interval);
  }, []); 


  return (
    <>
   <SectionContainer>
      <SectionTitle>Coding Professionaly for:</SectionTitle>
         <p>{timeElapsed.years} year {timeElapsed.days} days {timeElapsed.hours} hours {timeElapsed.minutes}m {timeElapsed.seconds}s and counting!</p>
    </SectionContainer>
    </>
  );
};

export default CountUpTimer;
