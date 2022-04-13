import React from 'react';
import { SignUp } from '../../components/signin-signup/';
//fb
import { withFirebase } from '../../firebase/';
//styles
import './styles.scss';
//import { motion } from 'framer-motion';

const Signup = props => <SignUp {...props} />


export default withFirebase(Signup);
