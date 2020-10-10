import React from 'react'


import headshot from './../images/me.png'

const styles = {
    circle: {
        height: '500px',
        borderRadius: '10'
    }
}

const ImageCircle = () => {
    return(
        <img source={headshot} style={styles.circle}></img>
    )
}


export default ImageCircle;