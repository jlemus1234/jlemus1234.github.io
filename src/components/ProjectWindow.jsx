import React from 'react'

import {Link} from 'gatsby'

import vidTest from '../images/clips/testClip3.mp4'
import imgTest from '../images/me.png'

const styles = {
    projectWindowStyle : {
        display: 'block',
        background: 'gray',
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
        console.log(this.props);
        console.log("Project Window is rendering");
        console.log(this.props.float)
        console.log(this.props.alignmentDir)
        return (
            <div style = {{...styles.projectWindowStyle,...this.props.alignmentDir}} id = "projectWindow">



            <div style = {styles.headerStyle}>
                <h1> 
                {this.props.title}
                </h1>
            </div>


            <div id="video">
{/*                 <a href="https://github.com/jlemus1234">
                    <video muted autoPlay loop width="100%">
                        {//width="320" height="240"
                        }
                        <source src={this.props.videoSource} type="video/mp4"></source>
                        <img src ={this.props.imageSource}></img>
                        Your browser does not support the video tag
                    </video>
                </a> */}

                <Link to={this.props.linkTo}>
                    <video muted autoPlay loop width="100%">
                        {//width="320" height="240"
                        }
                        <source src={this.props.videoSource} type="video/mp4"></source>
                        <img src ={this.props.imageSource}></img>
                        Your browser does not support the video tag
                    </video>
                </Link>

            </div>

            <div style = {styles.descriptionStyle}>
            <p>
                {this.props.description}
            </p>
            </div>

            </div>

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