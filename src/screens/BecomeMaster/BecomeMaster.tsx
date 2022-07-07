// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import {useScroll} from "../../hooks/useScroll";
import { slideInLeft, slideInRight } from "../../animations";
import Buttons from "../../components/Buttons/Buttons";
import bemClassName from 'bem-classnames-maker';

import './BecomeMaster.scss';

const BecomeMaster = () => {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const bem = bemClassName('BecomeMaster');

  return (
    <section className={bem()}>
      <h2 className="title">
        Become a Divine Master
      </h2>

      {/* //Block-1 */}
      <div className={bem('container')}>
        <motion.div
          variants={slideInLeft}
          animate={controls}
          initial="hidden"
          ref={element}
          className={bem('content', ['animation1'])}
        >
          <motion.h5>
            Do you have a gift, which no one understand?
          </motion.h5>
        </motion.div>

        {/* //Block-2 */}
        <motion.div
          variants={slideInRight}
          animate={controls1}
          initial="hidden"
          ref={element1}
          className={bem('content', ['animation2'])}
        >
          <motion.h5>
            You can see what other people can't? Feel the untouchable of the
            Spiritual world?
          </motion.h5>
        </motion.div>

        {/* //Block-3 */}
        <motion.div
          variants={slideInLeft}
          animate={controls2}
          initial="hidden"
          ref={element2}
          className={bem('content', ['animation3'])}
        >
          <motion.h5>
            Want to use your talent to help people, to change the world around
            and to make money?
          </motion.h5>
        </motion.div>
      </div>

      <Buttons
          fillBtnText="Read FAQ"
          raiseBtnText="Master's registration"
      />
    </section>
  );
};

export default BecomeMaster;
