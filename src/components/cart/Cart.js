import React, { useEffect } from 'react';
import CartItems from "./cartItems/CartItems"

const Cart = (props) => {

    let itemsField = <div></div>

    if (props.data.length < 1) {
        itemsField = <div><h2>Nothing Yet!</h2></div>
    } else {
        itemsField = props.data
        .filter(item => item.quantity > 0)
        .map(item => {
            return (
                <CartItems key={item.title} image={item.image} title={item.title} quantity={item.quantity} totalPrice={item.quantity * item.price} />
            )
        })
        
        // <div><CartItems data={props.data} /></div>
    }

    useEffect(() => {

    }, [])

    return (
        <div className="component cartComponent">
            {itemsField}
        </div>
    )

}

export default Cart
