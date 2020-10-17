import React from 'react'
import { Link } from 'gatsby'
const styles = {
    card: {
        fontFamily: 'bahnschrift',
        position: 'relative',
        color: 'black',
        marginTop: '50px',

        height: '300px',
        
        
        //backgroundColor: '',

        //overflow: 'hidden',

        border: '1px solid silver',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' // requires a border

    },
    image: {
        display: 'block',
        width: '100%',
        minHeight: '100%',
        maxHeight: '100%',        
        objectFit: 'cover',
        margin: '0'


    }, 
    overlay: {
        //display: 'inline-block',
        position: 'absolute',
        top: '33%', //top: '50%'
        right: '0',

        width: '100%',
        height: '33%',

        display: 'flex',
        justifyContent: 'space-between'
        //flexDirection: 'column',

        //float: 'left'
    },

    titleBox: {
        //position: 'absolute',
        //top: '0',
        //right: '0',


        //backgroundColor: 'green',
        backgroundColor: 'rgba(204, 204, 204, 0.7)',
        width: '30%',
        height: '100%',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        //textAlign: 'center',

    },
    title:{
        marginBottom: 0,
        fontWeight: 'bold'
    },
    descriptionBox: {
        //backgroundColor: 'blue',
        backgroundColor: 'rgba(204, 204, 204, 0.7)',
        width: '35%',
        height: '100%',

        //textAlign: 'center'
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    description: {
        marginBottom: 0
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }

}

const HorizontalCard = ({title, description, image, linkTo, noImgStyle}) => {
    return(
        <div className="HorizontalCard" style={styles.card}>
            <Link style={styles.link} to={linkTo}>
            {image ? <img style={styles.image} src={image}/>: <div style={{...styles.image, ...noImgStyle}}/> }
            <div className="Overlay" style={styles.overlay}>
                <div className="TitleBox" style={styles.titleBox}>
                    <p style={styles.title}>{title}</p>
                </div>
                <div className="DescBox" style={styles.descriptionBox}>
                    <p style={styles.description}>{description}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

HorizontalCard.defaultProps = {
    //image: testImg,
    title: 'Title',
    description: 'My description',
    linkTo: '/'
}

export default HorizontalCard;