import React from 'react'
import Layout from '../components/layout'

import Container from '../components/Container'

import HorizontalCard from '../components/HorizontalCard'
import HorizontalCardPanel from '../components/HorizontalCardPanel'


import img2 from '../assets/misc/IMG4.jpg'
import img3 from '../assets/misc/IMG9.jpg'


const WritingPage = () => {
    return (
        <Layout currentPage="/writing">
            <Container>
                <HorizontalCardPanel>
                    <HorizontalCard title="Graduation" description="First in the family to graduate" linkTo="/Graduation" image={img2}/>
                    <HorizontalCard title="Hobbies" description="Developing fun skills" linkTo="/Hobbies" image={img3}/>
                    <HorizontalCard title="McDonalds" description="My worst day at McDonalds" linkTo="/McDonalds"  noImgStyle={{backgroundColor: 'rgb(218,41,28)'}}/>
                </HorizontalCardPanel>
            </Container>
        </Layout>
    )
}

export default WritingPage;