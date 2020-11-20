import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default () => {
  return (
    <div className="container">
      <h4 className="my-pl-4">
        <u> Most Popular Places</u>{" "}
      </h4>
      <Carousel>
        <Carousel.Item>
          <img src="https://unsplash.it/97/140/?random" alt="First slide" />
          {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://unsplash.it/97/142/?random" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://unsplash.it/97/143/?random" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
