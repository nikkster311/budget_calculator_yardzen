import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { scryRenderedComponentsWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';

function ItemsList() {
    
    async function getItems(db) {
        const itemsCol = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsCol);
        const itemsList = itemsSnapshot.docs.map(doc => doc.data());
        return itemsList;
      }

    return (
        <div>
            <h1>Items List</h1>
        </div>
    )
}

export default ItemsList