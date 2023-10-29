import "./Item.css"

const Item = ({name, price, expDate, manufacturer,handleAddToCart}) => {
  return (
    <div className="itemContainer">
        <div className="itemName">{name}</div>
        <div className="itemDate">Data de expirare: {expDate}</div>
        <div className="itemManufacturer">Vanzator: {manufacturer}</div>
        <div className="itemPrice">Pret: {price} Lei</div>
        <div className="buyBtnContainer">
            <div className="buyBtn" onClick={handleAddToCart}>
            Adauga in cos!
            </div>
        </div>
    </div>
  )
};

export default Item;
