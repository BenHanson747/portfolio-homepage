function ItemResponsibilities({ data }) {
  const listItems = data.map((items, index) => <li key={index}>{items}</li>);
  return (
    <>
      <h4>Responsibilities</h4>
      <ul>{listItems}</ul>
    </>
  );
}
export default ItemResponsibilities;
