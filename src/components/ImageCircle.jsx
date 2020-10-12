import React from 'react'


import headshot from '../images/me.png'

const styles = {
    circle: {
        //height: '30%',
        borderRadius: '55%'
    }
}

const ImageCircle = ({image, style}) => {
    return(
        <img src={image} style={{...styles.circle, ...style}}></img>
    )
}

ImageCircle.defaultProps = {
    image: headshot
}

export default ImageCircle;