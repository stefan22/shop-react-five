import React from 'react';
import ProductsDirectory from '../../components/products-directory';
import { motion } from 'framer-motion';
import './styles.home.scss';

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className="home-wrapper"
  >
    <h1>We're loaded! Browse our huge inventory!</h1>
    <ProductsDirectory />
  </motion.div>
);

export default HomePage;
