import React from 'react';
import './Cart.css'

const Cart = ({carts, handleRemoveFromCart}) => {

    // ============ 4 ways to add Conditional Rendering in React=============
    // => 1. element variable
    let command;
    if(carts.length === 0){
        command = <p>Please add items</p>
    }
    else if(carts.length === 1){
        command = <p>Please add more items</p>
    }
    else{
        command = <p>Thanks for adding items</p>
    };


    return (
        <div>
            <h4>Items Selected: {carts.length}</h4>
            <small>{command}</small>
            {
                carts.map(cart => <p>
                    {cart.name}
                    <button onClick={() => handleRemoveFromCart(cart)}>X</button>
                    </p>)
            }

            {/* => 2. ternary operator = condition ? true : false */}
            {carts.length !== 4 ? <p>Keep adding</p> : <button>Remove all</button>}

            {/* => 3. && operator (shorthand) */}
            {carts.length > 3 && <p className='orangered'>Alert</p>}

            {/* => 3. || operator (shorthand) */}
            {carts.length === 0 || <button className='green'>Check out</button>}
        </div>
    );
};

export default Cart;