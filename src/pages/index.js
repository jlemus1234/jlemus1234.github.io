import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
//import Image from '../components/image'
import SEO from '../components/seo'
import ProjectsPanel from '../components/ProjectsPanel'
import ProjectWindow from '../components/ProjectWindow'

import ProjectWindowOverlay from '../components/ProjectWindowOverlay'

import headshot from './../images/me.png'
import testvid1 from './../images/clips/testClip2.mp4'



import ImageBanner from '../components/ImageBanner'
import ConnectedSites from '../components/ConnectedSites'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />    
    <ImageBanner bannerImage={headshot}>
    </ImageBanner>

    <div style = {{marginBottom: '50px'}}>
    <ConnectedSites>
    </ConnectedSites>
    </div>

    <ProjectsPanel>
      <ProjectWindowOverlay linkTo='/SwimSense/' videoSource={testvid1} title="SwimSense" description="An aid for blind swimmers"/>

      <ProjectWindow linkTo='/SwimSense/' videoSource={testvid1} title="SwimSense" description="An aid for blind swimmers"></ProjectWindow>
      <ProjectWindow linkTo='/BisexualResourceCenter/' title="BRC" description="Find a support group"></ProjectWindow>
      <ProjectWindow linkTo='/SenSit' title="SenSit" description="Combat inactivity and poor posture"></ProjectWindow>
      <ProjectWindow linkTo='/MIXR' title="MIXR" description="Guess the singers of popular songs"></ProjectWindow>
      <ProjectWindow linkTo='/TongueInterface' title="Tongue Interface" description="Control with your tongue"></ProjectWindow>
    </ProjectsPanel>

    <Link to="/resume/">Resume</Link>
  </Layout>
)

export default IndexPage
