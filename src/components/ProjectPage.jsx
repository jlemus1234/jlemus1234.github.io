

import React from 'react'
import defaultImage from '../images/me.png'
import defaultVideo from '../images/clips/testClip2.mp4'


const styles = {
    Title : {
        textAlign: 'center',
    },

    Collaborators : {
        textAlign: 'center',
    },

    VideoCaption : {
        background:  'gray',
        paddingBottom: '15px',
        borderRadius: '30px',
    },
    
    Abstract : {
    },

    Description : {
    },

    AdditionalInfo : {
    },

    SubsectionTitle : {
        textAlign: 'center',
        marginTop: '30px'
    },

    ContentBuffer : {
        margin: '30px'
    }
}


class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
            
        }
    }

    render(){
        return(
        <div className="ProjectPage">

        <div style={styles.VideoCaption} className="VideoCaptionContainer">
        <div className = "VideoImage">
            <video muted autoPlay loop width="100%">
                <source src={this.props.Video}></source>
                <img src={this.props.Image}></img>
            </video>
        </div>
        <div><p>{this.props.Caption}</p></div>
        </div>

        <div style={styles.Title} className="Title"><h1>{this.props.Title}</h1></div>

        <div style={styles.Collaborators} className="Collaborators">{this.props.Collaborators}</div>

        <div>
        <h3 style={styles.SubsectionTitle}>Abstract</h3>
        <div style={styles.Abstract} className="Abstract">{this.props.Abstract}</div>
        </div>

        <div>
        <h3 style={styles.SubsectionTitle}>Summary</h3>
        <div style={styles.Description} className="Description">{this.props.Description}</div>
        </div>

        <div>
        <h3 style={styles.SubsectionTitle}>More Info</h3>
        <div style={styles.AdditionalInfo} className="AdditionalInformation">{this.props.AdditionalInformation}</div>
        </div>

        <div style={styles.ContentBuffer}></div>

        </div>
        )
    }
}


ProjectPage.defaultProps = {
    // May be better to split these up between more components
    Title: 'Project Title',
    Video: defaultVideo,
    Image: defaultImage,
    Caption: 'Video caption',
    Collaborators: 'Names of Collaborators', //May be better as a list
    Abstract: 'Quick summary of project and its goals',
    Description: 'In-depth description of project',
    AdditionalInformation: 'Where to go for more information on the project'

}

export default ProjectPage;