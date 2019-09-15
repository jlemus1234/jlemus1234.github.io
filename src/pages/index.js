import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
//import Image from '../components/image'
import SEO from '../components/seo'
import NamePanel from '../components/NamePanel'

import ProjectWindow from '../components/ProjectWindow'

import headshot from './../images/me.png'


import ImageBanner from '../components/ImageBanner'
import ConnectedSites from '../components/ConnectedSites'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    

    <NamePanel/>
    
    <ImageBanner bannerImage={headshot}>
    </ImageBanner>

    <ConnectedSites>
    </ConnectedSites>

    <ProjectWindow>

    </ProjectWindow>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
