import React from 'react';
import Carousel from 'nuka-carousel';
import ItemCourses from "../itemCourses/itemCouses"


import './itemCarouselStyles.css'

import Storage from '../storage'
const storage = Storage()

export default class extends React.Component {

    
  render() {
    return (
      <Carousel 
      wrapAround  
      renderCenterLeftControls={({ previousSlide }) => (
        <button onClick={previousSlide}>   
        
        <svg width="72" height="119" viewBox="0 0 72 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71.0234 117.961L2.48038 59.5855L67.9773 1.0006" stroke="#2C2323" stroke-width="2"/>
        </svg>

        
         </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide}>   
        
        <svg width="70" height="119" viewBox="0 0 70 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L68 61.1402L1 118" stroke="#2C2323" stroke-width="2"/>
</svg>

        
         </button>
      )} >

      { storage.modules.map(( item,value ) => ( <ItemCourses { ...item } /> ) ) }  
      
      </Carousel>
    );
  }
}