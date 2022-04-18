import React from 'react';
import useDestinations from '../../hooks/useDestinations';
import Location from '../Location/Location';
import './Destinations.css'

const Destinations = () => {
    const [destinations, setDestinations] = useDestinations([]);

    const handleButton = () => {
        console.log('button clicked');
    }
    return (
        <div className='location-container'>
            {
                destinations.map(location => <Location
                key={location.id}
                location={location}
                handleButton={handleButton}
                ></Location>)
            }
        </div>
    );
};

export default Destinations;