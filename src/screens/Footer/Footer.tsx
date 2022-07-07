import React from "react";
// @ts-ignore
import bemClassName from 'bem-classnames-maker';

import './Footer.scss';

const Footer = () => {
  const bem = bemClassName('Footer');

  return (
    <footer className={bem()}>
      <div className={bem('column')}>
        <p className={bem('text')}>
          <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
          help the upcoming programmers with the code. Scanfcode focuses on
          providing the most efficient code or snippets as the code wants to
          be simple. We will help programmers build up concepts in different
          programming languages that include C, C++, Java, HTML, CSS,
          Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
        </p>
      </div>

      <div className={bem('column')}>
        <h5 className={bem('title')}>
          Categories
        </h5>
        <ul>
          <li>
            <a href="">
              Some category
            </a>
          </li>
          <li>
            <a href="">
              Some category
            </a>
          </li>
          <li>
            <a href="">
              Some category
            </a>
          </li>
        </ul>
      </div>

      <div className={bem('column')}>
        <h5 className={bem('title')}>
          Links
        </h5>
        <ul>
          <li>
            <a href="">
              Some link
            </a>
          </li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
