import React from 'react'


import headshot from '../images/me.png'

const styles = {
    circle: {
        //height: '30%',
        borderRadius: '55%'
    }, 
    coveringDiv: {
        //borderRadius: '50%',
        //overflow: 'hidden',
        //height: 
        //width: '100%'
    }
}

const ImageCircle = ({image, style}) => {
    return(
        <div  style={styles.coveringDiv}>
        <img src={image} style={{...styles.circle, ...style}}></img>
        </div>
    )
}

ImageCircle.defaultProps = {
    image: headshot
}

export default ImageCircle;