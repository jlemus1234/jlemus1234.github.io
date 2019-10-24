import React from 'react'
import {Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectPage from '../components/ProjectPage'

const MIXR = () => (
    <Layout>
        <Link to='/'>Home</Link>
        <ProjectPage></ProjectPage>
    </Layout>
)

export default MIXR;