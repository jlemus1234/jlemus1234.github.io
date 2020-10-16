import React from 'react'


import headshot from '../images/me.png'

const styles = {
    image: {
        //height: '30%',
        //borderRadius: '55%',

        //width: '100%',
        marginBottom: '0',
        width: '100%',
        height: 'auto'
        //height: '100%'
    }, 
    coveringDiv: {
        //width: '40%',
        position: 'relative',
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '0',
        width: '300px',
        height: '300px'

        
        //height: '100%'
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