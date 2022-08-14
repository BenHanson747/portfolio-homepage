import ItemCardClients from "./ItemCardClients";

function Clients() {
  return (
    <section className="section" id="clients">
      <h2 className="section__title">Clients</h2>
      <span className="section__subtitle">My experience</span>
      <div className="flexbox-container">
        <ItemCardClients />
      </div>
    </section>
  );
}

export default Clients;
