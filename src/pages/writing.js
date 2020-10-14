import React from 'react'
import Layout from '../components/layout'

import Container from '../components/Container'

import HorizontalCard from '../components/HorizontalCard'
import HorizontalCardPanel from '../components/HorizontalCardPanel'


import img1 from '../assets/SenSit/Sensit1.jpg'
import img2 from '../assets/SenSit/Sensit2.jpg'
import img3 from '../assets/SwimSense/SwimSense.jpg'


const WritingPage = () => {
    return (
        <Layout currentPage="/writing">
            <Container>
                <HorizontalCardPanel>
                    <HorizontalCard title="McDonalds" description="My time at McDonalds" linkTo="/McDonaldsWriting" image={img1}/>
                    <HorizontalCard title="Graduation" description="What it felt like graduating" linkTo="/writing" image={img2}/>
                    <HorizontalCard title="Hobbies" description="Writing on what I like to do" linkTo="/writing" image={img3}/>
                </HorizontalCardPanel>
            </Container>
        </Layout>
    )
}

export default WritingPage;