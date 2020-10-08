import React from 'react'

import { Link } from 'gatsby'

//import imgTest from '../images/me.png'

const styles = {
    container: {
        border: '1px solid silver',
        //background: 'rgb(240,240,240)',
        background: 'rgb(255,255,255)',
        //height: '100%',
        width: '60%',
        //height: '500px',
        display: 'block',
        marginTop: '50px',
        //boxShadow: '5px 10px'

    },
    link: {
        //width: '60%',
        //display: 'block', // This makes the link's width control width of entire window
        textDecoration: 'none',
    },
    projectInfo: {
        display: 'block',
        //background: 'rgb(240,240,240)',
        background: 'rgb(255,255,255)',
        //borderRadius: '25px',
        marginBottom: '70px',

        fontFamily: 'Arial, sansSerif'
    },

    headerPara: {
        fontFamily: 'Arial, sansSerif',

        display: 'inline-block',
        width: '100%',

        textAlign: 'center',
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold',

        marginBottom: '5px',
    },

    descriptionPara: {
        fontFamily: 'Arial, sansSerif',

        display: 'block',
        width: '100%',

        textAlign: 'center',
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold',

        marginBottom: '5px',
    },

    image: {
        maxWidth: '100%',
        maxHeight: '75%',
        //minHeight: '75%',
        //maxHeight: '300px',
        marginBottom: '0',
        marginTop: '0',
        paddingTop: '0',
        objectFit: 'contain',
        //borderWidth: '50',
        //borderColor: 'black'

    },
    imageSpacer: {
        minHeight: '75%',
        maxHeight: '75%',
        borderBottom: '1px solid silver'
    }
}

const ProjectWindow = ({alignmentDir, image, title, description, linkTo}) => {

    return (
        <div style={{...styles.container, ...alignmentDir}}>
            <Link style={styles.link} to={linkTo}>
                <div style={styles.imageSpacer}>
                    <img style={styles.image} src={image}/>
                </div>
                <div style={{ ...styles.projectInfo}} id="projectInfo">
                    <h1 style={styles.headerPara}>
                        {title}
                    </h1>

                    <p style={styles.descriptionPara}>
                        {description}
                    </p>
                </div>
            </Link>
        </div>
        )
} 


ProjectWindow.defaultProps = {
    alignmentDir: {},
    // videoSource: vidTest,
    // imageSource: imgTest,
    //imagesrc: [imgTest],
    title: 'title',
    description: 'description',
    linkTo: '/'
}
export default ProjectWindow;