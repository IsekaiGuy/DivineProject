import React from "react";
import "./Footer.scss";
import facebook from "../images/facebook-brands.svg";
import twitter from "../images/twitter-brands.svg";

const Footer = () => {
    return (<footer className="footer">
        <div className="footer__row-1">
            <div className="footer__column">
                <div className="container__about">
                    <h6>About</h6>
                    <p className="container__about__text">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                </div>
            </div>

            <div className="footer__column">
                <div className="container__categories">
                    <h6>Categories</h6>
                    <ul className="container__categories__links">
                        <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                        <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                        <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                        <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                        <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                        <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer__column">
                <div className="container__quick-links">
                    <h6>Quick Links</h6>
                    <ul className="container__quick-links__list">
                        <li><a href="http://scanfcode.com/about/">About Us</a></li>
                        <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                        <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                        <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                        <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                    </ul>
                </div>
            </div>

        </div>

        <div className="footer__row-2">
            <div className="container__copyright">
                <p className="copyright">Copyright &copy; 2021 All Rights Reserved by
                <a href="./">Scanfcode</a>.
            </p>
            </div>

            <div className="container__social-icons">
                <ul className="container__social-icons__list">
                    <li><a className="facebook" href="#"><img src={facebook} alt="facebook"/></a></li>
                    <li><a className="twitter" href="#"><img src={twitter} alt="twitter"/></a></li>
                </ul>
            </div>

        </div>
    </footer>)
}

export default Footer;