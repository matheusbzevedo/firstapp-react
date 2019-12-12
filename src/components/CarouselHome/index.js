import React from 'react';
import {Carousel} from 'react-bootstrap';

export default function CarouselHome () {
    let b1 = "https://cdn.pixabay.com/photo/2018/09/09/13/32/fantasy-3664586_960_720.jpg";
    let b2 = "https://cdn.pixabay.com/photo/2018/09/09/13/32/fantasy-3664586_960_720.jpg";
    let b3 = "https://cdn.pixabay.com/photo/2018/09/09/13/32/fantasy-3664586_960_720.jpg";
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}