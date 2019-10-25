import React from 'react'

import { Link } from 'gatsby'

import vidTest from '../images/clips/testClip3.mp4'
import imgTest from '../images/me.png'

const styles = {
    projectWindowStyle: {
        //display: 'block',
        background: 'gray',
        width: '60%',
        //borderRadius: '25px',
        //marginBottom: '70px',
        position: 'relative'
    },

    headerStyle: {
        //display: 'absolute',
        position: 'absolute',
        top: '0',
        color: 'white',
        textAlign: 'center',
        marginBottom: '0'

    },

    descriptionStyle: {
        position: 'absolute',
        bottom:'0',
        color: 'white',
        textAlign: 'center',
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

                        <div style={styles.headerStyle}>
                            <h1>
                                {this.props.title}
                            </h1>
                        </div>

                        <div style={styles.descriptionStyle}>
                            <p>
                                {this.props.description}
                            </p>
                        </div>
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