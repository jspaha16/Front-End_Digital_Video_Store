import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

const About = () => {
  return (
    <div className="carusel-body">
      <MDBCarousel className="carusel" showIndicators showControls fade>
        <MDBCarouselInner>
          <h2>Hero Section</h2>
          <MDBCarouselItem className="active">
            <MDBCarouselElement
              src="https://wallpaperaccess.com/full/39942.jpg"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>The Avengers</h5>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://images7.alphacoders.com/120/1207353.jpg"
              alt="..."
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://images7.alphacoders.com/294/294072.jpg"
              alt="..."
            />
            <MDBCarouselCaption>
              <h5>Breaking Bad</h5>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <p className="about-text">
        This is my final assignment of Database Connectivity using Java. The
        technologies I have used to complete this assignment are React,
        React-Bootstrap, Html, Css and JavaScript in FrontEnd. In BackEnd I have
        used Java and Spring Boot framework. I have used MongoDb as the database
        for my Web Application.
      </p>
    </div>
  );
};

export default About;
