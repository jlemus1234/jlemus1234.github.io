import React from 'react'
import Layout from '../components/layout'
import ProjectPage from '../components/ProjectPage'

// Assets
import finalVideo from '../assets/SwimSense/inclusivedesign.mp4'

// Images
import posterimg from '../assets/SwimSense/poster.jpg'
import SwimSense1 from '../assets/SwimSense/SwimSense.jpg'
import SwimSense2 from '../assets/SwimSense/SwimSense2.jpg'
import SwimSense3 from '../assets/SwimSense/SwimSense3.jpg'
import SwimSense11 from '../assets/SwimSense/SwimSense11.png'
import SwimSense14 from '../assets/SwimSense/SwimSense14.jpg'
const SwimSense = () => (
    <Layout>
        <ProjectPage
        Title="SwimSense"
        Video={finalVideo}
        Caption=""
        Image={posterimg}
        Collaborators="Jose Lemus, Tara Mackenzie, Samantha Levy, and Tommaso Lombardo in collaboration with HRC"
        Abstract="
        A device that uses haptic feedback to guide blind swimmers in a pool. 
        "
        Description="
        SwimSense was an interdisciplinary, undergraduate capstone project that I worked on, alongside three Engineering Psychology students.

        The project was to create a device that could be used to alert blind swimmers to obstacles in the water, such as walls.
        One of the main goals was to eliminate the need for tappers, which are individuals who stand at the end of a pool lane
        and poke blind swimmers as they approach the wall. In doing so, we hoped to improve the autonomy of these swimmers in the water,
        and make it easier for visually impaired individuals to venture into the water. Other goals included finding effective ways to
        deliver feedback to users.
        
        The project was sponsored by HRC, and sought to make the world a more inclusive place. The project was done from the ground up,
        and had a large user research component that included meeting with visually impaired swimmers, in addition to the device’s design,
        development, and testing.

        As the sole computer science member my responsibilities included doing all the programming, purchasing equipment, building the device,
        and controlling the device during test. 
        "
        
        AdditionalInformation=""

        GalleryImages = {[posterimg, SwimSense1, SwimSense2, SwimSense3, SwimSense11, SwimSense14]}
        />
    </Layout>
)

export default SwimSense;