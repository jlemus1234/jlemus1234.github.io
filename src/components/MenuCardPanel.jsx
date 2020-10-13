import React from 'react'
import Container from '../components/Container'

const styles = {
    panel: {
        width: '100%',
        backgroundColor: 'gray',
        //minHeight: '30%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '50px'

        //        margin: '0, auto'
    },

    menuCardContainer: {
        width: '100%',
        //width: '1336px',
        //height: '80%',
        minHeight: '80%',
        maxHeight: '80%',
        marginTop: '50px',
        marginBottom: '50px',
        //    height: '500px',
        //backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between'
    }
}

/*
function renderChildren(){
    return React.Children.map(this.props.children, (child, i) => {
        return(
            React.cloneElement(child, {alignmentDir: {width: '20%'}})
        )
    })
}
*/

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