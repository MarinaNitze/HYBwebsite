import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Carousel from '@/components/Carousel';
import Block from '@/components/Block';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  return (
    <main>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:title" content="Hack Your Bureaucracy on sale now" />
      <meta property="og:description" content="Hack Your Bureaucracy on sale now" />
      <meta property="og:image" content="/img/book.png" />
      <meta property="og:url" content="https://www.hackyourbureaucracy.com" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "mainEntity": {
            "@type": "Book",
            "author": "http://www.example.com/author.html",
            "bookFormat": "http://schema.org/EBook",
            "datePublished": "2022-09-13",
            "image": "https://www.hackyourbureaucracy.com/img/header.svg",
            "inLanguage": "English",
            "isbn": "9780306827754",
            "name": "Hack Your Bureaucracy",
            "numberOfPages": "1234",
            "publisher": "Hachette Books"
          }
        }`}
      </script>
      <script>{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '562225513945244');
          fbq('track', 'PageView');
      `}</script>
      <script type="text/javascript">{`
          _linkedin_partner_id = "4305058";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      `}</script>
      <script type="text/javascript">{`
          (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
      `}</script>
	  <script
	            dangerouslySetInnerHTML={{
	              __html: `
	          !function(f,b,e,v,n,t,s)
	          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	          n.queue=[];t=b.createElement(e);t.async=!0;
	          t.src=v;s=b.getElementsByTagName(e)[0];
	          s.parentNode.insertBefore(t,s)}(window, document,'script',
	          'https://connect.facebook.net/en_US/fbevents.js');
	          fbq('init', '562225513945244');
	          fbq('track', 'PageView'); `,
	            }}
	          />
	          <noscript>
	            {`<img height="1" width="1" style={"display:none"} src="https://www.facebook.com/tr?id=562225513945244&ev=PageView&noscript=1" />`}
	          </noscript>
    </Helmet>
      <div className="wrapper">
        <header className="hero">
          <div className="hero-inner">
            <div className="hero-bar">
              <div className="hero-bar-logo">
                <img src="/img/logo.svg" alt="Hack Your Bureaucracy" />
              </div>
              <div className="hero-bar-text">
                <strong>Order today on</strong>
                <span>
                  <a href="https://amzn.to/3yOJTx0" onclick="window.lintrk('track', { conversion_id: 9590466 });">
                    Amazon
                  </a>
                  {`, `}
                  <a href="https://bit.ly/3yQT681" onclick="window.lintrk('track', { conversion_id: 9590466 });">
                    Indiebound
                  </a>
                  {`, `}
                  <a href="https://bit.ly/3RozuiW" onclick="window.lintrk('track', { conversion_id: 9590466 });">
                    Bookshop.org
                  </a>
                  {`, `}
                  or{` `}
                  <a href="https://bit.ly/3NNLSFT" onclick="window.lintrk('track', { conversion_id: 9590466 });">
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
Whether you just started your first entry-level job, run the entire company, or just feel trapped by your condo association bylaws, it’s time to learn how to get big things done. From local government to the White House, Harvard to the world of venture capital, Marina Nitze and Nick Sinai have taken on some of the world’s most challenging bureaucracies—and won. 

<p>Now, they bring their years of experience to you, teaching you strategies anyone can use to improve your organization through their own stories and those of fellow bureaucracy hackers. Regardless of your industry, role, or team, Hack Your Bureaucracy shows how to get started, take initiative on your own, and transform your ideas into impact.</p>
              
            </div>
            <div className="intro-date">AVAILABLE EVERYWHERE!</div>
            <div className="intro-preorder">Order today from</div>
            <div className="intro-links">
              <a href="https://amzn.to/3yOJTx0">
                <img src="/img/amazon.png" alt="Amazon" />
              </a>
              <a href="https://bit.ly/3RozuiW">
                <img src="/img/bookshop.png" alt="Bookshop.org" />
              </a>
              <a href="https://bit.ly/3yQT681">
                <img src="/img/indiebound.png" alt="Indiebound" />
              </a>
              <a href="https://bit.ly/3NNLSFT">
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
            <a href="https://medium.com/hack-your-bureaucracy/day-one-of-hack-your-bureaucracy-a63e0bc3f42d" className="blog-featured">
              <div className="blog-featured-image">
                <img src="img/onsale_banner.jpg" alt="Hack Your Bureaucracy: On Sale Now" />
              </div>
              <div className="blog-featured-content">
                <h3 className="blog-featured-title">Day One of Hack Your Bureaucracy</h3>
                <div className="blog-featured-description">
                  We’re excited to announce our new book, Hack Your Bureaucracy: Get Things Done No Matter Your Role On Any Team. It’s available now! Click here to read more.{` `}
                </div>
              </div>
            </a>
            <a href="https://medium.com/hack-your-bureaucracy/write-it-down-how-a-written-memo-can-help-you-gain-support-for-your-ideas-81de0a06711f" className="blog-featured">
              <div className="blog-featured-image">
                <img src="/img/write-it-down.jpg" alt="Write It Down: How a Written Memo Can Help You Gain Support For Your Ideas" />
              </div>
              <div className="blog-featured-content">
                <h3 className="blog-featured-title">Write It Down: How a Written Memo Can Help You Gain Support For Your Ideas</h3>
                <div className="blog-featured-description">
                  How can you get your coworkers to support your ideas at work? It sounds boring -- but trust us: write it down!{` `}
                </div>
              </div>
            </a>
            <a href="https://medium.com/hack-your-bureaucracy/bureaucracy-hacking-tactics-to-create-a-parent-nation-552877d52bae" className="blog-featured">
              <div className="blog-featured-image">
                <img src="/img/parent-nation.jpeg" alt="Bureaucracy Hacking Tactics to Create a Parent Nation" />
              </div>
              <div className="blog-featured-content">
                <h3 className="blog-featured-title">Bureaucracy Hacking Tactics to Create a Parent Nation</h3>
                <div className="blog-featured-description">
                  Our ideas for making the ideas in Dana Suskind's new book, <em>Parent Nation</em>, a reality.{` `}
                </div>
              </div>
            </a>
            <a href="https://medium.com/hack-your-bureaucracy/how-thomas-jeffersons-cousin-used-this-tactic-to-create-the-u-s-supreme-court-out-of-spite-c3947072a0ec" className="blog-featured">
              <div className="blog-featured-image">
                <img src="/img/supreme-court.png" alt="How Thomas Jefferson’s Cousin Used This Tactic to Create the U.S. Supreme Court Out of Spite" />
              </div>
              <div className="blog-featured-content">
                <h3 className="blog-featured-title">How Thomas Jefferson’s Cousin Used This Tactic to Create the U.S. Supreme Court Out of Spite</h3>
                <div className="blog-featured-description">
                  John Marshall found the perfect way to screw over his cousin, Thomas Jefferson: by creating the modern-day U.S. Supreme Court.{` `}
                </div>
              </div>
            </a>
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
                  <a href="https://layeraleph.com/">
                    Layer Aleph
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="author">
            <div className="author-image">
              <img src="/img/author-nick.jpeg" role="presentation" alt="" />
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
                Nick Sinai is a venture capitalist, adjunct Harvard faculty, and a former senior White House official in the Obama Administration. As a Senior Advisor at Insight Partners, Nick serves on the board of Rebellion Defense, Hawkeye360, LeoLabs, and Shift5. He writes and teaches about technology in government, and serves as a commissioner on the Atlantic Council's Commission on Remaking the US Defense Innovation System. He’s been quoted in the Economist and the WSJ, and testified in front of Congress. Recently, Nick co-founded the U.S. Digital Corps, a new two-year federal fellowship for early-career technologists, launched in the summer of 2021.
              </div>
              <div className="author-read">
                <a href="https://en.wikipedia.org/wiki/Nick_Sinai">
                  Read more about Nick
                </a>
              </div>
              <h4 className="author-other">Other work:</h4>
              <ul>
                <li>
                  <a href="https://nicksinai.medium.com/">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://www.insightpartners.com/team/nick-sinai">
                    Insight Partners
                  </a>
                </li>
                <li>
                  <a href="https://www.hks.harvard.edu/faculty/nick-sinai">
                    Harvard Kennedy School
                  </a>
                </li>
              </ul>
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
