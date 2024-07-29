"use client";

import React, { useState } from 'react';
import ItemList from './ItemList';
import { data } from '../item';
import styles from '../page.module.css'; // Importa el módulo CSS

const Form = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const addItem = () => {
    const itemExists = items.find(item => item.name === selectedItem.nombre);

    if (itemExists) {
      setItems(items.map(item =>
        item.name === selectedItem.nombre
        
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setItems([...items, {
        id: Date.now(),
        name: selectedItem.nombre,
        price: selectedItem.precio,
        quantity: 1
      }]);
    }
  };

  const updateItemQuantity = (id, quantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
   
    <div className={styles.container}>    
    <select onChange={(e) => setSelectedItem(JSON.parse(e.target.value))}>
            {data.map((item, index) => (
              <option key={index} value={JSON.stringify(item)}>
                {item.nombre} - ${item.precio}
               
              </option>
            ))}
          </select>      
          
          <button onClick={addItem}>Agregar</button>
          
          </div>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          
          
          <ItemList items={items} updateItemQuantity={updateItemQuantity} removeItem={removeItem} />
          <h2 className={styles.total}>
            <span></span>
          <span className={styles}>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </h2>
        </div>
      </form>
    </>
  );
}

export default Form;



