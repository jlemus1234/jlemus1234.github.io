import React from 'react'

import Layout from '../components/layout'
import Container from '../components/Container'
import ProjectsPanelGrid from '../components/ProjectsPanelGrid'
import ProjectWindow from '../components/ProjectWindowImage'



// Videos
import BRC from '../assets/BRC/BRC3.png'
import SwimSense from '../assets/SwimSense/SwimSense.jpg'
import SenSit from '../assets/SenSit/SenSit3.jpg'
import MIXR from '../assets/MIXR/MIXR1.png'
import TongueInterface from '../assets/TongueInterface/Tongue4.png'

const ProjectsPage = () => {
    return (
        <Layout currentPage="/projects">
        <Container>
        <ProjectsPanelGrid>
          <ProjectWindow linkTo='/SwimSense/' image={SwimSense} title="SwimSense" description="An aid for blind swimmers"></ProjectWindow>
          <ProjectWindow linkTo='/BisexualResourceCenter/' image={BRC} title="BRC" description="Find a support group"></ProjectWindow>
          <ProjectWindow linkTo='/SenSit' image={SenSit} title="SenSit" description="Combat inactivity and poor posture"></ProjectWindow>
          <ProjectWindow linkTo='/TongueInterface' image={TongueInterface} title="Tongue Interface" description="Control with your tongue"></ProjectWindow>
          <ProjectWindow linkTo='/MIXR' image={MIXR} title="MIXR" description="Guess the singers of popular songs"></ProjectWindow>
        </ProjectsPanelGrid>
      </Container>
      </Layout>
    )
}

export default ProjectsPage;