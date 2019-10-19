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
                    <p style={styles.dates}>{this.props.startDate + " - " + this.props.endDate}</p>
                </div>
                <p style={styles.jobTitle}>{this.props.jobTitle}</p>
                {this.props.children}
            </div>
        )
    }
}

const styles = {
    container: {
        width: '100%',
    },
    employerAndTimePeriod: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        //marginBottom: '0',
        //height: '10px'
    },

    employerLocation: {
        //display: 'inline-block',
        //width: '100%'
        //marginBottom: '0'
    },
    employer: {
        display: 'inline',
        fontWeight: 'bold',
        //marginBottom: '0'

    },
    jobTitle: {
        fontStyle: 'italic',
        marginBottom: '0'
    },

    location: {
        display: 'inline',
        //marginBottom: '0'

    },
    dates: {
        display: 'inline-block',
        marginBottom: '0'
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