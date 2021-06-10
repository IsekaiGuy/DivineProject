import React from "react";
import arrow from "../images/down-arrow.svg";

const parentNodeToggler = (e) => {
  e.target.parentNode.classList.toggle("active");
};

const Faq = ({ children }) => {
  return (
    <div
      className="faq"
      onClick={(e) => {
        e.target.classList.toggle("active");
      }}
    >
      {children}
    </div>
  );
};

const FaqsContainer = () => {
  return (
    <div className="faq__section">
      <div className="heading3-container">
        <h3 className="heading3">Frequently Asked Questions</h3>
      </div>

      <div className="faqs-container">
        <Faq>
          <h4
            className="faq-title"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          >
            Why shouldn't we trust atoms?
          </h4>
          <p
            className="faq-text"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          >
            They make up everything.
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="arrow"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          />
        </Faq>

        <Faq>
          <h4
            className="faq-title"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          >
            What do you call someone with no body and no nose?
          </h4>
          <p
            className="faq-text"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          >
            Nobody knows.
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="arrow"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          />
        </Faq>

        <Faq>
          <h4
            className="faq-title"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          >
            What's the object-oriented way to become wealthy?
          </h4>
          <p
            className="faq-text"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          >
            Inheritance.
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="arrow"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          />
        </Faq>

        <Faq>
          <h4
            className="faq-title"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          >
            What is: 1 + 1?
          </h4>
          <p
            className="faq-text"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          >
            Depends on who are you asking.
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="arrow"
            onClick={(e) => {
              parentNodeToggler(e);
            }}
          />
        </Faq>
      </div>
    </div>
  );
};

export default FaqsContainer;
