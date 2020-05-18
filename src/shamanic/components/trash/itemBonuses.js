import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'


const ItemBonuses = ( props ) => {

        return (
            <div className="itemBonuses">
                <div className="wrapper">
                    <img alt={ props.title } src={ props.avatar }></img>
                     <p>{ props.title }</p>
                 </div>
            </div>
        )

}


export default ItemBonuses




