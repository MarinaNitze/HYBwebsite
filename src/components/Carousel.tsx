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
            <div className="quote-name">Eric Schmidt</div>
            <div className="quote-position">co-founder of Schmidt Futures and former CEO of Google</div>
            <div className="quote-content">
              "A master class on intrapreneurship.  If you want to drive change in large organizations, <em>Hack Your Bureaucracy</em> is a must read."
            </div>
          </div>
        </div>
      </div>
	  <div className="carousel-cell">
        <div className="quote">
          <div className="quote-wrapper">
            <div className="quote-name">Cecilia Muñoz</div>
            <div className="quote-position">former Director, White House Domestic Policy Council under President Obama</div>
            <div className="quote-content">
              "We think that changing the world requires inspirational leaders, but the truth is that real change is driven by regular people working behind the scenes. This is a deeply empowering and practical book for those people: for anyone, anywhere, who just wants to GET STUFF DONE.  Marina and Nick may claim that they're not magicians, but I have watched them in action.  The skills that they are passing along in this book feel like magic because they work."
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="quote">
          <div className="quote-wrapper">
            <div className="quote-name">Todd Park</div>
            <div className="quote-position">cofounder of Devoted Health, Athenahealth, and Castlight Health and former U.S. CTO</div>
            <div className="quote-content">
              "Nick and Marina are incredibly gifted change agents, and in <em>Hack Your Bureaucracy</em>, they provide hard-won lessons and wisdom that will be invaluable to everyone from entrepreneurs trying to build great companies to innovators working to change institutions of all kinds from the inside out.  Like working with Nick and Marina, the book is energizing, inspiring, and an absolute blast -- a how-to manual for driving change unlike any other."
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
              "The U.S. federal government is the largest and most unwieldy living organism in the world. In <em>Hack Your Bureaucracy</em>, Marina Nitze and Nick Sinai use their own experience as agents of change in the civil service to give a master class on how to get things done. This book is essential reading for anybody working in any large institution, not just government."
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="quote">
          <div className="quote-wrapper">
            <div className="quote-name">Anne-Marie Slaughter</div>
            <div className="quote-position">CEO, New America</div>
            <div className="quote-content">
              "<em>Hack Your Bureaucracy</em> should be on the desk of every government official in the land -- federal, state, and local. It offers powerful tools to strengthen and expand our democracy by making it work for everyone."
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
              "A masterful guide to hacking the bureaucracy. Nick and Marina don't just talk the talk. When I was standing up the DoD Joint AI Center (JAIC), the organization took on a completely new life after Nick jumped in to help us. And as a relatively recent military retiree, I can attest that the VA online experience is 50x better today than it was just a few years ago. If you aren't energized by this book, you don't have a pulse!"
            </div>
          </div>
        </div>
      </div>
    </Flickity>
  );
}
