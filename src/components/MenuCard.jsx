import React from 'react'

import testImg from "../images/me.png"
import {Link} from 'gatsby'
const styles = {

    menuCard: {
        background: 'white',
        width: '30%',
        minWidth: '300px',
        margin: 'auto',
        marginBottom: '50px',
        height: '500px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' // requires a border
    },
    textContainer: {
        marginTop: '0',
        color: 'rgb(0, 0, 0)',

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
                {text ? <p style={styles.description}>{text}</p> : null}
            </div>
            </Link>
        </div>
    )
}

MenuCard.defaultProps = {
    title: "Title",
    image: testImg,
    linkTo: '/'

}

export default MenuCard;