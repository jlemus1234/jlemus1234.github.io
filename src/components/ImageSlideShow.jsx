import React from 'react'


//import bannerImage from './../images/senior.jpg'
import testImage from './../images/senior.jpg'

const styles = {
    bannerStyling : {
    background: 'black',
    //background: 'rgb(181, 188, 199)',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: '10px 10px 0 0',
    marginBottom: '0'

},

    bannerImageStyling : { 
        maxWidth: '100%',
        maxHeight: '100%',
        marginBottom: '0',
        objectFit: 'contain'
    }   
    
};

// add cycle through images
// fix styling at some point

class ImageBanner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pic:testImage,
            imageIndex: 0
        };

        this.changePic = this.changePic.bind(this);
        
    }

    changePic(){
        console.log('ChangePic was triggered')
        let newIndex = -1;
        if(this.state.imageIndex === this.props.imageList.length-1){ // the current imageIndex is at the last
            newIndex = 0;
        }else{
            newIndex = this.state.imageIndex + 1;
        }
        console.log('Finished if statement in changepic')
        this.setState({
            imageIndex: newIndex,
            pic: this.props.imageList[newIndex]
        })
        console.log('Should be finished with changePic')

    }


    componentDidMount(){
        // only create timer if imageList exists
        console.log('Component was mounted')
        if (Array.isArray(this.props.imageList) && this.props.imageList.length){
            console.log('should be creating the timer')
            this.timerID = setInterval(
                // ()=>{console.log('Timer triggered')} , 5000
                this.changePic, 5000
            )
        }

    }

    // load single static image if that's passed in
    // load array of images and start a timer if that's passed in

    componentWillUnmount(){
        clearInterval(this.timerID)

    }

    // {styles.bannerImageStyling}

    render() {
        // Nothing passed in
        if (this.props.bannerImage === null){
            // If nothing passed in, display test default
        }else{
            this.setState({pic: this.props.bannerImage})
        }

        return (
            // create function that swaps which photo to display...
            // lets just say there are four of them
            // swap through after a few seconds...
                <div style={{...styles.bannerStyling, ...this.props.style}} className="banner">
                    <img style = {styles.bannerImageStyling} className="bannerImage" src={this.state.pic} alt="Banner Image"></img>
                </div>
        )
    }
}

ImageBanner.defaultProps = {
    bannerImage: null,
    imageList: []
}


export default ImageBanner;