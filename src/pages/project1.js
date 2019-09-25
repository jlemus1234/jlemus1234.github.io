import React from 'react'
import {Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectPage from '../components/ProjectPage'

const Project1Page = () => (
    <Layout>
        <Link to='/'>Home</Link>

        <ProjectPage></ProjectPage>
    </Layout>
)

export default Project1Page