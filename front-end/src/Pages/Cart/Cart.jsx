import { useContext } from 'react';
import { UserContext } from '../Menu/Menu';
import './Cart.css'

function Cart() {
  const cartItems = useContext(UserContext);

  return (
    <div className='cartContainer'>
        <h1>Cart</h1>
        {cartItems.map((item, index) => (
            <div key={index}>
                <div className='cartItem'>
                    <div>
                    {item.name}
                    </div>
                    <div>
                    Pret: {item.price} Lei
                    </div>
                </div>    
            </div>
        ))}
        <div className='buttonSend' onClick={()=>{alert("Comanda plasata cu succes!")}}>
            Plaseaza Comanda
        </div>
    </div>
  );
}

export default Cart;
