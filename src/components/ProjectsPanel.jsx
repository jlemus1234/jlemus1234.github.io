import React from 'react'
import { Link } from 'gatsby'


const ProjectsPanelStyle = {
    display: 'inline-block',
    width: '100%'
}

class ProjectsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    // make its children alternate left and right

    renderChildren(){
        // can't remember what this does...
        // may just be passing 
        return React.Children.map(this.props.children, child => React.cloneElement(child, {alignmentDir: "Right"}));
    }

    render(){
        return (
            <div style = {ProjectsPanelStyle} className = "ProjectsPanel">
                {this.renderChildren()}
            </div>
        )
    }
}

export default ProjectsPanel;