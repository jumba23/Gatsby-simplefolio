import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm a Software Developer."}
          </h1>
          <h4 className="hero-title">
            {subtitle || 'I specialize in building web applications with modern technologies.'}
            <br />
            {subtitle || 'React, Next, Node.js, SQL, and more.'}
          </h4>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'About Me'}
              </Link>
            </span>

            <span className="cta-btn cta-btn--hero">
              <Link to="projects" smooth duration={1000}>
                {cta || 'Projects'}
              </Link>
            </span>

            <span className="cta-btn cta-btn--hero">
              <Link to="contact" smooth duration={1000}>
                {cta || 'Contact'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
      {/* <span className="to-about">
        <Link to="about" smooth duration={1000}>
          <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
        </Link>
      </span> */}
    </section>
  );
};

export default Header;
