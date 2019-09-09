import React from 'react'
import Image from '../components/image'

import githublogo from './../images/Icons/github.svg'
import linkedinlogo from './../images/Icons/linkedin.svg'
import emaillogo from './../images/Icons/gmail.svg'

class ConnectedSites extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {
        return (
            <div>
                {/* Testing */}
                <div>
                    <div class="otherSites" id="otherSitesContainer">
                        <a href="https://github.com/jlemus1234"><img class="link" src={githublogo} alt="GitHub Logo"></img></a>
                        <a href="https://www.linkedin.com/in/jose-lemus-404328157/"><img class="link" src={linkedinlogo} alt="LinkedIn Logo"></img></a>
                        <a href="mailto: jlemus1234@gmail.com"><img class="link" src={emaillogo} alt="E-Mail Logo"></img></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConnectedSites;