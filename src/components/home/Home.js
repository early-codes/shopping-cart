import React from 'react';
import Item from '../item/Item'
import './Home.css'


const Home = () => {

    const onSale = [
        {
            title: "Pea",
            image: "../../img/pea.jpg",
            price: "5$"
        },
        {
            title: "Chickpea",
            image: "../../img/chickpea.jpg",
            price: "4$"
        },
        {
            title: "Lentil",
            image: "../../img/lentils.jpg",
            price: "7$"
        }
    ]

    const items = onSale.map((item) => {
        return (
            <Item key={item.title} data={item} />
        )
    })

    return (
        <div className="component homeComponent">
            <div className="itemContainer" style={{ textAlign: "center" }}>
                {items}
            </div>
        </div>
    )

}

export default Home