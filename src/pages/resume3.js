import { withPrefix } from 'gatsby'
import React from 'react'

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

            </div>
            <div style={styles.resumeSection}>
                <h3 style={styles.resumeHeading}> Education and Honors </h3>
                <div style={styles.resumeContent}>
                    <ul style={styles.resumeList}>
                        <li> Tufts University School of Engineering </li>
                        <li> Mamaroneck High School class of 2015 </li>
                    </ul>
                </div>
            </div>

            <div style={styles.resumeSection}>
                <h3 style={styles.resumeHeading}> Professional Experience </h3>
                <div style={styles.resumeContent}>
                    <h4> Insight Venture Partners internship</h4>
                    <ul>
                        <li> Aided in reorganizing and implementing a Salesforce database. </li>
                        <li> Served as a technology consultant. </li>
                        <li> Collected data on a variety of software businesses. </li>
                    </ul>
                    <h4> Lemus Painting </h4>
                    <ul>
                        <li> Wrote invoices and kept customer records. </li>
                        <li> Painted and did wallpapering. </li>
                    </ul>
                    <h4> Tech support </h4>
                    <ul>
                        <li> Installed printers and set up computers. </li>
                        <li> Helped create and annotate documents. </li>
                    </ul>
                    <h4> McDonalds cashier </h4>
                    <ul>
                        <li> Awarded for providing good service to a mystery shopper. </li>
                        <li> Maintained a calm demeanor in an aggressive environment. </li>
                        <li> Handled lunch and dinner rushes appropriately. </li>
                    </ul>
                </div>
            </div>
            <div style={styles.resumeSection}>
                <h3 style={styles.resumeHeading}> Skills </h3>
                <div style={styles.resumeContent}>
                    <ul>
                        <li> Programming Languages: C, C++, Java, Matlab </li>
                        <li> Languages: English, Spanish </li>
                    </ul>
                </div>
            </div>
            <div style={styles.resumeSection}>
                <h3 style={styles.resumeHeading}> Activities </h3>
                <div style={styles.resumeContent}>
                    <ul>
                        <li> Several side projects developing mobile apps for iOS. </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
);

const styles = {
    pdfLink: {
        float: 'right'
    },
    resumeHeading: {
        display: 'inline-block',
        float: 'left',
        marginRight: '50px',
        width: '20%',
        color: 'black'

    },
    resumeContent: {
        display: 'inline-block',
        float: 'right',
        //width: '50%'
    },
    resumeSection: {
        display: 'flex',
        marginBottom: '50px'
    },
    resumeList: {
        //display: 'block',
        //width: '50%',
    }
}

export default Resume;