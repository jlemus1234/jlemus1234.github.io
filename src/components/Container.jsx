import React from 'react'

const Container = ({ children }) => (
    <div className="Container" style={styles.container}>
        {children}
    </div>
)

const styles = {
    container: {
        maxWidth: 1366,
        //maxWidth: 966,
        margin: '0 auto',
        marginBottom: '100px'
    }
}

export default Container;