
import React from 'react'
import ProjectPage from '../components/ProjectPage'
import {Link} from 'gatsby'
import Layout from '../components/layout'

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
            Abstract = ""
            Description = ""
            >
            </ProjectPage>
            </Layout>
        )
    }

}

export default TongueInterface;