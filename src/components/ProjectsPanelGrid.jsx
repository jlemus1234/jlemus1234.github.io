import React from 'react'

// A parent component for project windows. 
// Simply helps space them in a grid format

const styles = {
    ProjectsPanel: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        //justifyContent: 'space-evenly',
    }
}

class ProjectsPanelGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderChildren() {
        return React.Children.map(this.props.children, (child, i) => {
            return (
                React.cloneElement(child, { alignmentDir: { width: 500, /*margin: ''*/ } })
            )
        })
    }

    render() {
        return (
            <div style={styles.ProjectsPanel} className="ProjectsPanel">
                {this.renderChildren()}
            </div>
        )
    }
}

export default ProjectsPanelGrid;