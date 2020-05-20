import React from 'react';
import Carousel from 'nuka-carousel';
import ItemCourses from "../itemCourses/itemCouses"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './itemCarouselStyles.css'

import Storage from '../storage'
const storage = Storage()

export default class extends React.Component {

    
  render() {
    return (
      <Carousel 
      wrapAround  
      renderCenterLeftControls={({ previousSlide }) => (
        <button onClick={previousSlide}>   <FontAwesomeIcon icon={faAngleLeft} size="1x" /> </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide}>   <FontAwesomeIcon icon={faAngleRight} size="1x" />  </button>
      )} >

      { storage.modules.map(( item,value ) => ( <ItemCourses { ...item } /> ) ) }  
      
      </Carousel>
    );
  }
}