import React from 'react'
import { Link } from 'gatsby'

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
            <div className = "ProjectsPanel">
                {this.renderChildren()}
            </div>
        )
    }
}

export default ProjectsPanel;