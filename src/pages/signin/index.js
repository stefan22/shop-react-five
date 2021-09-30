import React from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../firebase/';
import { compose } from 'react-recompose';
//comps
import { SignIn } from '../../components/signin-signup/';
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
    <SignIn {...props} />
    </motion.div>
  );
};

export default compose(
  withRouter,
  withFirebase
)(Signin);
