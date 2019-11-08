import React from 'react'

const Container = ({ children }) => (
    <div style={styles.container}>
        {children}
    </div>
)

const styles = {
    container: {
        maxWidth: 1366,
        //maxWidth: 966,
        margin: '0 auto'
    }
}

export default Container;