import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Location.css'

const Location = (props) => {
    const {name, price, img, description} = props.location;
    const {handleButton} = props;
    const {id} = useParams();
    return (
        <div className='item mx-auto mt-4'>
            <img src={img} alt="" className='img-fluid'/>
            <div className='item-info'>
                <h3>{name}</h3>
                <p>Cost: {price}</p>
                <p>{description}</p>
            </div>
                <button  className='btn-cart'>
                    {/* <span>Select</span>  */}
                <Link to={`/checkout/${id}`} className="text-white " >Select Location</Link>
                </button>
        </div>
    );
};

export default Location;