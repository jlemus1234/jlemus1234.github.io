import React from 'react'
import Layout from '../components/layout'
import ProjectPage from '../components/ProjectPage'

// Assets
import BRCVid from '../assets/BRC/BRCDemo.mp4'
// Images
import BRC1 from '../assets/BRC/BRC1.png'
import BRC6 from '../assets/BRC/BRC6.png'
import BRC7 from '../assets/BRC/BRC7.png'
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
                    Abstract ="A simple website that displays resource centers for bisexuals around the United States. 
                    It helps a marginalized group of people find support and other individuals they can socialize and 
                    interact with, or reach out to for help."
                    Description ="
                    This project was undertaken as part of the JumboCode club at Tufts University.
                    The goal was to create a tool for the Bisexual Resource Center that could help individuals more 
                    easily find organizations such as itself. Information gathered by BRC was used to create a database
                    of resource centers. A website was created that contained a list of resource centers, separated by 
                    states. A search bar, as well as menus that could be used to easily filter through different centers 
                    were built to allow visitors to easily access this information. The website also displayed the resource 
                    centers on a map, and displayed basic contact information for each of them.

                    My role was primarily in the frontend, where I created each of the major components in the main page, 
                    following the team’s design spec. Other team members then worked to stylize the components and tweak 
                    their behavior."
                    AdditionalInformation=""
                    GalleryImages = {[BRC1, BRC6, BRC7]}

        ></ProjectPage>
    </Layout>
)

export default BisexualResourceCenter;