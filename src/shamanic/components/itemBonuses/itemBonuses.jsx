import React from 'react';
import './itemBonusesStyles.css'



const ItemBonuses = ( props ) => {

        return (
            <div className="ItemBonuses">
                <div className="wrapper">
                    <img alt={ props.title } src={ props.avatar }></img>
                     <p>{ props.title }</p>
                 </div>
            </div>
        )

}


export default ItemBonuses




