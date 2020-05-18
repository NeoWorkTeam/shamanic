import React from 'react';

const Section = (props,container) => {

const style = { 
    background:props.background,
    padding:props.padding,
    mobile:props.mobile,
    maxWidth:props.width
}

return <section style={style}  >{ container }</section>

}

export default Section
