import React from 'react'
import {Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectPage from '../components/ProjectPage'

// Assets
import BRCVid from '../assets/BRC/BRCDemo.mp4'

const BisexualResourceCenter = () => (
    <Layout>
        <ProjectPage
                    Title = "Bisexual Resource Center"
                    Caption = ""
                    Collaborators ="
                    Steph Xu,
                    Jose Lemus,
                    Claire Boals,
                    Sam Chung,
                    Erica DeBarge,
                    James Garijo-Garde,
                    Naoki Okada,
                    Sabrina Wen,
                    Jingqi Yang,
                    Zimo Lin,
                    Zhitong Zhang,
                    Camile Calabrese,
                    Eragon Ma"

                    Video={BRCVid}

                    Abstract ="Object recognition used to create a tongue-based interface.
                                By moving your tongue either left or right, you play a simple game 
                                and try to dodge obstacles for as long as possible. "
                    Description ="
                    The tongue interface was created for user-interfaces course. 
                    Went through a couple iterations. Tried to use a collection of images to train 
                    the system before-hand, but it proved too unreliable. Ultimately, a training period 
                    was built into the website, so that a series of images can be collected from the 
                    user for better accuracy. 
                    The tongue interface allowed for two main controls, moving left or right."
        
                    AdditionalInformation=""

        ></ProjectPage>
    </Layout>
)

export default BisexualResourceCenter;