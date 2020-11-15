import React from 'react';
import Item from '../item/Item'
import './Home.css'

const Home = () => {

    return (
        <div className="component homeComponent">
            <div className="itemContainer">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )

}

export default Home