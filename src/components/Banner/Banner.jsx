import React from 'react';
import bannerImage from '../../assets/banner_img.jpg';
import './Banner.css';

export default function Banner() {
  return (
    <div
      className='banner-container'
      data-testid='Banner'>
      <img
        className='banner-img'
        src={bannerImage}
        alt='Banner'
      />
      <div className='banner-text'>Godavari Foodies</div>
    </div>
  );
}
