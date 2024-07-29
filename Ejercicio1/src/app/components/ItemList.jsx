import React from 'react';
import styles from '../page.module.css'; // Importa el archivo de estilos

function ItemList({ items, updateItemQuantity, removeItem }) {
  return (
    <div className={styles.list}>
      {items.map(item => (
        <div key={item.id} className={styles.item}>
          <div className={styles.itemInfo}>
            <span className={styles.itemName}>{item.name}</span>    
            <div className={styles.controler}>
              <button 
                className={`${styles.button} ${styles.buttonIncrement}`}
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <span className={styles.itemQuantity}>{item.quantity}</span>
              <button 
                className={`${styles.button} ${styles.buttonDecrement}`}
                onClick={() => item.quantity > 1 && updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
            </div>
            <button 
              className={`${styles.button} ${styles.buttonRemove}`}
              onClick={() => removeItem(item.id)}
            >
              x
            </button>
          </div>
          <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}

export default ItemList;


