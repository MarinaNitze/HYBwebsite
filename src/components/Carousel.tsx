import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

export default function Carousel() {
  return (
    <Flickity
      className="carousel" // default ''
      elementType="div" // default 'div'
      options={{
        prevNextButtons: true,
      }} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <div className="carousel-cell">
        <div className="quote">
          <div className="quote-wrapper">
            <div className="quote-name">Adam Grant</div>
            <div className="quote-position">#1 New York Times bestselling author of THINK AGAIN and host of the TED podcast WorkLife</div>
            <div className="quote-content">
              "If you’ve ever been frustrated by red tape, think of this book as a pair of scissors. Marina Nitze and Nick Sinai are master bureaucracy busters, and their experience in the White House shows how you can root out inefficiency in your own backyard."
            </div>
          </div>
        </div>
      </div>
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
            <div className="quote-name">Steve Levitt</div>
            <div className="quote-position">author of Freakonomics and University of Chicago professor</div>
            <div className="quote-content">
              "I’ve never read a book with so many good ideas. Every page that I read, I kicked myself, thinking back on all the times I tried to make change and failed. If Hack Your Bureaucracy had been written 30 years earlier, I would have accomplished so much more in my life."
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
            <div className="quote-name">Jen Pahlka</div>
            <div className="quote-position">Founder, Code for America and former U.S. Deputy CTO</div>
            <div className="quote-content">
              "To tackle the biggest challenges we face on the planet, we will have to make bureaucracies work. Marina and Nick show us how. Practical, insightful, and totally spot-on, Hack Your Bureaucracy is essential reading for everyone from frustrated leaders to ambitious newcomers."
            </div>
          </div>
        </div>
      </div>
	  <div className="carousel-cell">
        <div className="quote">
          <div className="quote-wrapper">
            <div className="quote-name">Tara McGuinness</div>
            <div className="quote-position">co-author of Power to the Public, founder, New Practice Lab</div>
            <div className="quote-content">
              "Whether you are revamping your small business, helping to improve the PTA, or leading a scaled organization, this book has something for you.  Marina and Nick take solving complex organizational problems and driving outcomes to a new level. Hack Your Bureaucracy is a step-step-guide on how to have impact one practical step at a time.  Their bureaucracy hacking advice is thoughtful, tested and useful wisdom for those leading in any sector."
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
            <div className="quote-name">Ash Carter</div>
            <div className="quote-position">former Secretary of Defense</div>
            <div className="quote-content">
              "Having worked for decades in the Defense Department, including having had the top three jobs, I know how important it is to empower people. I’ve seen it with both military service members and DoD civilian employees across a variety of roles: with hustle, grit, organizational savviness, and teamwork, you can take a good idea all the way through successful execution. In Hack Your Bureaucracy, Nick and Marina—world class bureaucracy hackers themselves—present an actionable and fun guide to getting things done, even in the most challenging of environments."
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="quote">
          <div className="quote-wrapper">
            <div className="quote-name">Bill Bender</div>
            <div className="quote-position">Lt Gen (Ret) USAF, SVP, Customer Excellence, Leidos </div>
            <div className="quote-content">
              "I spent nearly three years as the U.S. Air Force Chief Information Officer working every day to hack <em>my</em> bureaucracy. I wish I knew then what I see now in the straightforward and well-thought prescriptions laid out in this book—a must read for enlightened organizations and leaders looking to inspire the process changes and cultural mindset shifts necessary to hack <em>their</em> bureaucracies!"
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-cell">
        <div className="quote">
          <div className="quote-wrapper">
            <div className="quote-name">Lauren Knausenberger</div>
            <div className="quote-position">&nbsp;</div>
            <div className="quote-content">
              "Nick and Marina are masters of the dark arts of bureaucracy hacking.  Hack Your Bureaucracy is full of dozens of tactics that I've used, and many more that I plan to!  Anyone who wants to make change at scale -- in the U.S. Air Force, or in any organization of significance -- should read this book."
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
