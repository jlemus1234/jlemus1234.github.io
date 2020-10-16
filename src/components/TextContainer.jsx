import React from 'react'

const Container = ({ children, style }) => (
    <div style={{...styles.container, ...style}}>
        {children}
    </div>
)

const styles = {
    container: {
        //maxWidth: 700,
        maxWidth: 966,
        margin: '0 auto',
        whiteSpace: 'pre-wrap'
    }
}

export default Container;