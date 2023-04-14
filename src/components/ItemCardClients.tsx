import ClientData from "./data/ClientData";
import { ClientData as ClientDataProps } from "./types/types";
import ClientCardText from "./ClientCardText";
import React, { lazy, Suspense } from "react";

const calculateTenureDates = (startDate: Date, endDate: Date) => {
  return `${startDate.toLocaleString("default", {
    month: "short",
  })} ${startDate.getFullYear()} - ${endDate.toLocaleString("default", {
    month: "short",
  })} ${endDate.getFullYear()}`;
};

const calculateTenureDifference = (startDate: Date, endDate: Date) => {
  const diff = endDate.getTime() - startDate.getTime();
  const diffInMonths = diff / (1000 * 60 * 60 * 24 * 30);
  const years = Math.floor(diffInMonths / 12);
  const months = Math.floor(diffInMonths % 12);
  const yearString = years === 1 ? "Year" : "Years";
  const monthString = months === 1 ? "Month" : "Months";
  return `${years} ${yearString} ${months} ${monthString}`;
};

const Image = lazy(() => import("./Image"));

const ClientCard = ({
  id,
  src,
  alt,
  heading,
  startDate,
  endDate,
  responsibilities,
  technologies,
}: ClientDataProps) => {
  return (
    <div key={id} className="flexbox__item">
        <Suspense fallback={<div>Loading...</div>}>
          <Image src={src} altText={alt}/>
        </Suspense>
      <div className="item-text-box">
        <h3>{heading}</h3>
        <p>{calculateTenureDates(startDate, endDate)}</p>
        <p>{calculateTenureDifference(startDate, endDate)}</p>
        <ClientCardText text={responsibilities} title="Responsibilities" />
        <ClientCardText text={technologies} title="Technologies" />
      </div>
    </div>
  );
};

const ItemCardClients = () => {
  return (
    <>
      {ClientData.map((client) => (
        <ClientCard key={client.id} {...client} />
      ))}
    </>
  );
};

export default ItemCardClients;
