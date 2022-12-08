import ClientData from "./data/ClientData";
import ItemResponsibilities from "./ItemCardClientsResponsibilities";
import ItemCardClientsTechnologies from "./ItemCardClientsTechnologies";

function ItemCardClients() {
  return (
    <>
      {ClientData.map((ClientData) => {
        const {
          id,
          src,
          alt,
          heading,
          startDate,
          endDate,
          responsibilities,
          technologies,
        } = ClientData;

        const calculateTenureDates = () => {
          const getMonthNameStart = startDate.toLocaleString("default", {
            month: "short",
          });
          const getMonthNameEnd = endDate.toLocaleString("default", {
            month: "short",
          });
          const getStartDateYear = startDate.getFullYear();
          const getEndDateYear = endDate.getFullYear();
          return `${getMonthNameStart} ${getStartDateYear} - ${getMonthNameEnd} ${getEndDateYear}`;
        };

        const calculateTenureDifference = () => {
          const calculateYearsDifference = Math.floor(
            (endDate.getMonth() -
              startDate.getMonth() +
              12 * (endDate.getFullYear() - startDate.getFullYear())) /
              12
          );
          const calculateMonthsDifference =
            endDate.getMonth() -
            startDate.getMonth() +
            12 * (endDate.getFullYear() - startDate.getFullYear()) -
            calculateYearsDifference * 12;
          const calculateYearString =
            calculateYearsDifference === 1 ? "Year" : "Years";
          const calculateMonthString =
            calculateMonthsDifference === 1 ? "Month" : "Months";
          return `${calculateYearsDifference} ${calculateYearString} ${calculateMonthsDifference} ${calculateMonthString}`;
        };

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
              <p>{calculateTenureDates()}</p>
              <p>{calculateTenureDifference()}</p>
              <ItemResponsibilities data={responsibilities} />
              <ItemCardClientsTechnologies data={technologies} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ItemCardClients;
