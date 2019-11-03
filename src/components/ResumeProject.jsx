import React from 'react'

class ResumeProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={styles.container}>
                <p style={styles.projectName}>{this.props.projectName}</p>
                {this.props.children}
            </div>
        )
    }
}

const styles = {
    container: {
        width: '100%',
    },
    projectName: {
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '0'
    }
}

ResumeProject.defaultProps = {
    projectName: 'Project name',
    children: 'Project Description'
}

export default ResumeProject;