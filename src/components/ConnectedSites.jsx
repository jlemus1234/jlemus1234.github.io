import React from 'react'

// Assets
import githublogo from './../images/Icons/github.svg'
import linkedinlogo from './../images/Icons/linkedin.svg'
import emaillogo from './../images/Icons/gmail.svg'


// Make a set number of logo's / sites that can be connected
// Make the props only the specific links to each site
// Make props/logos visible only if the specific prop was passed in or not

class ConnectedSites extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.otherSitesStyle} className="otherSites" id="otherSitesContainer">
                    <a style={styles.link} href="https://github.com/jlemus1234"><img style={styles.logoStyle} src={githublogo} alt="GitHub Logo"></img></a>
                    <a style={styles.link} href="https://www.linkedin.com/in/jose-lemus-404328157/"><img style={styles.logoStyle} src={linkedinlogo} alt="LinkedIn Logo"></img></a>
                    <a style={styles.link} href="mailto: jlemus1234@gmail.com"><img style={styles.logoStyle} src={emaillogo} alt="E-Mail Logo"></img></a>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        background: 'rgb(181, 188, 199)',
        justifyContent: 'center',
        paddingTop: '10px',
        paddingBottom: '10px',

        borderRadius: '0 0 10px 10px'
    },

    otherSitesStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        marginBottom: '0'
    },

    logoStyle: {
        display: 'block',
        height: '25px',
        width: '25px',
        marginBottom: '0'
    },

    link: {
        marginBottom: '0'
    }
};



ConnectedSites.defaultProps = {

}

export default ConnectedSites;