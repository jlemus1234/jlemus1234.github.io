import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
//import Image from '../components/image'
import SEO from '../components/seo'
import NamePanel from '../components/NamePanel'
import ProjectsPanel from '../components/ProjectsPanel'
import ProjectWindow from '../components/ProjectWindow'


import headshot from './../images/me.png'
import testvid1 from './../images/clips/testClip2.mp4'
import testvid2 from './../images/clips/testClip3.mp4'



import ImageBanner from '../components/ImageBanner'
import ConnectedSites from '../components/ConnectedSites'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    

    <NamePanel/>
    
    <ImageBanner bannerImage={headshot}>
    </ImageBanner>

    <div style = {{marginBottom: '50px'}}>
    <ConnectedSites>
    </ConnectedSites>
    </div>

    <ProjectsPanel>
      <ProjectWindow linkTo='/project1/' videoSource={testvid1} title="My project" description="Here is a video me dying" ></ProjectWindow>
      <ProjectWindow></ProjectWindow>
      <ProjectWindow></ProjectWindow>
      <ProjectWindow></ProjectWindow>
    </ProjectsPanel>

    <Link to="/resume/">Resume</Link>
  </Layout>
)

export default IndexPage
