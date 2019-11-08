import { withPrefix} from 'gatsby'
import React from 'react'
import ResumeSection from '../components/ResumeSection'
import ResumeProject from '../components/ResumeProject'
import ResumeJob from '../components/ResumeJob'
import TitledList from '../components/TitledList'
import Layout from '../components/layout'

// Assets
import pdfIcon from '../images/Icons/AdobePDFIcon.png'

const Resume = () => (
    <Layout currentPage='/resume'>
        <div style={styles.resume}>
            <div style={styles.pdf}>
                <a style={styles.pdfLink}
                    rel="noopener noreferrer"
                    href={withPrefix('/Resume.pdf')}
                    target="_blank"> 
                    <img style={styles.pdfIcon} src={pdfIcon} alt="PDF icon"/>
                    View PDF
                </a>
            </div>
            <div>
                <div style={styles.contactInfo}>
                    <p>1 (914) 575-7469</p>
                    <a href="mailto: jose.lemus@tufts.edu">jose.lemus@tufts.edu</a>
                    <a href="https://github.com/jlemus1234">https://github.com/jlemus1234</a>

                </div>
            </div>

            <ResumeSection title="Education and Honors">
                <div>
                    <p style={styles.education}>Tufts University, Medford, MA </p>
                    <p style={styles.education}>Bachelor of Science in Computer Science, May 2019</p>
                    <p style={styles.education}>GPA: 3.30</p>
                    <p style={styles.education}>Questbridge Scholar, Dean's List</p>
                </div>
            </ResumeSection>

            <ResumeSection title="Skills">
                <TitledList title="Programming Languages" listArray={["C", "Python", "Javascript", "HTML", "CSS", "SQL"]}/>
                <TitledList title="Frameworks, APIs" listArray={["React", "Express"]} />
                <TitledList title="Related Software" listArray={["Git", "PostgreSQL", "MongoDB"]}/>
            </ResumeSection>

            <ResumeSection title="Relevant Courses">
                <p>Introduction to Computer Science; Computational Modeling and Design; Introduction to Computing in Engineering; Data Structures; Discrete Mathematics; Machine Structure and Assembly-Language Programming; Programming Languages; Algorithms; Computational Theory; Web Programming; Operating Systems; Networks; Database Systems; Computer System Security</p>
            </ResumeSection>

            <ResumeSection title="Projects">
                <ResumeProject projectName="SwimSense">
                    <ul>
                        <li>Collaborated with a team to create a waterproof device to aid sight-impaired swimmers navigate pools</li>
                        <li>Prototyped, developed, and tested device on representative individuals</li>
                    </ul>
                </ResumeProject>

                <ResumeProject projectName="Distributed Hash Table">
                    <ul>
                        <li>Wrote a C program that creates a decentralized, distributed system used to upload and download data to nodes using SHA1 hashes as keys, and TCP for transfers</li>
                    </ul>
                </ResumeProject>
                <ResumeProject projectName="Inactivity and Slouching Detector">
                <ul>
                    <li>Built an IoT device that monitors the time a user spends sitting and slouching</li>
                    <li>Created a website that plots the recorded data using Google Charts</li>
                </ul>
                </ResumeProject>
                <ResumeProject projectName="Port Scan and Password Detector">
                    <ul>
                        <li>Wrote a python script that detects ongoing port scans and passwords sent in cleartext using the pcapy module, and scapy</li>
                    </ul>
                </ResumeProject>
                <ResumeProject projectName="Music Guessing Game">
                    <ul>
                        <li>Created a website for guessing song names using Spotify and Facebook APIs, and worked on the backend storing user data on a MongoDB instance.</li>
                    </ul>
                </ResumeProject>
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
                        <li>Built components displaying information on resource centers located across
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
                <TitledList title="Languages" listArray={["Native English", "native Spanish", "beginner German"]}/>
                <TitledList title="Hobbies" listArray={["Calligraphy", "writing", "exercise"]}/>
                <TitledList title="Previous programming languages" listArray={["MATLAB", "C++", "Erlang", "Java"]}/>

            </ResumeSection>
        </div>
    </Layout>
);

const styles = {
    pdf: {
    },
    pdfIcon: {
        display: 'inline',
        marginRight: '5px',
        marginBottom: '0'
    },
    pdfLink: {
        display: 'inline',
        float: 'right',
        marginBottom: '20px'
    },
    contactInfo: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
    },
    resume: {
        fontFamily: 'Arial, sansSerif',
        maxWidth: 1366,
        minWidth: 590,
        margin: '0 auto',

    },
    education: {
        display: 'block',
        marginBottom: '0'
    }

}

export default Resume;