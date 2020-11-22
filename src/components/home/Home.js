import React, { useContext, useEffect } from 'react';
import Item from '../item/Item';
import { OnSaleContext } from '../context';

import './Home.css'


const Home = (props) => {
    const [onSale, setOnSale] = useContext(OnSaleContext)

    const quantityHandler = async (title, value) => {
        let _onSale = [...onSale]
        for (let item in _onSale) {
            if (_onSale[item].title === title) {
                _onSale[item].quantity = value
            }
        }


        // _onSale = _onSale.forEach(item => {
        //     if (item.title === title) {
        //         item.quantity = value
        //     }
        // })
        setOnSale(_onSale)
        // await setOnSale(onSale.forEach(item => {
        //     if (item.title === title) {
        //         item.quantity = value
        //     }
        // }))
        sendBasket(onSale)
    }


    const sendBasket = (onSale) => {
        props.basketGetter(
            onSale.filter(item => item.quantity > 0).length
        )
    }


    let items = onSale.map((item) => {
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