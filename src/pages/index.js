import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ConnectedSites from '../components/ConnectedSites'
import Container from '../components/Container'

import ImageBanner from '../components/ImageBanner'
import ImageCircle from '../components/ImageCircle'

import MenuCardPanel from '../components/MenuCardPanel'
import MenuCard from '../components/MenuCard'
// Assets
import cbImg from '../assets/SwimSense/SwimSense15.jpg'
import cbImg2 from '../assets/SwimSense/SwimSense7.jpg'
import img1 from '../assets/misc/IMG1.jpg'
import img5 from '../assets/misc/IMG5.jpg'
import img6 from '../assets/misc/IMG8.jpg'


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
    maxHeight: '70%',
    marginBottom: '30px'
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
        <ImageCircle image={img6}/>
        <div id="myInfo" style={styles.myInfo}>
          <h1>About me</h1>
          <p style={styles.myDescription}>Hello I'm Jose, a computer science graduate currently looking for employment.
          Feel free to contact me.</p>
          <ConnectedSites />
        </div>
      </div>

      </Container>

      <MenuCardPanel>
        <MenuCard linkTo={"/projects"} title={"Projects"} text={"Past projects I have worked on"} image={cbImg2}/>
        <MenuCard linkTo={"/resume"} title={"Experience"} text={"Work experience and education"} image={img5}/>
        <MenuCard linkTo={"/writing"} title={"Writing"} text={"Stories and thoughts on my past experiences"} image={img1}/>
      </MenuCardPanel>



  </Layout>
)

export default IndexPage
