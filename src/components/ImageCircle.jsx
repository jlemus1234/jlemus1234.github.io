import React from 'react'


import headshot from '../images/me.png'

const styles = {
    circle: {
        //height: '30%',
        borderRadius: '55%'
    }
}

const ImageCircle = () => {
    return(
        <img src={headshot} style={styles.circle}></img>
    )
}


export default ImageCircle;