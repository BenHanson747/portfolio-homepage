
const ItemCardClientsTechnologies = ({data}) => {
    const listItems = data.map((items, index) => <li key={index}>{items}</li>);  
    return ( 
        <>
           <h4>Technologies & Languages</h4>
            <ul>
                {listItems}
            </ul>
        </>
        )
}

export default ItemCardClientsTechnologies;