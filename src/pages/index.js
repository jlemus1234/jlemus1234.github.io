import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
//import Image from '../components/image'
import SEO from '../components/seo'
import ProjectsPanel from '../components/ProjectsPanel'
import ProjectWindow from '../components/ProjectWindow'
import ImageBanner from '../components/ImageBanner'
import ConnectedSites from '../components/ConnectedSites'
import ProjectWindowOverlay from '../components/ProjectWindowOverlay'

// Assets
import headshot from './../images/me.png'
import collabImg from '../assets/SwimSense/SwimSense8.jpg'
// demo video clips
import BRCVid from '../assets/BRC/BRCDemo.mp4'
import SwimSenseVid from '../assets/SwimSense/SwimDemo.mp4'
import SenSitVid from '../assets/SenSit/SenSitDemo.mp4'
import MIXRVid from '../assets/MIXR/MIXRDemo.mp4'
import TIVid from '../assets/TongueInterface/TongueInterfaceDemo.mp4'

import testvid1 from './../images/clips/testClip2.mp4'


const IndexPage = () => (
  <Layout>
{/*    <div style={{
    margin: '0 auto',
    maxWidth: 960,
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0
  }}>  */}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    {/* <Link to="/resume/" style={{display:'block', marginBottom:'10px'}}>Resume</Link> */}

    {/* height: '400px' */}
    <ImageBanner bannerImage={collabImg} style={{height: '400px'}}>
    </ImageBanner>

    <div style = {{marginBottom: '50px'}}>
    <ConnectedSites>
    </ConnectedSites>
    </div>

    <ProjectsPanel>
      {/* <ProjectWindowOverlay linkTo='/SwimSense/' videoSource={testvid1} title="SwimSense" description="An aid for blind swimmers"/> */}
      <ProjectWindow linkTo='/SwimSense/' videoSource={SwimSenseVid} title="SwimSense" description="An aid for blind swimmers"></ProjectWindow>
      <ProjectWindow linkTo='/BisexualResourceCenter/' videoSource={BRCVid} title="BRC" description="Find a support group"></ProjectWindow>
      <ProjectWindow linkTo='/SenSit' videoSource={SenSitVid} title="SenSit" description="Combat inactivity and poor posture"></ProjectWindow>
      <ProjectWindow linkTo='/TongueInterface' videoSource={TIVid} title="Tongue Interface" description="Control with your tongue"></ProjectWindow>
      <ProjectWindow linkTo='/MIXR' videoSource={MIXRVid} title="MIXR" description="Guess the singers of popular songs"></ProjectWindow>
    </ProjectsPanel>
    {/* </div> */}
  </Layout>
)

export default IndexPage
