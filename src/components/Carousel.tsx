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
            <div className="quote-name">Cecilia Muñoz</div>
            <div className="quote-position">former Director, White House Domestic Policy Council under President Obama</div>
            <div className="quote-content">
              We think that changing the world requires inspirational leaders, but the truth is that real change is driven by regular people working behind the scenes. This is a deeply empowering and practical book for those people: for anyone, anywhere, who just wants to GET STUFF DONE.  Marina and Nick may claim that they're not magicians, but I have watched them in action.  The skills that they are passing along in this book feel like magic because they work.   
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
