import { withPrefix, Link } from 'gatsby'
import React from 'react'
import ResumeSection from '../components/ResumeSection'
import ResumeProject from '../components/ResumeProject'
import ResumeJob from '../components/ResumeJob'
const Resume = () => (
    <>
    <div>
        <Link to="index.js">Back</Link>
    </div>
    <div style={styles.resume}>
        <div>
            <a style={styles.pdfLink}
                rel="noopener noreferrer"
                href={withPrefix('/Resume.pdf')}
                target="_blank"> View one-page PDF version
            </a>
        </div>
        <div>
            <h1>Resume</h1>
            <div style={styles.contactInfo}>
                <p>(914) 575-7469</p>
                <a href="mailto: jose.lemus@tufts.edu">jose.lemus@tufts.edu</a>
                <a href="https://github.com/jlemus1234">https://github.com/jlemus1234</a>

            </div>
        </div>

        <ResumeSection title="Education and Honors">
            <div>
                <p>Tufts University, Medford, MA </p>
                <p>Bachelor of Science in Computer Science, May 2019</p>
                <p>GPA: 3.30</p>
                <p>Questbridge Scholar, Dean's List</p>
            </div>
        </ResumeSection>

        <ResumeSection title="Skills">
            <p>Programming Languages: C, Python, Javascript, HTML, CSS, SQL</p>
            <p>Frameworks, APIs: React, Express</p>
            <p>Related Software: Git, PostgreSQL, MongoDB</p>
        </ResumeSection>

        <ResumeSection title="Relevant Courses">
            <p>
            Introduction to Computer Science; Computational Modeling and Design; Introduction to Computing in Engineering; Data Structures; Discrete Mathematics; Machine Structure and Assembly-Language Programming; Programming Languages; Algorithms; Computational Theory; Web Programming; Operating Systems; Networks; Database Systems; Computer System Security
            </p>
        </ResumeSection>

        <ResumeSection title="Projects">
            <ResumeProject projectName="SwimSense"></ResumeProject>
            <ResumeProject projectName="Distributed Hash Table"></ResumeProject>
            <ResumeProject projectName="Inactivity and Slouching Detector"></ResumeProject>
            <ResumeProject projectName="Port Scan and Password Detector"></ResumeProject>
            <ResumeProject projectName="Music Guessing Game"></ResumeProject>
{/*             <p>Distributed Hash Table</p>
            <ul>
                <li>Wrote a C program that creates a decentralized, distributed system used to upload and download data to nodes using SHA1 hashes as keys, and TCP for transfers</li>
            </ul>

            <p>Inactivity and Slouching Detector</p>
            <ul>
                <li>Built an IoT device that logs the time a user spends sitting and monitors slouching</li>
                <li>Created a website that plots the data on a website using Google Charts</li>
            </ul>

            <p>Port Scan and Password Detector</p>
            <ul>
                <li>Wrote a python script that detects ongoing pot scans and passwords sent in cleartext using the pcapy module, and scapy</li>
            </ul>

            <p>Music Guessing Game</p>
            <ul>
                <li>Created a website for guessing the names of songs using Spotify and Facebook APIs, and worked on the backed storing user data on a MongoDB instance</li>
            </ul> */}
        </ResumeSection>

        <ResumeSection title="Experience">
            <ResumeJob employer="Lemus Painting" jobTitle="Assistant" city="Mamaroneck" state="NY" 
            startDate="March 2011" endDate="Present">
                <ul>
                <li>Wrote invoices, scheduled off-site work</li>
                <li>Translated English and Spanish</li>
                <li>Painted, removed wallpaper, and performed other related services</li>
                </ul>
            </ResumeJob>

            <ResumeJob employer="JumboCode" jobTitle="Front End Developer" city="Medford" state="MA"
            startDate="September 2018" endDate="May 2019">
                <ul>
                    <li>Built components displaying information on free resource centers located across
                        the United States using React and the Google Maps platform</li>
                    <li>Helped team members debug their code</li>
                </ul>
            </ResumeJob>

            <ResumeJob employer="Spot.IM" jobTitle="Research and Development Intern" city="New York City" state="NY" 
            startDate="June 2018" endDate="August 2018">
                <ul>
                    <li>Built a marketing dashboard idenifying trends across the Spot.IM platform using
                        NodeJS, PostgreSQL, Watson Natural Language Understanding, React and Redux</li>
                    <li>Presented project progress to executives and management</li>
                </ul>
            </ResumeJob>

            <ResumeJob employer="Insight Venture Partners" jobTitle="Database Intern" city="New York City" state="NY"
            startDate="May 2015" endDate="August 2015">
                <ul>
                    <li>Researched private companies and updated information on a database</li>
                    <li>Provided feedback to improve the web interface for a database</li>
                </ul>
            </ResumeJob>

            <ResumeJob employer="Freelance Work" jobTitle="Tech Support" city="Rye" state="NY" 
            startDate="May 2014" endDate="October 2014">
                <ul>
                    <li>Taught elderly customers how to use Microsoft Office software and complete basic tasks</li>
                    <li>Updated customer computers and installed anti-virus software</li>
                    <li>Conducted general troubleshooting for a variety of common computer problems</li>
                </ul>
            </ResumeJob>

            <ResumeJob employer="McDonald's" jobTitle="Cashier" city="Mamaroneck" state="NY" startDate="May 2013"
            endDate="August 2013">
                <ul>
                    <li>Communicated effectively with cooks and customers</li>
                    <li>Collected payments, packaged food, cleaned and stocked stations</li>
                    <li>Rewarded by management for providing hospitable service to a mystery shopper</li>
                </ul>
            </ResumeJob>
        </ResumeSection>

        <ResumeSection title="Other skills">
            <p>Languages: Native English and Spanish speaker, beginner German</p>
            <p>Hobbies: Calligraphy, writing, exercise</p>
            <p>Previous programming languages: MATLAB, C++</p>
        </ResumeSection>
    </div>
    </>
);

const styles = {
    pdfLink: {
        float: 'right'
    },
    contactInfo: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    resume:{
        fontFamily: 'Arial, sansSerif'
    }

}

export default Resume;