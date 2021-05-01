import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart)
    const total = cart.reduce( (total ,prd) =>total + prd.price ,0)
    return (
        <div>
            <h3>Order summary</h3>
            <p> Order iteams :{cart.length}</p>
            <p>Total price :{total}</p>
        </div>
    );
};

export default Cart;