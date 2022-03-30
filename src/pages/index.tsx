import React, { useState } from 'react';
import Carousel from '@/components/Carousel';
import Block from '@/components/Block';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <main>
      <div className="wrapper">
        <header className="hero">
          <div className="hero-inner">
            <div className="hero-bar">
              <div className="hero-bar-logo">
                <img src="/img/logo.svg" alt="Hack Your Bureaucracy" />
              </div>
              <div className="hero-bar-text">
                <strong>Preorder today on</strong>
                <span>
                  <a href="https://www.amazon.com/Hack-Your-Bureaucracy-Things-Matter/dp/0306827751/ref=sr_1_2?crid=CX4U3NGDPLJF&keywords=hack+your+bureaucracy&qid=1643597507&sprefix=hack+your+buraucracy%2Caps%2C65&sr=8-2">
                    Amazon
                  </a>
                  {` `}
                  or{` `}
                  <a href="https://www.barnesandnoble.com/w/hack-your-bureaucracy-marina-nitze/1140835387">
                    Barnes &amp; Noble
                  </a>
                </span>
              </div>
            </div>
            <div className="hero-content">
              <h1>
                HACK YOUR
                <br />
                BUREAUCRACY
              </h1>
              <div className="hero-subtitle">
                A book by Marina Nitze and Nick Sinai
              </div>
            </div>
          </div>
        </header>
        <div className="intro">
          <div className="intro-wrapper">
            <div className="intro-content">
              The never-before-told story of how we{` `}
              <strong>saved billions of dollars and thousands</strong> of lives
              in the largest, most notorious bureaucracy in the world—the U.S.
              Federal Government—and how our tried and true tactics can help you
              unlock outsized success in your organization.
            </div>
            <div className="intro-date">AVAILABLE SEPTEMBER 13, 2022!</div>
            <div className="intro-preorder">Preorder today from</div>
            <div className="intro-links">
              <a href="https://www.amazon.com/Hack-Your-Bureaucracy-Things-Matter/dp/0306827751/ref=sr_1_2?crid=CX4U3NGDPLJF&keywords=hack+your+bureaucracy&qid=1643597507&sprefix=hack+your+buraucracy%2Caps%2C65&sr=8-2">
                <img src="/img/amazon.png" alt="Amazon" />
              </a>
              <a href="https://www.barnesandnoble.com/w/hack-your-bureaucracy-marina-nitze/1140835387">
                <img src="/img/barnes.png" alt="Barnes & Noble" />
              </a>
            </div>
          </div>
        </div>
        <Carousel />
        <Block
          title="What’s in the book"
          subtitle="The book is centered around a series of 56 tactics you can employ to better equip yourself for hacking your own bureacracy. Here are a few of our favorite:"
        >
          <div className="topics">
            <div className="topic topic--yellow">
              <div className="topic-image">
                <img src="/img/icon-mirror.svg" role="presentation" alt="" />
              </div>
              <div className="topic-content">
                Use the Bureaucracy Against Itself
              </div>
            </div>
            <div className="topic topic--red">
              <div className="topic-image">
                <img src="/img/icon-sweat.svg" role="presentation" alt="" />
              </div>
              <div className="topic-content">Sweat the Small Stuff</div>
            </div>
            <div className="topic topic--orange">
              <div className="topic-image">
                <img src="/img/icon-karass.svg" role="presentation" alt="" />
              </div>
              <div className="topic-content">Cultivate the Karass</div>
            </div>
            {!isActive && (
              <div className="topics-button">
                <button
                  className="button"
                  type="button"
                  onClick={() => setIsActive(true)}
                >
                  <span>Show more tactics</span>
                  <span>
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3047 12.9092C9.90502 13.451 9.09497 13.451 8.69528 12.9092L0.71639 2.09366C0.229346 1.43346 0.700698 0.5 1.52111 0.5L17.4789 0.500002C18.2993 0.500002 18.7707 1.43346 18.2836 2.09366L10.3047 12.9092Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            )}
            <div className={`${isActive ? `topics--visible` : `topics--hide`}`}>
              <div className="topic topic--orange">
                <div className="topic-image">
                  <img src="/img/icon-silos.svg" role="presentation" alt="" />
                </div>
                <div className="topic-content">Look Between the Silos</div>
              </div>
              <div className="topic topic--yellow">
                <div className="topic-image">
                  <img
                    src="/img/icon-paperclip.svg"
                    role="presentation"
                    alt=""
                  />
                </div>
                <div className="topic-content">Find Your Paperclip</div>
              </div>
              <div className="topic topic--red">
                <div className="topic-image">
                  <img src="/img/icon-pen.svg" role="presentation" alt="" />
                </div>
                <div className="topic-content">Pick up the Pen</div>
              </div>
              <div className="topic topic--red">
                <div className="topic-image">
                  <img src="/img/icon-knife.svg" role="presentation" alt="" />
                </div>
                <div className="topic-content">Stab People in the Chest</div>
              </div>
              <div className="topic topic--orange">
                <div className="topic-image">
                  <img
                    src="/img/icon-strangle.svg"
                    role="presentation"
                    alt=""
                  />
                </div>
                <div className="topic-content">Strangle the Mainframe</div>
              </div>
              <div className="topic topic--yellow">
                <div className="topic-image">
                  <img src="/img/icon-plane.svg" role="presentation" alt="" />
                </div>
                <div className="topic-content">Pilot is the Password</div>
              </div>
            </div>
          </div>
        </Block>
        <Block title="Blog" theme="block--light-yellow">
          <div className="blog">
            <a href="#empty" className="blog-featured">
              <div className="blog-featured-image">
                <img src="/img/blog-image.svg" alt="Blog Title" />
              </div>
              <div className="blog-featured-content">
                <h3 className="blog-featured-title">Featured Blog Title</h3>
                <div className="blog-featured-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  fringilla vestibulum sodales. Pellentesque lobortis diam elit,
                  vitae finibus dui finibus a. Praesent bibendum libero at nisl
                  aliquam, eget blandit nunc consequat.{` `}
                </div>
              </div>
            </a>
            <div className="blog-posts">
              <a href="#empty" className="blog-post">
                <span>Blog Title</span>
                <img src="/img/blog-image.svg" alt="Blog Title" />
              </a>
              <a href="#empty" className="blog-post">
                <span>Blog Title</span>
                <img src="/img/blog-image.svg" alt="Blog Title" />
              </a>
              <a href="#empty" className="blog-post">
                <span>Blog Title</span>
                <img src="/img/blog-image.svg" alt="Blog Title" />
              </a>
            </div>
          </div>
        </Block>
		<Block title="The Authors">
          <div className="author">
            <div className="author-image">
              <img src="/img/author-marina.svg" role="presentation" alt="" />
              <div className="author-social">
                <div className="author-social-link">
                  <a href="https://twitter.com/marinanitze">
                    <img
                      src="/img/icon-twitter.svg"
                      alt="Marina Nitze Twitter"
                    />
                  </a>
                </div>
                <div className="author-social-link">
                  <a href="https://www.linkedin.com/in/marinanitze/">
                    <img
                      src="/img/icon-linkedin.png"
                      alt="Marina Nitze Twitter"
                      height="22"
                      width="28"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="author-content">
              <h3 className="author-name">Marina Nitze</h3>
              <div className="author-bio">
                Over a four-year span, Marina Nitze successfully built and led a
                disruptive team inside the largest bureaucracy in the world—the
                U.S. government—and within its most challenged agency, the
                Department of Veterans Affairs. Her team drastically improved
                veterans’ access to care and services and helping to increase
                veteran trust in the agency by 25%.
              </div>
              <div className="author-read">
                <a href="https://www.marinanitze.com/">
                  Read more about Marina
                </a>
              </div>
              <h4 className="author-other">Other work:</h4>
              <ul>
                <li>
                  <a href="https://www.childwelfareplaybook.com/">
                    Child Welfare Playbook
                  </a>
                </li>
                <li>
                  <a href="https://www.childwelfareplaybook.com/">
                    Layer Aleph
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="author">
            <div className="author-image">
              <img src="/img/author-nick.svg" role="presentation" alt="" />
              <div className="author-social">
                <div className="author-social-link">
                  <a href="https://twitter.com/nicksinai">
                    <img src="/img/icon-twitter.svg" alt="Nick Sinai Twitter" />
                  </a>
                </div>
                <div className="author-social-link">
                  <a href="https://www.linkedin.com/in/nicksinai">
                    <img
                      src="/img/icon-linkedin.png"
                      height="22"
                      width="28"
                      alt="Nick Sinai Twitter"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="author-content">
              <h3 className="author-name">Nick Sinai</h3>
              <div className="author-bio">
                Nick Sinai is a venture capitalist, former Harvard faculty, and
                a former senior White House official in the Obama
                Administration. Nick writes about technology and innovation in
                government—including co-authoring a Harvard Business School case
                about the U.S. Digital Service and a Belfer Center paper on
                Medicare reform innovation. He’s been quoted in the Economist
                and the WSJ, and testified in front of Congress.
              </div>
              <div className="author-read">
                <a href="https://en.wikipedia.org/wiki/Nick_Sinai">
                  Read more about Nick
                </a>
              </div>
            </div>
          </div>
        </Block>
        <Block title="Contact Us" theme="block--yellow">
          <div className="contact">
            <p>
              Have some hacks of your own you want to share, or want us to talk
              tactics with you and your team? Drop us a line at{` `}
              <a href="mailto:us@hackyourbureaucracy.com">
                us@hackyourbureaucracy.com
              </a>
              .
            </p>
            <p>
              If you’d like, stay up to date with Hack Your Bureaucracy
              releases, events, and general goings-on by signing up for our
              email newsletter.
            </p>
            <form>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email">Your email</label>
              <div className="contact-input">
                <input type="email" name="email" id="email" />
                <button type="submit">Sign me Up</button>
              </div>
            </form>
          </div>
        </Block>
        <footer className="footer">
          <div className="footer-logo">
            <img src="/img/logo-white.svg" alt="Hack Your Beauracracy" />
            <div className="footer-copy">&copy; 2022</div>
          </div>
        </footer>
      </div>
    </main>
  );
}
