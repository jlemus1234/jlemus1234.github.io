import { withPrefix } from 'gatsby'
import React from 'react'

class ResumeJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.employerAndTimePeriod}>
                    <div style={styles.employerLocation}>
                        <p style={styles.employer}>{this.props.employer}</p>
                        <p style={styles.location}>, </p>
                        <p style={styles.location}>{this.props.city + ", " + this.props.state}</p>
                    </div>
                    <p>{this.props.startDate + " - " + this.props.endDate}</p>
                </div>
                <p style={styles.jobTitle}>{this.props.jobTitle}</p>
                {this.props.children}
            </div>
        )
    }
}

const styles = {
    container: {
        width: '100%'
    },
    employerAndTimePeriod: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },

    employerLocation: {
        //display: 'inline-block',
        //width: '100%'
    },
    employer: {
        display: 'inline',
        fontWeight: 'bold'

    },
    jobTitle: {
        fontStyle: 'italic'
    },

    location: {
        display: 'inline',

    },
    dates: {
        display: 'inline-block',
        //align:'right'
    }
}


ResumeJob.defaultProps = {
    employer: 'employer',
    jobTitle: 'job title',
    city: 'city',
    state: 'state',
    startDate: 'start date',
    endDate: 'end date',


    children: 'nothing'

}

export default ResumeJob;