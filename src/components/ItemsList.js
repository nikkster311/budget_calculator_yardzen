import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { scryRenderedComponentsWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { getFirestore } from 'firebase/firestore'


function ItemsList({ budget }) {

    // this grabs the items from a custom json file (see comment below)
    const [items, setItems] = useState([])

    // set the price of all items user has selected
    const [price, setPrice] = useState(0)

    // I could not get firestore connected, so I created mock data in a json file
    // here is how we grab those items and set them to the hooks onmount
    const getItems=()=>{
        fetch('items.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setItems(myJson)
          });
      }
      useEffect(()=>{
        getItems()
      },[])


    // formatting our json - numbers to currency in USD
    function currencyFormat(num) {
      return '$' + (num/100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

     // formatting our json - capitalize item name
     function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // when user selects an item, add cost to their total cost
    // we will use this to compare it to the budget they set for themselves
    function handleCheckboxChange(event) {
        if (event.target.checked) {
            setPrice(prevPrice => prevPrice + parseFloat(event.target.value))
        } else {
            setPrice(prevPrice => prevPrice - parseFloat(event.target.value))
        }
    };
    

    // -------- I tried using this to grab items from the firestore db but could not get it to work

    // async function getItems(db) {
    //     const itemsCol = collection(db, 'items');
    //     const itemsSnapshot = await getDocs(itemsCol);
    //     const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    //     return itemsList;
    //   }

    return (
        <div>
            <h1>Items List</h1>
            <table className="items-list">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Low Price</th>
                    <th>High Price</th>
                </tr>
                {
                    items && items.length>0 && items.map((item)=>
                    <tr>
                      <td>{capitalizeFirstLetter(item.name)}</td>
                      <td>{capitalizeFirstLetter(item.type)}</td>

                      <td><input type="checkbox"
                      id={`low-${item.name}`}
                      name={`low-${item.name}`}
                      value={item.lowPrice}
                      onChange={ handleCheckboxChange} />
                        {currencyFormat(item.lowPrice)}
                      </td>

                      <td><input type="checkbox"
                      id={`high-${item.name}`}
                      name={`high-${item.name}`}
                      value={item.highPrice}
                      onChange={ handleCheckboxChange} />
                        {currencyFormat(item.highPrice)}
                      </td>
                    </tr>)
                }
            </table>
            <h2>{currencyFormat(price)}</h2>
        </div>
    )
}

export default ItemsList