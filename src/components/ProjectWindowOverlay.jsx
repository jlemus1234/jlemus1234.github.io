import React from 'react'

import { Link } from 'gatsby'

import vidTest from '../images/clips/testClip3.mp4'
import imgTest from '../images/me.png'

const styles = {
    projectWindowStyle: {
        background: 'white',
        width: '60%',
        position: 'relative',
        marginBottom: '30px'
    },

    headerPara: {
        display: 'block',
        width: '100%',
        position:'absolute',
        top: '0',

        color: 'rgb(181, 188, 199)',
        textAlign: 'center',

        marginBottom: '0'
    },

    descriptionPara: {
        display: 'block',
        width: '100%',
        position: 'absolute',
        bottom: '5%',

        color: 'rgb(181, 188, 199)',
        textAlign: 'center',
        fontWeight: 'bold',

        marginBottom: '0'
    }
}

class ProjectWindow extends React.Component {
    constructor(props) {
        // required props include a name and an image/video
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Link to={this.props.linkTo}>
            <div style={{ ...styles.projectWindowStyle, ...this.props.alignmentDir }} id="projectWindow">
                        <video muted autoPlay loop width="100%">
                            <source src={this.props.videoSource} type="video/mp4"></source>
                            <img src={this.props.imageSource}></img>
                            Your browser does not support the video tag
                        </video>

                        {/* <div style={styles.headerStyle}> */}
                            <h1 style={styles.headerPara}>
                                {this.props.title}
                            </h1>
                        {/* </div> */}

                        {/* <div style={styles.descriptionStyle}> */}
                            <p style={styles.descriptionPara}>
                                {this.props.description}
                            </p>
                        {/* </div> */}
                </div>
            </Link>


        )
    }
}

ProjectWindow.defaultProps = {
    videoSource: vidTest,
    imageSource: imgTest,
    title: 'title',
    description: 'description',
    linkTo: '/'
}
export default ProjectWindow;