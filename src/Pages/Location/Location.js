import React from 'react';
import './Location.css'

const Location = (props) => {
    const {name, price, img, description} = props.location;
    const {handleButton} = props;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <div className='item-info'>
                <h3>Item: {name}</h3>
                <p>Price: {price}</p>
                <p>{description}</p>
            </div>
                <button onClick={() => handleButton(props.item)} className='btn-cart'>
                    <span>Select</span> 
                
                </button>
        </div>
    );
};

export default Location;