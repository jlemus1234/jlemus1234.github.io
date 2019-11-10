import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectWindow from '../components/ProjectWindow'
import ConnectedSites from '../components/ConnectedSites'
import ImageSlideShow from '../components/ImageSlideShow'
import Container from '../components/Container'
import ProjectsPanelGrid from '../components/ProjectsPanelGrid'
import ProjectWindowImage from '../components/ProjectWindowImage'

// Assets
import headshot from './../images/me.png'
import cbImg from '../assets/SwimSense/SwimSense8.jpg'
import cbImg2 from '../assets/SwimSense/SwimSense7.jpg'
import cbImg3 from '../assets/SwimSense/SwimSense5.jpg'
import cbImg4 from '../assets/SwimSense/SwimSense2.jpg'

// Videos
import BRCVid from '../assets/BRC/BRCDemo.mp4'
import SwimSenseVid from '../assets/SwimSense/SwimDemo2.mp4'
import SenSitVid from '../assets/SenSit/SenSitDemo2.mp4'
import MIXRVid from '../assets/MIXR/MIXRDemo2.mp4'
import TIVid from '../assets/TongueInterface/TongueDemo.mp4'

// Images
import SenSit6 from '../assets/SenSit/SenSit6.png'
import SenSit2 from '../assets/SenSit/SenSit2.jpg'
import BRC1 from '../assets/BRC/BRC1.png'
import BRC3 from '../assets/BRC/BRC3.png'
import MIXR1 from '../assets/MIXR/MIXR1.png'
import TI4 from '../assets/TongueInterface/Tongue4.png'
import SwimSense13 from '../assets/SwimSense/SwimSense13.png'

const IndexPage = () => (
  <Layout currentPage='/'>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ImageSlideShow style={{ height: '400px' }} imageList={[headshot, cbImg, cbImg2, cbImg3, cbImg4]}> </ImageSlideShow>

    <div style={{ marginBottom: '50px' }}>
      <ConnectedSites>
      </ConnectedSites>
    </div>

    <Container>
      <ProjectsPanelGrid>
        
{/*         <ProjectWindowImage linkTo='/SwimSense/' imageSource={[SwimSense13]} title="SwimSense" description="An aid for blind swimmers"></ProjectWindowImage>
        <ProjectWindowImage linkTo='/BisexualResourceCenter/' imageSource={[BRC1]} title="BRC" description="Find a support group"></ProjectWindowImage>
        <ProjectWindowImage linkTo='/SenSit' imageSource={[SenSit6]} title="SenSit" description="Combat inactivity and poor posture"></ProjectWindowImage>
        <ProjectWindowImage linkTo='/TongueInterface' imageSource={[TI4]} title="Tongue Interface" description="Control with your tongue"></ProjectWindowImage>
        <ProjectWindowImage linkTo='/MIXR' imageSource={[MIXR1]} title="MIXR" description="Guess the singers of popular songs"></ProjectWindowImage>      
 */}
        <ProjectWindow linkTo='/SwimSense/' videoSource={SwimSenseVid} title="SwimSense" description="An aid for blind swimmers"></ProjectWindow>
        <ProjectWindow linkTo='/BisexualResourceCenter/' videoSource={BRCVid} title="BRC" description="Find a support group"></ProjectWindow>
        <ProjectWindow linkTo='/SenSit' videoSource={SenSitVid} title="SenSit" description="Combat inactivity and poor posture"></ProjectWindow>
        <ProjectWindow linkTo='/TongueInterface' videoSource={TIVid} title="Tongue Interface" description="Control with your tongue"></ProjectWindow>
        <ProjectWindow linkTo='/MIXR' videoSource={MIXRVid} title="MIXR" description="Guess the singers of popular songs"></ProjectWindow>
      </ProjectsPanelGrid>
    </Container>
  </Layout>
)

export default IndexPage
