import React from 'react'
import Layout from '../components/layout'
import WritingPage from '../components/WritingPage'
// Assets
import gradimg from '../assets/misc/IMG4.jpg'
const Graduation = () => (
    <Layout currentPage='/writing'>
        <WritingPage
                    Title = "Graduation"
                    Caption = ""
                    Collaborators ="
                    Jose Lemus"

                    MainText ="
                    In the Spring of 2019 I became the first person in my family to attend and graduate from college. Work in progress.
                    "
                    Date="TBA"
                    Image={gradimg}
        />
    </Layout>
)

export default Graduation;