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
          backgroundImage: `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/fs/97074490017985.5e0a1f0560faa.jpg"})`
        }}
      ></Carousel.Item>
      <Carousel.Item
        className="banner-image"
        style={{
          backgroundImage: `url(${"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4433051917533.58fe88c814d2d.jpg"})`
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
