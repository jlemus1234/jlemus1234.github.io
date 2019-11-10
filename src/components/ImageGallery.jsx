import React from 'react'

class ImageGallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div style={styles.container}>
                {this.props.children}
            </div>
        )
    }
}

const styles = {
    container : {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginTop: 80
    }
}

export default ImageGallery;