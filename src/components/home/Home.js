import React, { useContext, useEffect } from 'react';
import Item from '../item/Item';
import { OnSaleContext } from '../context';

import './Home.css'


const Home = (props) => {
    const [onSale, setOnSale] = useContext(OnSaleContext)

    const quantityHandler = (title, value) => {
        setOnSale(onSale.forEach(item => {
            if (item.title === title) {
                item.quantity = value
            }
        }))
        sendBasket(onSale)
    }


    const sendBasket = (on_Sale) => {
        props.basketGetter(
            on_Sale.filter(item => item.quantity > 0).length
        )
    }

    let _onSale = [...onSale]
    let items = _onSale.map((item) => {
        console.log(onSale)
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