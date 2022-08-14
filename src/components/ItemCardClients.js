import ClientData from "./ClientData";

function ItemCardClients() {
  return (
    <>
      {ClientData.map((ClientData) => {
        const { id, src, alt, text, heading } = ClientData;
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
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ItemCardClients;
