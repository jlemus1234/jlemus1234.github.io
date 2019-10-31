
import React from 'react'
import ProjectPage from '../components/ProjectPage'
import {Link} from 'gatsby'
import Layout from '../components/layout'

// Assets
import TIVid from '../assets/TongueInterface/TongueInterfaceDemo.mp4'



class TongueInterface extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <Layout>
            <Link to='/'>Home</Link>
            <ProjectPage
            Title = "Tongue Interface"
            Caption = ""
            Collaborators = "Jose Lemus, Woodbury Shortbridge"
            Video = {TIVid}
            Abstract ="Object recognition used to create a tongue-based interface.
                        By moving your tongue either left or right, you play a simple game 
                        and try to dodge obstacles for as long as possible. "
            Description ="
            The tongue interface was created for user-interfaces course. 
            Went through a couple iterations. Tried to use a collection of images to train 
            the system before-hand, but it proved too unreliable. Ultimately, a training period 
            was built into the website, so that a series of images can be collected from the 
            user for better accuracy. 
            The tongue interface allowed for two main controls, moving left or right."

            >
            </ProjectPage>
            </Layout>
        )
    }

}

export default TongueInterface;