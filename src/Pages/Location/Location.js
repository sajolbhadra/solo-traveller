import React from 'react';
import './Location.css'

const Location = (props) => {
    const {name, price, img, description} = props.location;
    const {handleButton} = props;
    return (
        <div className='item mx-auto mt-4'>
            <img src={img} alt="" className='img-fluid'/>
            <div className='item-info'>
                <h3>{name}</h3>
                <p>Cost: {price}</p>
                <p>{description}</p>
            </div>
                <button onClick={() => handleButton(props.item)} className='btn-cart'>
                    <span>Select</span> 
                
                </button>
        </div>
    );
};

export default Location;