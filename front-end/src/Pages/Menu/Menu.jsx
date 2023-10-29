import "./Menu.css"
import "../../Components/ItemTags/ItemTags.css"
import Item from "../../Components/Item/Item"
import ItemTags from "../../Components/ItemTags/ItemTags";
import { useEffect, useState } from "react";
import React from 'react';

export const UserContext = React.createContext();

function Menu({ updateMenuValue }){
    const foods=[
    {
        "name":"Gogoasa",
        "price":1,
        "expDate":"20-10-2022",
        "manufacturer":"Lidl",
    },
    {
        "name":"Sandwich",
        "price":3,
        "expDate":"20-10-2022",
        "manufacturer":"Penny",
    },
    {
        "name":"Placinta",
        "price":2,
        "expDate":"20-10-2022",
        "manufacturer":"Lidl",
    },
    {
        "name":"Croissant",
        "price":1,
        "expDate":"20-10-2022",
        "manufacturer":"Carrefour",
    },
    ]

    const [cartItems, setCartItems] = useState([]);

    const manufacturers = [
        "Lidl",
        "Carrefour",
        "Penny"
    ]

    const [search, setSearch] = useState("");
    const [manufacturer, setManufacturer] = useState("");

    const cards = document.getElementsByClassName('itemContainer');
    const cardArray = Array.from(cards);

    const tags = document.getElementsByClassName('tagItem');

    

    useEffect(() => {
        cardArray.forEach((card) => {
          const itemName = card.querySelector('.itemName');
          if (itemName) {
            let text = itemName.innerText;
            if (text.toLowerCase().includes(search.toLowerCase())) {
              card.style.display = '';
            } else {
              card.style.display = 'none';
            }
          }
        });
      }, [search]);

    useEffect(()=>{
        cardArray.forEach((card)=>{
            const itemManufacturer = card.querySelector('.itemManufacturer');
            if (itemManufacturer) {
                let text = itemManufacturer.innerText;
                console.log(text,manufacturer)
                if (text.toLowerCase().includes(manufacturer.toLowerCase())) {
                card.style.display = '';
                } else {
                card.style.display = 'none';
                }
            }
        });
    },[manufacturer]);

    const handleFilterChange = (event) => {
        setSearch(event.target.value); 
    };
    
    const handleClick = (event) =>{
        setManufacturer(event.target.innerText);    
    }

    const handleAddToCart = (obj) => {
        const updatedCart = [...cartItems, obj]; // Create a new array with the updated cart items
        setCartItems(updatedCart); // Update the state
        updateMenuValue(updatedCart); // Send the updated cart items to Cart component
      }

    return(
        <UserContext.Provider value="Reed">
        <div className="pageContainer">
            <div className="topBar">
                <h1>Meniu</h1>
                <input 
                type="text" 
                className="searchBar"
                onChange={handleFilterChange}/>
            </div>
            <div className="tagsList">
                {
                    manufacturers.map((manufacturer, index) =>{
                        return(
                            <div onClick={handleClick}>
                                <ItemTags key={index} name={manufacturer}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="itemList">
                {
                    foods.map((food) => {
                        return(
                            <Item
                            name={food.name}
                            price={food.price}
                            expDate={food.expDate}
                            manufacturer={food.manufacturer}
                            handleAddToCart={() => handleAddToCart(food)}
                            />
                        )
                    })
                }
            </div>
        </div>
        </UserContext.Provider>
    )
}

export default Menu;
