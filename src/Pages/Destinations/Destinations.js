import React, { useEffect, useState } from 'react';
import useDestinations from '../../hooks/useDestinations';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect
    ( ()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDestinations(data))
    
        console.log(destinations)
    }, []);
    console.log(destinations)
    return (
        <div>
            <h4>Destinations</h4>
        </div>
    );
};

export default Destinations;