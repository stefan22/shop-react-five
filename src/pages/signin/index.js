import React from 'react';
//comps
import { SignIn } from '../../components/signin-signup/';
//styles
import './styles.scss';
import { motion } from 'framer-motion';

const Signin = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="signin-up-wrapper"
    >
      <SignIn />
    </motion.div>
  );
};

export default Signin;
