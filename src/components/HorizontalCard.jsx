import React from 'react'
import Container from '../components/HorizontalCardPanel'

import testImg from '../images/me.png'
import { Link } from 'gatsby'
const styles = {
    card: {

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
        backgroundColor: 'rgba(204, 204, 204, 0.5)',
        width: '20%',
        height: '100%',

        textAlign: 'center'
    },

    descriptionBox: {
        //backgroundColor: 'blue',
        backgroundColor: 'rgba(204, 204, 204, 0.5)',
        width: '35%',
        height: '100%',

        textAlign: 'center'

    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }

}

const HorizontalCard = ({title, description, image, linkTo}) => {
    return(
        <div className="HorizontalCard" style={styles.card}>
            <Link style={styles.link} to={linkTo}>
            <img style={styles.image} src={image}/>
            <div className="Overlay" style={styles.overlay}>
                <div className="TitleBox" style={styles.titleBox}>
                    <h1>{title}</h1>
                </div>
                <div className="DescBox" style={styles.descriptionBox}>
                    <p>{description}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

HorizontalCard.defaultProps = {
    image: testImg,
    title: 'Title',
    description: 'My description',
    linkTo: '/'
}

export default HorizontalCard;