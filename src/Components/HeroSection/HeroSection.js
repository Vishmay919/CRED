import React from 'react';
import Button from '../common/Button/Button';
import './HeroSection.css'

const HeroSection = () => {
  return <div className='hero-section-wrapper'>
      <div className='flex absolute-center hero-claim-label'>
        <div>pay credit card bill. earn guaranteed ₹200 back.</div>
        <div className='claim-anchor'>
            claim now
            <img className='claim-arrow' src='https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png' alt='arrow' />
        </div>
      </div>
      <div className='max-width flex absolute-center flex-col hero-section'>
          <div className='hero-heading'>rewards for paying credit card bills.</div>
          <div className='hero-subheading'>join 7.5M+ members who win rewards and cashbacks everday</div>
          <Button text="Download CRED" />
      </div>
  </div>;
};

export default HeroSection;
