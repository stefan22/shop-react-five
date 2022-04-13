import React from 'react';
//import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../firebase/';
import { compose } from 'react-recompose';
//comps
import { SignIn } from '../../components/signin-signup/';
import Signup from "../signup";
//styles
import './styles.scss';
import { motion } from 'framer-motion';

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
          <div className="col-12 col-sm-5">
            <SignIn {...props} />
          </div>
          <div className="col-12 offset-sm-1 col-sm-5">
            <Signup />
          </div>

      </div>
    </motion.div>
  );
};

export default compose(withFirebase)(Signin);
