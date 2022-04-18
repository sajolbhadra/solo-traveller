import React from 'react';
import { Carousel } from 'react-bootstrap';
import Destinations from '../Destinations/Destinations';
import './Home.css'

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100  img"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/65/03/8c/sundarban.jpg?w=800&h=-1&s=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Sundarban</h3>
            <p>World Largest Mangrove Forest</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  img"
            src="https://www.tourismkeari.com/static/products/15e31bae7ece1e.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Cox's Bazar</h3>
            <p>World Largest Sea Beach</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  img"
            src="https://wallpaperaccess.com/full/1093978.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Switzerland</h3>
            <p>Heaver on The Earth</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    <Destinations></Destinations>
    </div>
  );
};

export default Home;