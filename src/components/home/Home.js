import React, { useEffect, useState } from 'react';
import Item from '../item/Item'
import './Home.css'


const Home = (props) => {

    let onSale = [
        {
            title: "Pea",
            image: "../../img/pea.jpg",
            price: 5,
            quantity: 0
        },
        {
            title: "Chickpea",
            image: "../../img/chickpea.jpg",
            price: 4,
            quantity: 0
        },
        {
            title: "Lentil",
            image: "../../img/lentils.jpg",
            price: 7,
            quantity: 0,
        }
    ]

    const quantityHandler = (title, value) => {
        onSale.forEach(item => {
            if (item.title === title) {
                item.quantity = value
            }
        })
    }

    const items = onSale.map((item) => {
        return (
            <Item key={item.title} data={item} clickHandler={quantityHandler} />
        )
    })


    return (
        <div className="component homeComponent">
            <div className="itemContainer" style={{ textAlign: "center" }}>
                {items}
            </div>
            <input id="checkoutButton" value="Checkout" type="button" onClick={() => { props.dataGetter(onSale); props.history.push("/cart") }} />
        </div>
    )

}

export default Home