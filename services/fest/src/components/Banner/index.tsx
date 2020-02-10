import React from "react";

//Components
import { Carousel } from "react-bootstrap";

//Styles
import "./styles.scss";

function Banner() {
  return (
    <Carousel interval={3000} fade={true} indicators={false}>
      <Carousel.Item
        className="banner-image"
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1581194441303-1858e2035208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80"})`
        }}
      ></Carousel.Item>
      <Carousel.Item
        className="banner-image"
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1581194441303-1858e2035208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80"})`
        }}
      ></Carousel.Item>
      <Carousel.Item
        className="banner-image"
        style={{
          backgroundImage: `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3c3be051917533.58ff23337ce01.jpg"})`
        }}
      ></Carousel.Item>
    </Carousel>
  );
}

export default Banner;
