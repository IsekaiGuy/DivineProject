import React from "react";

const Heading3 = () => (
  <div className="heading3-container">
    <h3 className="heading3">Frequently Asked Questions</h3>
  </div>
);

const FaqButton = () => {
  return (
    <button
      onClick={(e) => {
        if (e.target.classList.contains("fas")) {
          e.target.parentNode.parentNode.classList.toggle("active");
        } else {
          e.target.parentNode.classList.toggle("active");
        }
      }}
      className="faq-toggle"
    >
      <i className="fas fa-chevron-down"></i>
      <i className="fas fa-times"></i>
    </button>
  );
};

const Faq = () => {
  return (
    <div className="faq__section">
      <Heading3 />
      <div className="faqs-container">
        <div className="faq">
          <h4 className="faq-title">Why shouldn't we trust atoms?</h4>
          <p className="faq-text">They make up everything.</p>
          <FaqButton />
        </div>
        <div className="faq">
          <h4 className="faq-title">
            What do you call someone with no body and no nose?
          </h4>
          <p className="faq-text">Nobody knows.</p>
          <FaqButton />
        </div>
        <div className="faq">
          <h4 className="faq-title">
            What's the object-oriented way to become wealthy?
          </h4>
          <p className="faq-text">Inheritance.</p>
          <FaqButton />
        </div>
        {/* {/* <div className="faq">
		<h4 className="faq-title">
			How many tickles does it take to tickle an octopus?
		</h4>
		<p className="faq-text">
			Ten-tickles!
		</p>
		<FaqButton />
	</div> */}
        <div className="faq">
          <h4 className="faq-title">What is: 1 + 1?</h4>
          <p className="faq-text">Depends on who are you asking.</p>
          <FaqButton />
        </div>{" "}
      </div>
    </div>
  );
};

export default Faq;
