import React, { useEffect, useState } from 'react';
import './Item.css'


const Item = (props) => {

    const [quantity, setQuantity] = useState(0)

    const increase = () => { setQuantity(quantity + 1) }
    const decrease = () => { (quantity > 0) ? setQuantity(quantity - 1) : setQuantity(quantity) }

    useEffect(() => {
        props.clickHandler(props.data.title, quantity)
    }, [quantity, props])

    return (
        <div className="item">
            <h3>{props.data.title}</h3>
            <div>
                <img src={props.data.image} alt={props.data.title} />
            </div>
            <h3><span style={{ fontWeight: "normal" }}>Price: {props.data.price}$</span></h3>
            <div>
                <input type="button" onClick={decrease} value="-" />
                <input type="text" value={quantity} onChange={(event) => { setQuantity(event.target.value) }} style={{ width: "20px", textAlign: "center" }} />
                <input type="button" onClick={increase} value="+" />
            </div>
            <h4>{props.data.price * quantity}$</h4>


        </div>
    )

}

export default Item