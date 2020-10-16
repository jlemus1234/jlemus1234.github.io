import React from 'react'

const styles = {
    panel: {
        marginTop: '50px',
        marginBottom: '50px'
    },

    container: {
        
    },


}


const HorizontalCardPanel = ({children}) => {
    return (
        <div className="HorizontalCardPanel" style={styles.panel}>
            {children}
        </div>
    )

}

export default HorizontalCardPanel;