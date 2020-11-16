import React from 'react';
import './Item.css'


const Item = (props) => {

    const increase = () => { console.log(props.data.image) }
    const decrease = () => { }



    return (
        <div key={props.data.title} className="item">
            <h3>{props.data.title}</h3>
            <div>
                <img src={props.data.image} alt={props.data.title} />
            </div>
            <h3><span style={{ fontWeight: "normal" }}>Price: {props.data.price}</span></h3>
            <div>
                <input type="button" onClick={increase} value="-" />
                <input type="text" value="0" style={{width:"20px", textAlign:"center"}} />
                <input type="button" onClick={decrease} value="+" />
            </div>

        </div>
    )

}

export default Item