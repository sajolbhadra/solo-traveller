import { useEffect, useState } from "react";

const useDestinations = () => {

    const [destinations, setDestinations] = useState([]);
    useEffect( ()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDestinations(data))
    
        // console.log(destinations)
    }, []);
    return [destinations, setDestinations];
    
}
export default useDestinations; 
