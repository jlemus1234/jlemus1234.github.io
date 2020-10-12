import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ConnectedSites from '../components/ConnectedSites'
import ImageSlideShow from '../components/ImageSlideShow'
import Container from '../components/Container'

import ProjectsPanelGrid from '../components/ProjectsPanelGrid'
import ProjectWindow from '../components/ProjectWindow'

import ImageBanner from '../components/ImageBanner'
import ImageCircle from '../components/ImageCircle'

import MenuCardPanel from '../components/MenuCardPanel'
import MenuCard from '../components/MenuCard'
// Assets
import headshot from './../images/me.png'
import cbImg from '../assets/SwimSense/SwimSense8.jpg'
import cbImg2 from '../assets/SwimSense/SwimSense7.jpg'
import cbImg3 from '../assets/SwimSense/SwimSense5.jpg'
import cbImg4 from '../assets/SwimSense/SwimSense2.jpg'


const styles = {
  bannerImage: {
    //width: '100%',
    //maxHeight: '500',
    //    objectFit: 'cover'
  },

  aboutSection: {
    marginTop: '5%',
    marginBottom: '5%',
    height: '20%',
    display: 'flex',
    justifyContent: 'space-around'
  },

  myInfo: {
    marginBottom: '50px',
    width: '50%'
  },
  myDescription: {
    height: '70%'
  },


}

const IndexPage = () => (
  <Layout currentPage='/'>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <ImageSlideShow style={{ height: '500px' }} imageList={[headshot, cbImg, cbImg2, cbImg3, cbImg4]}> </ImageSlideShow> */}
    {/* <div style={styles.bannerImage} className="imageBannerDiv">
    </div> */}

    <ImageBanner image={cbImg} />


    <Container>
      <div id="aboutSection" style={styles.aboutSection}>
        <ImageCircle />
        <div id="myInfo" style={styles.myInfo}>
          <h1>About me</h1>
          <p style={styles.myDescription}>Hello this is information on me</p>
          <ConnectedSites />
        </div>
      </div>

      </Container>

      <MenuCardPanel>
        <MenuCard linkTo={"/projects"} title={"Projects"} text={"My projects"} image={cbImg2}/>
        <MenuCard linkTo={"/resume"} title={"Experience"} text={"My past exeriences"} image={cbImg}/>
        <MenuCard linkTo={"/writing"} title={"Writing"} text={"My thoughts"}/>
      </MenuCardPanel>



  </Layout>
)

export default IndexPage
