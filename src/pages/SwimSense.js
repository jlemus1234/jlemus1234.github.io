import React from 'react'
import {Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectPage from '../components/ProjectPage'

const SwimSense = () => (
    <Layout>
        <Link to='/'>Home</Link>
        <ProjectPage
        Title="SwimSense"
        Collaborators="Jose Lemus, Tara Mackenzie, Samantha Levy, and Tommaso Lombardo in collaboration with HRC"
        >
        </ProjectPage>
    </Layout>
)

export default SwimSense;