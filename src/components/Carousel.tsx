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
            <div className="quote-name">Carl Malamud</div>
            <div className="quote-position">Public Resource</div>
            <div className="quote-content">
              The U.S. federal government is the largest and most unwieldy living organism in the world. In “Hack Your Bureaucracy,” Marina Nitze and Nick Sinai use their own experience as agents of change in the civil service to give a master class on how to get things done. This book is essential reading for anybody working in any large institution, not just government.
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="quote">
          <div className="quote-wrapper">
            <div className="quote-name">Jack Shanahan</div>
            <div className="quote-position">First Director of the Algorithmic Warfare Cross-Functional Team, U.S. Air Force</div>
            <div className="quote-content">
              A masterful guide to hacking the bureaucracy. Nick and Marina don't just talk the talk. When I was standing up the DoD Joint AI Center (JAIC), the organization took on a completely new life after Nick jumped in to help us. And as a relatively recent military retiree, I can attest that the VA online experience is 50x better today than it was just a few years ago. If you aren't energized by this book, you don't have a pulse!
            </div>
          </div>
        </div>
      </div>
    </Flickity>
  );
}
