import React from 'react'

const styles = {
    ProjectsPanel: {
        // display: 'inline-block',
        margin: '0 auto',
        maxWidth: 1366,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
        //width: '100%',
        
    }


}

class ProjectsPanelGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // make its children alternate left and right
    renderChildren() {

        return React.Children.map(this.props.children, (child, i) => {
            // if (i % 2 === 0) {
                return (
                // React.cloneElement(child, {alignmentDir: {width:'26%', margin:''}})
                React.cloneElement(child, {alignmentDir: {width: 500, margin:''}})

                )
            }
        // }
        )
    }

    render() {
        return (
            <div style={styles.ProjectsPanel} className="ProjectsPanel">
                {this.renderChildren()}
            </div>
        )
    }
}

ProjectsPanelGrid.defaultProps={
    columns: 3,
}

export default ProjectsPanelGrid;