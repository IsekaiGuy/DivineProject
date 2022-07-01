// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import {useScroll} from "../../hooks/useScroll";
import { slideInLeft, slideInRight } from "../../animations";
import Buttons from "../Buttons/Buttons";
import './BecomeMaster.scss';

const BecomeMaster = () => {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <div className="become-master__section">
      <h2 className="heading2">Become a Divine Master</h2>

      {/* //Block-1 */}
      <div className="become-master__section__blocks">
        <motion.div
          variants={slideInLeft}
          animate={controls}
          initial="hidden"
          ref={element}
          className={`become-master__section__text-block1`}
        >
          <motion.p className={`become-master__section__text `}>
            Do you have a gift, which no one understand?
          </motion.p>
        </motion.div>

        {/* //Block-2 */}
        <motion.div
          variants={slideInRight}
          animate={controls1}
          initial="hidden"
          ref={element1}
          className={`become-master__section__text-block2`}
        >
          <motion.p className={`become-master__section__text `}>
            You can see what other people can't? Feel the untouchable of the
            Spiritual world?
          </motion.p>
        </motion.div>

        {/* //Block-3 */}
        <motion.div
          variants={slideInLeft}
          animate={controls2}
          initial="hidden"
          ref={element2}
          className={`become-master__section__text-block3`}
        >
          <motion.p className={`become-master__section__text `}>
            Want to use your talent to help people, to change the world around
            and to make money?
          </motion.p>
        </motion.div>
      </div>

      <Buttons value1="Read FAQ" value2="Master's registration" />
    </div>
  );
};

export default BecomeMaster;
