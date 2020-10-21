import React from 'react'

const styles = {
    bannerStyling: {
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '0'

    },
    bannerImageStyling: {
        maxWidth: '100%',
        maxHeight: '100%',
        marginBottom: '0',
        objectFit: 'contain'
    }
};

class ImageSlideShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageIndex: 0
        };

        this.changePic = this.changePic.bind(this);
    }

    changePic() {
        let newIndex = this.state.imageIndex;
        if (newIndex === this.props.imageList.length - 1) {
            newIndex = 0;
        } else {
            newIndex++;
        }
        this.setState({ imageIndex: newIndex })
    }

    componentDidMount() {
        // only create timer if imageList exists
        if (Array.isArray(this.props.imageList) && this.props.imageList.length > 1) {
            this.timerID = setInterval(
                this.changePic, 5000
            )
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID)

    }

    render() {
        return (
            <div style={{ ...styles.bannerStyling, ...this.props.style }} className="banner">
                <img style={styles.bannerImageStyling} className="bannerImage" src={this.props.imageList[this.state.imageIndex]} alt="Banner"></img>
            </div>
        )
    }
}

ImageSlideShow.defaultProps = {
    imageList: []
}


export default ImageSlideShow;