import React from 'react';
import CartItems from "./cartItems/CartItems"

const Cart = (props) => {

    let itemsField = <div></div>
    let totalPrice = 0

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
        totalPrice = props.data
            .map(item => {
                return (
                    item.quantity * item.price
                )
            })
            .reduce((sum, one) => sum + one)
    }


    return (
        <div className="component cartComponent">
            {itemsField}
            <h2 style={{ margin: "0 auto", textAlign: "right", marginRight: "200px", paddingBottom: "50px" }}>Total Price: {totalPrice}$</h2>
        </div>

    )

}

export default Cart
