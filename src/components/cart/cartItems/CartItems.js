import React from 'react';

import './CartItems.css'

const CartItems = (props) => {

    let img=`../${props.image}`

    return (
        <div className="cartItemDiv">
            <div className="imageDiv">
                <img src={img} alt={props.title} />
            </div>
            <div className="propsDiv">
                <h3>title: {props.title}</h3>
                <h3>quantity: {props.quantity}</h3>
                <h3>total price: {props.totalPrice}</h3>
            </div>
        </div>
    )
}

export default CartItems