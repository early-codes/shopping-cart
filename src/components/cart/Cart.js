import React, { useEffect } from 'react';

const Cart = (props) => {

    useEffect(() => {
        if (props) {
            console.log(props.data[1].quantity)
        }
    })

    return (
        <div className="component cartComponent">
            <h1>Cart Component</h1>
        </div>
    )

}

export default Cart
