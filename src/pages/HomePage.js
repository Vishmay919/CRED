import React from 'react';
import Footer from '../common/Footer/Footer';
import AppRating from '../Components/AppRating/AppRating';
import BrandsLove from '../Components/BrandsLove/BrandsLove';
import Header from '../Components/common/Header/Header';
import CredExperience from '../Components/CredExperience/CredExperience';
import CredSecurity from '../Components/CredSecurity/CredSecurity';
import CredStory from '../Components/CredStory/CredStory';
import FeelSpecial from '../Components/FeelSpecial/FeelSpecial';
import HeroSection from '../Components/HeroSection/HeroSection';
import MobileScroll from '../Components/MobileScroll/MobileScroll';
import ProductShowcase from '../Components/ProductShowcase/ProductShowcase';
import WindowPeek from '../Components/WindowPeek/WindowPeek';

const  HomePage = () => {
  return (
      <>
      <Header />
      <HeroSection />
      <ProductShowcase /> 
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <WindowPeek />
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
      </>
  );
};

export default HomePage;
