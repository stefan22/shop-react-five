import React from 'react';
//comps
import { SignInForm } from '../../components/signin-signup';
//styles
import './styles.scss';
import { motion } from 'framer-motion';
import signCover from '../../assets/images/open2.jpeg'

const Signin = props => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="signin-up-wrapper"
    >
      <div className="row row-md-cols-2 justify-content-center">
          <div className="col-12 col-xl-5">
            <SignInForm {...props} />
          </div>
          <div className="col-12 offset-xl-1 col-xl-5 px-5">
            <img className={"img-fluid mt-5 mt-xl-0"} src={signCover} alt={"sign-in"}
                 width={1920}  height={1080}


            />

          </div>

      </div>
    </motion.div>
  );
};

export default Signin
