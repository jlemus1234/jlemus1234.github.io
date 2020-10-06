import React from 'react'

import { Link } from 'gatsby'

//import imgTest from '../images/me.png'

const styles = {
    container: {
        borderColor: 'black',
        borderWidth: '15px',
        background: 'rgb(240,240,240)',
        //height: '100%',
        width: '60%',
        //height: '500px',
        display: 'block',
        marginTop: '50px'
    },
    link: {
        //width: '60%',
        //display: 'block', // This makes the link's width control width of entire window
        textDecoration: 'none'
    },
    projectInfo: {
        display: 'block',
        background: 'rgb(240,240,240)',
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
        minHeight: '75%',
        //maxHeight: '300px',
        marginBottom: '0',
        objectFit: 'contain',
        //borderWidth: '50',
        //borderColor: 'black'



    }
}

const ProjectWindow = ({alignmentDir, image, title, description, linkTo}) => {

    return (
        <div style={{...styles.container, ...alignmentDir}}>
            <Link style={{ ...styles.link}} to={linkTo}>
                <img style={styles.image} src={image}/>
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