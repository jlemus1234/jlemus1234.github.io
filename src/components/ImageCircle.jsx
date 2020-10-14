import React from 'react'


import headshot from '../images/me.png'

const styles = {
    image: {
        //height: '30%',
        //borderRadius: '55%',

        //width: '100%',
        marginBottom: '0',
        //height: '100%'
    }, 
    coveringDiv: {
        //width: '40%',
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '0',
        height: '100%'
    }
}

const ImageCircle = ({image, style}) => {
    return(
        <div  style={{...styles.coveringDiv, ...style}}>
        <img src={image} style={styles.image}></img>
        </div>
    )
}

ImageCircle.defaultProps = {
    image: headshot
}

export default ImageCircle;