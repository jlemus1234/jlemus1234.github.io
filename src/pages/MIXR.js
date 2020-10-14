import React from 'react'
import Layout from '../components/layout'
import ProjectPage from '../components/ProjectPage'
// Assets
import MIXRVid from '../assets/MIXR/MIXRDemo.mp4'

const MIXR = () => (
    <Layout currentPage='/projects'>
        <ProjectPage
                    Title = "MIXR"
                    Caption = ""
                    Collaborators ="Jose Lemus, Emily Sim, Sophia Wang, Maddie Payne, Ian Mao
                    "

                    Video={MIXRVid}

                    Abstract ="MIXR was a website created with the intent of being a multiplayer game where you guessed songs and their artists.
                    It is a way for users to explore music with their friends.
                    "
                    Description ="The MIXR website was a multiplayer game. Users hear a 30 second clip of an unknown song,and then are able to
                    select from 4 multiple-choice options what they think the song is. Once the user has guessed, the correct answer
                    is revealed allowing them to find out more about the song or artist. Another song is then loaded and the game
                    continues. Both players are presented with multiple songs to guess, and the user with the most correct at the
                    end of the session wins. 

                    My work was primarily in the backend, as well as in helping troubleshoot problems with front-end development.
                    I worked on getting basic login features working, storing and retrieving scores as well as other user data, and
                    hosting the website.
                    "

                    AdditionalInformation=""
        />
    </Layout>
)

export default MIXR;