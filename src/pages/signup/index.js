import React from 'react';
import { SignUp } from '../../components/signin-signup/';
//fb
import { withFirebase } from '../../firebase/';
//styles
import './styles.scss';
import { motion } from 'framer-motion';

const Signup = props => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className="signup-wrapper"
  >
    <SignUp {...props} />
  </motion.div>
);

export default withFirebase(Signup);
