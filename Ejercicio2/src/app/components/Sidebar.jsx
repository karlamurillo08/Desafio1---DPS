"use client";
import { useState } from 'react';
import '../Sidebar.css';

export const Sidebar = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
}) => {
    const onDeleteProduct = (product) => {
        const results = allProducts.filter((item) => item.id !== product.id);
        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };

    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    const incrementQuantity = (productId) => {
        const updatedProducts = allProducts.map((product) =>
            product.id === productId
                ? { ...product, quantity: product.quantity + 1 }
                : product
        );
        const product = allProducts.find((product) => product.id === productId);
        setTotal(total + product.price);
        setCountProducts(countProducts + 1);
        setAllProducts(updatedProducts);
    };

    const decrementQuantity = (productId) => {
        const product = allProducts.find((product) => product.id === productId);
        if (product.quantity > 1) {
            const updatedProducts = allProducts.map((product) =>
                product.id === productId
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );
            setTotal(total - product.price);
            setCountProducts(countProducts - 1);
            setAllProducts(updatedProducts);
        }
    };

    return (
        <header>
            <div className='container-icon2'>
                <div className='container-cart-products'>
                    {allProducts.length ? (
                        <>
                            <div className='row-product'>
                                {allProducts.map((product) => (
                                    <div className='cart-product' key={product.id}>
                                        <div className='info-cart-product'>
                                        <figure> <img src={product.image} alt={product.title} /></figure>
                                            
                                        <p className='titulo-producto-carrito'>{product.description}</p>
                                        <span className='precio-producto-carrito'>${product.price}</span>
                                            <div className='quantity-controls'>
                                                <button onClick={() => decrementQuantity(product.id)}>-</button>
                                                <span className='cantidad-producto-carrito'>{product.quantity}</span>
                                                <button onClick={() => incrementQuantity(product.id)}>+</button>
                                            </div>
                                            
                                            
                                        </div>
                                        <img
                                            src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                                            alt="cerrar"
                                            className="icon-close"
                                            onClick={() => onDeleteProduct(product)}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='cart-total'>
                                <h3>Total:</h3>
                                <span className='total-pagar'>${total}</span>
                            </div>
                        </>
                    ) : (
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};
