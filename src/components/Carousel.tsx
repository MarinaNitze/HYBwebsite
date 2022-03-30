import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

export default function Carousel() {
  return (
    <Flickity
      className="carousel" // default ''
      elementType="div" // default 'div'
      options={{
        prevNextButtons: false,
      }} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <div className="carousel-cell">
        <div className="quote">
          <div className="quote-wrapper">
            <div className="quote-name">Very Important Name</div>
            <div className="quote-position">Very Important Position</div>
            <div className="quote-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo,
              nisi, vitae vulputate libero. Scelerisque posuere in erat neque ac
              luctus congue tellus eget.
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="quote">
          <div className="quote-wrapper">
            <div className="quote-name">Very Important Name</div>
            <div className="quote-position">Very Important Position</div>
            <div className="quote-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo,
              nisi, vitae vulputate libero. Scelerisque posuere in erat neque ac
              luctus congue tellus eget.
            </div>
          </div>
        </div>
      </div>
    </Flickity>
  );
}
