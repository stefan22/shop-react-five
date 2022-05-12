import React from 'react'
import { SignUp } from '../../components/signin-signup/'
//styles
import './styles.scss'
import { motion } from 'framer-motion'
import signCover from '../../assets/images/covid.png'

const Signup = props => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="signin-up-wrapper">
      <div className="row d-flex justify-content-center px-3">
        <div className="col-12 col-sm-6 px-0 px-sm-3">
          <SignUp {...props} />
        </div>
        <div className="col-12 col-sm-5 px-0 px-sm-3">
          <img
            className={'img-fluid m-0 m-sm-3 signup'}
            src={signCover}
            alt={'sign-in'}
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Signup
