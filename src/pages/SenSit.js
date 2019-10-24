import React from 'react'
import {Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectPage from '../components/ProjectPage'

const SenSit = () => (
    <Layout>
        <Link to='/'>Home</Link>
        <ProjectPage 
        Title="SenSit"
        Caption=""
        Collaborators="Jose Lemus"
        Abstract=""
        Description=""
        ></ProjectPage>
    </Layout>
)

export default SenSit;