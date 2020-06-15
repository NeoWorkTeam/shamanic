import React from 'react';

import classes from '../../style2.css';
import video from '../../img/banner.mp4'

const BackgroundVideo = () => {
    const videoSource = "https://www.w3schools.com/tags/movie.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className="Video" >
                <source src={video} type="video/mp4" />
                
            </video>

        
        </div>
    )
}

export default BackgroundVideo