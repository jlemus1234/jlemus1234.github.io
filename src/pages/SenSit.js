import React from 'react'
import {Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectPage from '../components/ProjectPage'

// Assets
import SenSitVid from '../assets/SenSit/SenSitDemo.mp4'

const SenSit = () => (
    <Layout>
        <ProjectPage 
        Title="SenSit"
        Caption=""
        Video = {SenSitVid}
        Collaborators="Jose Lemus"
        Abstract="
        The SenSit is a device that helps you monitor how much time you spend sitting, and alerts you
        when it detects that your posture has deteriorated. The device uses an ESP32, and force-sensitive
        resistors. It connects to the internet through WiFi and uploads to a database. Recorded data
        can be viewed in a graph through a companion website. 
        "
        Description="
        The SenSit started out as a Hackathon project in an intro to biomedical engineering course. 
        At the time, I was the only one in the group who had any experience with programming or using
        simple electronic components, so the development fell on me. Despite this, we pushed through
        and managed to win second place. 

        The following year I decided to recreate the device on my own, in a much less restrictive setting.
        By switching to the ESP32 I was able to shrink down the device tremendously from the original, which
        used an Arduino and Raspberry Pi. I was also able to improve the companion website for the device. 
        Version 2 came out to be much smaller, more robust, and energy efficient.
        "

        AdditionalInformation=""


        ></ProjectPage>
    </Layout>
)

export default SenSit;