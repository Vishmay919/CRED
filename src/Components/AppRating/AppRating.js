import React from 'react';
import Button from '../common/Button/Button';
import './AppRating.css'

const getIosPrefix = ()=>{
  return(
    <img
    src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
    className="app-rating-icon"
    alt=''
  />
  )
}

const getAndroidPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
      className="app-rating-icon"
      alt=''
    />
  );
};

const AppRating = () => {
  return <div className='max-width flex app-rating'>
    <div className='app-rating-block flex flex-col'>
      <div className='flex absolute-center'>
        <div className='app-rating-value flex flex-col'>
        4.8
        <img className='app-rating-stars' src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" alt='4.8' />
        </div>
        <div className='app-rating-platform'>app<br/>store</div>
      </div>
      <div className='non-mobile'>
        <Button 
        prefix={getIosPrefix()} 
        text="Download the app" 
        customClass='app-rating-button' />
      </div>
    </div>

    <div className="flex app-rating-block flex-col">
        <div className="flex absolute-center">
          <div className="app-rating-value flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              className="app-rating-stars"
              alt='4.7'
            />
          </div>
          <div className="app-rating-platform">
            play <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            prefix={getAndroidPrefix()}
            text="Download the app"
            customClass="app-rating-button"
          />
        </div>
      </div>
      <div className="only-mobile flex absolute-center">
        <Button text="Download the app" />
      </div>
    
  </div>;
};

export default AppRating;
