import React, { createContext, useState } from 'react';

const OnSaleContext = createContext();

const OnSaleProvider = (props) => {

    const [onSale, setOnSale] = useState([
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
    ]);


    return (
        <OnSaleContext.Provider value={[onSale, setOnSale]}>
            {props.children}
        </OnSaleContext.Provider>
    )

}

export { OnSaleContext, OnSaleProvider }