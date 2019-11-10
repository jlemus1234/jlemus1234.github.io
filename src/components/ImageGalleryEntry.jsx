import React from 'react'

import test from '../assets/SenSit/SenSit1.jpg'

class ImageGalleryEntry extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    expandImg(){
    }

    render(){
        return(
            <div style={styles.container}>
                <img style={styles.entry} src={this.props.imgsrc} alt="Gallery Entry"></img>
            </div>
        )
    }
}

ImageGalleryEntry.defaultProps = {
    imgsrc : test
}

const styles = {
    entry:{
        width: 300,
        height: 300,
        padding: 10
    },

}

export default ImageGalleryEntry;