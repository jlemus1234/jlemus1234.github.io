import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'


import ImageBanner from '../components/ImageBanner'
import ConnectedSites from '../components/ConnectedSites'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <ImageBanner>
    </ImageBanner>

    <ConnectedSites>

    </ConnectedSites>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
