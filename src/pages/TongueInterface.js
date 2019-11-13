import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Layout from '../components/layout'

// Assets
import TIVid from '../assets/TongueInterface/TongueInterfaceDemo.mp4'

import TI1 from '../assets/TongueInterface/Tongue1.png'
import TI2 from '../assets/TongueInterface/Tongue2.png'
import TI4 from '../assets/TongueInterface/Tongue4.png'


class TongueInterface extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <Layout>
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

            AdditionalInformation=""
            GalleryImages = {[TI1, TI2, TI4]}
            >
            </ProjectPage>
            </Layout>
        )
    }

}

export default TongueInterface;