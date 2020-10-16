import React from 'react'
import Layout from '../components/layout'
import WritingPage from '../components/WritingPage'
// Assets
import hobbyimg from '../assets/misc/IMG9.jpg'

const Hobbies = () => (
    <Layout currentPage='/writing'>
        <WritingPage
                    Title = "Hobbies"
                    Caption = ""
                    Collaborators ="
                    Jose Lemus"
                    MainText ="Finding hobbies by luck and keeping myself entertained. Work in progress.
                    "
                    Date = "TBA"
                    Image = {hobbyimg}
        />
    </Layout>
)

export default Hobbies;