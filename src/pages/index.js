import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ProjectWindow from '../components/ProjectWindow'
import ConnectedSites from '../components/ConnectedSites'
import ImageSlideShow from '../components/ImageSlideShow'
import Container from '../components/Container'
import ProjectsPanelGrid from '../components/ProjectsPanelGrid'

import ImageBanner from '../components/ImageBanner'

// Assets
import headshot from './../images/me.png'
import cbImg from '../assets/SwimSense/SwimSense8.jpg'
import cbImg2 from '../assets/SwimSense/SwimSense7.jpg'
import cbImg3 from '../assets/SwimSense/SwimSense5.jpg'
import cbImg4 from '../assets/SwimSense/SwimSense2.jpg'


const styles = {
  container: {
    width: '100%'
  }
}

const IndexPage = () => (
  <Layout currentPage='/'>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <ImageSlideShow style={{ height: '500px' }} imageList={[headshot, cbImg, cbImg2, cbImg3, cbImg4]}> </ImageSlideShow> */}
    <div style={styles.container}>
      <ImageBanner image={cbImg}/>
    </div>
    <div style={{ marginBottom: '50px' }}>
      <ConnectedSites/>
    </div>

  </Layout>
)

export default IndexPage
