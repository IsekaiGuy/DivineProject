import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Buttons from "./Buttons";

const Heading2 = () => {
  return (
    <div className="heading2__container">
      <h2 className="heading2">Become a Soul Master</h2>
    </div>
  );
};

const BecomeMaster = () => {
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    inView
      ? leftAnimation.start({
          x: 0,
          transition: {
            type: "spring",
            duration: 2,
          },
        })
      : leftAnimation.start({ x: -100 });

    inView
      ? rightAnimation.start({
          x: 0,
          transition: {
            type: "spring",
            duration: 2,
          },
        })
      : rightAnimation.start({ x: 100 });
  });

  return (
    <>
      <div className="master__section">
        <Heading2 />

        <motion.div
          animate={leftAnimation}
          className={`master__section__text-block1`}
        >
          <p ref={ref} className={`master__section__text `}>
            Do you have a gift, which no one understand?
          </p>
        </motion.div>

        <motion.div
          animate={rightAnimation}
          className={`master__section__text-block2`}
        >
          <p ref={ref} className={`master__section__text `}>
            You can see what other people can't? Feel the untouchable of the
            Spiritual world?
          </p>
        </motion.div>

        <motion.div
          animate={leftAnimation}
          className={`master__section__text-block3`}
        >
          <p ref={ref} className={`master__section__text `}>
            Want to use your talent to help people, to change the world around
            and to make money?
          </p>
        </motion.div>

        {/* <motion.div animate={rightAnimation} className={`master__section__text-block4`}>
                    <p ref={ref} className={`master__section__text `}>Example4</p>
            </motion.div> */}

        <Buttons value1="Read FAQ" value2="Master's registration" />
      </div>
    </>
  );
};

export default BecomeMaster;
