import React from 'react'

import ImageGalleryEntry from '../components/ImageGalleryEntry'

class ImageGallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    renderChildren(){
        console.log("In Image Gallery")
        let images = []
        for (var i = 0; i < this.props.imgList.length; i++) {
            images.push(
                <ImageGalleryEntry key={this.props.imgList[i]} imgSrc = {this.props.imgList[i]}/>
            )
        }
        return images
    }

    render(){
        return(
            <div style={styles.container}>
                {this.renderChildren()}
            </div>
        )
    }
}

const styles = {
    container : {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        //justifyContent: 'space-evenly',
        justifyContent: 'space-between',
        marginTop: 80
    }
}

ImageGallery.defaultProps = {
    imgList: []
}

export default ImageGallery;