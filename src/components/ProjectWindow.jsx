import React from 'react'

import {Link} from 'gatsby'

import vidTest from '../images/clips/testClip3.mp4'
import imgTest from '../images/me.png'

const styles = {
    projectWindowStyle : {
        display: 'block',
        background: 'rgb(181, 188, 199)',
        width: '60%',
        borderRadius: '25px',
        marginBottom: '70px'
    },

    headerStyle : {
        color: 'white',
        textAlign: 'center'

    },

    descriptionStyle : {
        color: 'white',
        textAlign: 'center'
    }
}

class ProjectWindow extends React.Component {
    constructor(props){
        // required props include a name and an image/video
        super(props);
        this.state = {
        };
    }

    //style={{...projectWindowStyle, ...this.props.alignmentDir}}
    render(){

        return (
            <Link to={this.props.linkTo}>
            <div style = {{...styles.projectWindowStyle,...this.props.alignmentDir}} id = "projectWindow">



            <div style = {styles.headerStyle}>
                <h1> 
                {this.props.title}
                </h1>
            </div>


            <div id="video">

                    <video muted autoPlay loop width="100%">
                        <source src={this.props.videoSource} type="video/mp4"></source>
                        <img src ={this.props.imageSource}></img>
                        Your browser does not support the video tag
                    </video>

            </div>

            <div style = {styles.descriptionStyle}>
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