import React, { useState } from 'react';
import useTShirt from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTShirt([]);
    const [carts, setCarts] = useState([])
    const handleAddToCart = selectedItem => {
        const exists = carts.find(tShirt => tShirt._id === selectedItem._id)
        if (!exists) {
            const newCart = [...carts, selectedItem];
            setCarts(newCart);
        }
        else{
            alert('Item already added')
        }
    };
    const handleRemoveFromCart = selectedItem => {
        const rest = carts.filter(tShirt => tShirt._id !== selectedItem._id);
        setCarts(rest)
    };
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    carts={carts}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;