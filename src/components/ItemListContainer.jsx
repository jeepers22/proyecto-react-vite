import "./ItemListContainer.css"

const ItemListContainer = ( { greeting } ) => {
    return (
        <div className="main">
            <div className="saludo">
                <spam>{greeting}</spam>
            </div>
        </div>
    )
}

export default ItemListContainer