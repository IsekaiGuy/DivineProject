import React from "react";
import './Footer.scss';
//Icons
import facebook from "../../images/facebook-brands.svg";
import twitter from "../../images/twitter-brands.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row-1">
        <div className="footer__column">
          <div className="container__about">
            <h5 className="heading5">About</h5>
            <p className="container__about__text">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>
        </div>

        <div className="footer__column">
          <div className="container__categories">
            <h5 className="heading5">Categories</h5>
            <ul className="container__categories__links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">C</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  UI Design
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Android</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Templates</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__column">
          <div className="container__quick-links">
            <h5 className="heading5">Quick Links</h5>
            <ul className="container__quick-links__list">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__row-2">
        <div className="container__copyright">
          <p className="copyright">
            Copyright &copy; 2021 All Rights Reserved by
            <a href="./">Scanfcode</a>.
          </p>
        </div>

        <div className="container__social-icons">
          <ul className="container__social-icons__list">
            <li>
              {/*<img src={facebook} alt="facebook" className="facebook" />*/}
            </li>
            <li>
              {/*<img src={twitter} alt="twitter" className="twitter" />*/}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
