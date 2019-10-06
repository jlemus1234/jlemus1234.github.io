import { withPrefix } from 'gatsby'
import React from 'react'

class ResumeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div style={styles.resumeSection}>
                <h3 style={styles.resumeHeading}> {this.props.title} </h3>
                <div style={styles.resumeContent}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const styles = {
    resumeHeading: {
        display: 'inline-block',
        float: 'left',
        marginRight: '50px',
        width: '25%',
        color: 'black'

    },
    resumeContent: {
        display: 'inline-block',
        float: 'right',
        width: '100%'
    },
    resumeSection: {
        display: 'flex',
        marginBottom: '50px'
    },
}

ResumeSection.defaultProps = {
    title: 'heading',
    children: 'nothing'
}

export default ResumeSection;