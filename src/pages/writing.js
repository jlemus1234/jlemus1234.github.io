import React from 'react'
import Layout from '../components/layout'

import Container from '../components/Container'

import HorizontalCard from '../components/HorizontalCard'
import HorizontalCardPanel from '../components/HorizontalCardPanel'


import img1 from '../assets/SenSit/Sensit1.jpg'
import img2 from '../assets/misc/IMG4.jpg'
import img3 from '../assets/misc/IMG9.jpg'


const WritingPage = () => {
    return (
        <Layout currentPage="/writing">
            <Container>
                <HorizontalCardPanel>
                    <HorizontalCard title="McDonalds" description="My time at McDonalds" linkTo="/McDonalds"  noImgStyle={{backgroundColor: 'rgb(218,41,28)'}}/>
                    <HorizontalCard title="Graduation" description="Becoming the first person in my family to go to college" linkTo="/Graduation" image={img2}/>
                    <HorizontalCard title="Hobbies" description="Writing on what I like to do" linkTo="/Hobbies" image={img3}/>
                </HorizontalCardPanel>
            </Container>
        </Layout>
    )
}

export default WritingPage;