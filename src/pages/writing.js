import React from 'react'
import Layout from '../components/layout'

import Container from '../components/Container'

import HorizontalCard from '../components/HorizontalCard'
import HorizontalCardPanel from '../components/HorizontalCardPanel'

const WritingPage = () => {
    return (
        <Layout currentPage="/writing">
            <Container>
                <HorizontalCardPanel>
                    <HorizontalCard title="McDonalds" description="my time at McDonalds" linkTo="/writing"/>
                    <HorizontalCard title="Graduation" description="what it felt like graduating" linkTo="/writing"/>
                    <HorizontalCard title="Hobbies" description="writing on what I like to do" linkTo="/writing"/>
                </HorizontalCardPanel>
            </Container>
        </Layout>
    )
}

export default WritingPage;