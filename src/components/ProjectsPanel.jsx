import React from 'react'

const styles = {
    ProjectsPanel: {
        display: 'inline-block',
        width: '100%',
    }
}

class ProjectsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // make its children alternate left and right
    renderChildren() {
        return React.Children.map(this.props.children, (child, i) => {
            if (i % 2 === 0) {
                const alignmentProp = { float: 'left' };
                return (
                    <div style={{ display: 'inline-block' }}>
                        {React.cloneElement(child, { alignmentDir: alignmentProp })}
                    </div>
                )
            } else {
                const alignmentProp = { float: 'right' };
                return (
                    <div style={{ display: 'inline-block' }}>
                        {React.cloneElement(child, { alignmentDir: alignmentProp })}
                    </div>
                )
            }
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

export default ProjectsPanel;