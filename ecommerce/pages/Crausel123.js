import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function Crausel123() {
  return (
    <div>
         <Carousel>
            <Carousel.Item>
              <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ed12b7707a04473c.jpg?q=20" className="d-block w-100" alt="dsa" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img23/Fashion/Gw/Dec/one/Deals-Unrec-PC-3000._CB586389711_.jpg" class="d-block w-100" style={{ height: '240px', position: 'relative', zIndex: '-1' }} alt="..." />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/71ae841f2308328f.jpg?q=20" className="d-block w-100" alt="ss" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Crausel123