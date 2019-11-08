import React from 'react'

import { Link } from 'gatsby'

import vidTest from '../images/clips/testClip3.mp4'
import imgTest from '../images/me.png'

const styles = {
    link: {
        width: '60%',
        display: 'block', // This makes the link's width control width of entire window
        textDecoration: 'none'
    },
    projectWindow: {
        display: 'block',
        background: 'rgb(240,240,240)',
        borderRadius: '25px',
        marginBottom: '70px',

        fontFamily: 'Arial, sansSerif'
    },

    headerPara: {
        fontFamily: 'Arial, sansSerif',

        display: 'inline-block',
        width: '100%',

        textAlign: 'center',
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold',

        marginBottom: '5px',
    },

    descriptionPara: {
        fontFamily: 'Arial, sansSerif',

        display: 'block',
        width: '100%',

        textAlign: 'center',
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold',

        marginBottom: '5px',
    }

}

class ProjectWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Link style={{ ...styles.link, ...this.props.alignmentDir }} to={this.props.linkTo}>
                <div style={{ ...styles.projectWindow }} id="projectWindow">
                    <h1 style={styles.headerPara}>
                        {this.props.title}
                    </h1>
                    <video muted autoPlay loop width="100%">
                        <source src={this.props.videoSource} type="video/mp4"></source>
                        <img src={this.props.imageSource} alt="Project demo"></img>
                        Your browser does not support the video tag
                    </video>
                    <p style={styles.descriptionPara}>
                        {this.props.description}
                    </p>
                </div>
            </Link>

        )
    }
}

ProjectWindow.defaultProps = {
    allignmentDir: {},
    videoSource: vidTest,
    imageSource: imgTest,
    title: 'title',
    description: 'description',
    linkTo: '/'
}
export default ProjectWindow;