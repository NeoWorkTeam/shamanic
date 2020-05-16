import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import '../banner/banner.css'



const Banner = () => {

    const [data,setData] = useState({
        "id":1,
        "title":"Neowork",
        "iframe":"http://neowork.co/Banner.mp4"
    })
     
        return (<header>
            <div className="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
              <source src={data.iframe} type="video/mp4" />
            </video>
          </header>)

}


export default Banner




