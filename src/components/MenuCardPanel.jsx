import React from 'react'
import Container from '../components/Container'

const styles = {
    panel: {
        width: '100%',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '50px'
    },

    menuCardContainer: {
        width: '100%',
        marginTop: '50px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between'
    }
}

const MenuCardPanel = ({ children }) => {

    return (
        <div className="menuCardPanel" style={styles.panel}>
            <Container style={{marginBottom: 0, width: '100%'/*minWidth: '1366px'*/}}>
            <div className="menuCardContainer" style={styles.menuCardContainer}>
                {children}
            </div>
            </Container>
        </div>
    )
}


MenuCardPanel.defaultProps = {

}

export default MenuCardPanel;