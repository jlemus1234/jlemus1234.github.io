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
        marginBottom: '70px',

        fontFamily: 'Arial, sansSerif'
    },

    headerPara:{
        fontFamily: 'Arial, sansSerif',

        display: 'inline-block',
        width: '100%',

        textAlign: 'center',
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold',
 
        marginBottom: '5px',
    },

    descriptionPara:{
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
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){

        return (
            <Link to={this.props.linkTo}>
            <div style = {{...styles.projectWindowStyle,...this.props.alignmentDir}} id = "projectWindow">

                <h1 style={styles.headerPara}> 
                {this.props.title}
                </h1>

                    <video muted autoPlay loop width="100%">
                        <source src={this.props.videoSource} type="video/mp4"></source>
                        <img src ={this.props.imageSource}></img>
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
    videoSource: vidTest,
    imageSource: imgTest,
    title: 'title',
    description: 'description',
    linkTo: '/'
}
export default ProjectWindow;