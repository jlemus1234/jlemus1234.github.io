import React from 'react'

import Layout from '../components/layout'
import Container from '../components/Container'
import ProjectsPanelGrid from '../components/ProjectsPanelGrid'
import ProjectWindow from '../components/ProjectWindow'



// Videos
import BRCVid from '../assets/BRC/BRCDemo.mp4'
import SwimSenseVid from '../assets/SwimSense/SwimDemo2.mp4'
import SenSitVid from '../assets/SenSit/SenSitDemo2.mp4'
import MIXRVid from '../assets/MIXR/MIXRDemo2.mp4'
import TIVid from '../assets/TongueInterface/TongueDemo.mp4'

const ProjectsPage = () => {
    return (
        <Layout>
        <Container>
        <ProjectsPanelGrid>
          <ProjectWindow linkTo='/SwimSense/' /*videoSource={SwimSenseVid}*/ title="SwimSense" description="An aid for blind swimmers"></ProjectWindow>
          <ProjectWindow linkTo='/BisexualResourceCenter/' /*videoSource={BRCVid}*/ title="BRC" description="Find a support group"></ProjectWindow>
          <ProjectWindow linkTo='/SenSit' /*videoSource={SenSitVid}*/ title="SenSit" description="Combat inactivity and poor posture"></ProjectWindow>
          <ProjectWindow linkTo='/TongueInterface' /*videoSource={TIVid}*/ title="Tongue Interface" description="Control with your tongue"></ProjectWindow>
          <ProjectWindow linkTo='/MIXR' /*videoSource={MIXRVid}*/ title="MIXR" description="Guess the singers of popular songs"></ProjectWindow>
        </ProjectsPanelGrid>
      </Container>
      </Layout>
    )
}

export default ProjectsPage;