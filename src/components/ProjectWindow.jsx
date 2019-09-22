import React from 'react'

import vidTest from '../images/clips/testClip3.mp4'
import imgTest from '../images/me.png'


const projectWindowStyle = {
    display: 'block',
    background: 'black',
    width: '45%',
    borderRadius: '25px',
    //float: 'right'    
}

const headerStyle = {
    color: 'white',
    textAlign: 'center'
}

const descriptionStyle = {
    color: 'white',
    textAlign: 'center'
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
            <div style = {{...projectWindowStyle,...this.props.alignmentDir}} id = "projectWindow">



            <div style = {headerStyle}>
                <h1> 
                {this.props.title}
                </h1>
            </div>


            <div id="video">
                <a href="https://github.com/jlemus1234">
                    <video muted autoPlay loop width="100%">
                        {//width="320" height="240"
                        }
                        <source src={this.props.videoSource} type="video/mp4"></source>
                        <img src ={this.props.imageSource}></img>
                        Your browser does not support the video tag
                    </video>
                </a>
            </div>

            <div style = {descriptionStyle}>
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
}
export default ProjectWindow;