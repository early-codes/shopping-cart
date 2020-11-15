import React from 'react';
import './Item.css'

const Item = (props) => {

    const increase = () => { }
    const decrease = () => { }


    return (
        <div className="item">
            <h3>ITEM</h3>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <h3><span style={{ fontWeight: "normal" }}>Price: {props.price}</span></h3>
            <div>
                <input type="button" onClick={increase} />
                <input type="text" />
                <input type="button" onClick={decrease} />
            </div>

        </div>
    )

}

export default Item