import React from 'react'

import testImg from "../images/me.png"
import {Link} from 'gatsby'
const styles = {

    menuCard: {
        background: 'white',
        width: '30%',
        margin: 'auto',
        marginBottom: '0',
        //overflow: 'hide'
        height: '500px',
        //border: '1px solid gray',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' // requires a border
        //color: 'rgb(0, 0, 0)',
        //display: 'flex'

    },
    textContainer: {
        //background: '',
        marginTop: '0',
        color: 'rgb(0, 0, 0)'

    },
    image: {
        maxWidth: '100%',
        minWidth: '100%',
        marginBottom: 0,
        maxHeight: '70%',
        minHeight: '70%',
        borderBottom: '1px solid silver',
        objectFit: 'cover'
    },
    title: {
        textAlign: 'center'
    },

    description:{
        textAlign: 'center'

    },
    link: {
        textDecoration: 'none',
    },

}

const MenuCard = ({image, title, text, linkTo}) => {
    return(
        <div style={styles.menuCard}>
            <Link style={styles.link} to={linkTo}>
            <img style={styles.image} src={image}></img>
            <div style={styles.textContainer}>
                <h1 style={styles.title}>{title}</h1>
                <p style={styles.description}>{text}</p>
            </div>
            </Link>
        </div>
    )
}

MenuCard.defaultProps = {
    title: "Title",
    text: "Text",
    image: testImg,
    linkTo: '/'

}

export default MenuCard;