import React from 'react'

const Container = ({ children, style }) => (
    <div className="Container" style={{...styles.container, ...style}}>
        {children}
    </div>
)

const styles = {
    container: {
        maxWidth: 1366,
        //maxWidth: 966,
        margin: '0 auto',
        //marginBottom: '100px'
    }
}

export default Container;