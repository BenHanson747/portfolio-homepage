import ClientData from "./data/ClientData";
import ItemResponsibilities from "./ItemCardClientsResponsibilities";
import ItemCardClientsTechnologies from "./ItemCardClientsTechnologies";

const calculateTenureDates = (startDate, endDate) => {
  return `${startDate.toLocaleString("default", {
    month: "short",
  })} ${startDate.getFullYear()} - ${endDate.toLocaleString("default", {
    month: "short",
  })} ${endDate.getFullYear()}`;
};

const calculateTenureDifference = (startDate, endDate) => {
  const diff = endDate - startDate;
  const diffInMonths = diff / (1000 * 60 * 60 * 24 * 30);
  const years = Math.floor(diffInMonths / 12);
  const months = Math.floor(diffInMonths % 12);
  const yearString = years === 1 ? "Year" : "Years";
  const monthString = months === 1 ? "Month" : "Months";
  return `${years} ${yearString} ${months} ${monthString}`;
};

const ClientCard = ({
  id,
  src,
  alt,
  heading,
  startDate,
  endDate,
  responsibilities,
  technologies,
}) => {
  return (
    <div key={id} className="flexbox__item">
      <img
        className="item__image"
        src={src}
        alt={alt}
        width="350"
        height="200"
        loading="lazy"
      />
      <div className="item-text-box">
        <h3>{heading}</h3>
        <p>{calculateTenureDates(startDate, endDate)}</p>
        <p>{calculateTenureDifference(startDate, endDate)}</p>
        <ItemResponsibilities data={responsibilities} />
        <ItemCardClientsTechnologies data={technologies} />
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
