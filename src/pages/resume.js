import { withPrefix } from 'gatsby'
import React from 'react'
import ResumeSection from '../components/ResumeSection'
import ResumeJob from '../components/ResumeJob'
const Resume = () => (
    <div>
        <div>
            <a style={styles.pdfLink}
                rel="noopener noreferrer"
                href={withPrefix('/Resume.pdf')}
                target="_blank"> View PDF version
            </a>
        </div>
        <div>
            <h1>Resume</h1>
            <div style={styles.contactInfo}>
                <p>(914)575-7469</p>
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
            <p>Programming Languages: C, C++, MATLAB, HTML, CSS, JavaScript, Python, SQL</p>
            <p>Related Software: Git, Heroku, MongoDB</p>
        </ResumeSection>

        <ResumeSection title="Relevant Courses">
            <p>
            Introduction to Computer Science; Computational Modeling and Design; Introduction to Computing in Engineering; Data Structures; Discrete Mathematics; Machine Structure and Assembly-Language Programming; Programming Languages; Algorithms; Computational Theory; Web Programming; Operating Systems; Networks; Database Systems; Computer System Security
            </p>
        </ResumeSection>

        <ResumeSection title="Projects">
            <h3>Distributed Hash Table</h3>
            <ul>
                <li>Wrote a C program that creates a decentralized, distributed system used to upload and download to nodes using SHA1 hashes as keys, and TCP for transfers</li>
            </ul>

            <h3>Inactivity and Slouching Detector</h3>
            <ul>
                <li>Built and IoT device that logs the time a user spends sitting and monitors slouching</li>
                <li>Created a website that plots the data on a website using Google Charts</li>
            </ul>

            <h3>Port Scan and Password Detector</h3>
            <ul>
                <li>Wrote a python script that detects ongoing pot scans and passwords sent in cleartext usign the pcapy module, and scapy</li>
            </ul>

            <h3>Music Guessing Game</h3>
            <ul>
                <li>Created a website for guessing the names of songs using Spotify and Facebook APIs, and worked on the backed storing user data on a MongoDB instance</li>
            </ul>
        </ResumeSection>

        <ResumeSection title="Experience">
            <ResumeJob employer="Lemus Painting" city="Mamaroneck" state="NY" 
            startDate="March 2011" endDate="Present" jobTitle="Assistant"></ResumeJob>


        </ResumeSection>
    </div>
);

const styles = {
    pdfLink: {
        float: 'right'
    },
    contactInfo: {
        display: 'flex',
        justifyContent: 'space-between',
    }

}

export default Resume;