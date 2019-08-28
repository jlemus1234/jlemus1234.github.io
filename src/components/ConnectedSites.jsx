import React from 'react'
import Image from '../components/image'

import githublogo from './../images/Icons/github.svg'

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
                    <div class="userBanner">
                        <img class="portrait" src="images/me.PNG" alt="face shot"></img>
                        <div class="nameDiv">
                            <h6 class="name"> Jose Arturo Lemus Ortiz</h6>
                            <div class="otherSites" id="otherSitesContainer">
                                <img src={githublogo} alt="githublogo"/>
                                {//<Image />
                                }
                               { /* <a href="https://github.com/jlemus1234"><img class="link" src="E:\Work\GitHub\jlemus1234.github.io\src\images\Icons\github.svg"></img></a>
                                <a href="https://www.linkedin.com/in/jose-lemus-404328157/"><img class="link" src="E:\Work\GitHub\jlemus1234.github.io\src\images\Icons\linkedin.svg"></img></a>
                                <a href="mailto: jlemus1234@gmail.com"><img class="link" src="../images/Icons/gmail.svg"></img></a>
                                */}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default ConnectedSites;