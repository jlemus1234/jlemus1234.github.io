import React from 'react'

class WideBanner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }


    render(){
        return(
            <div style={style.container}>


            </div>
        )
    }
}

const style = {
    container: {
        width: '100%',
        background: '#D9F9FF',
        height: '500px'
    }
}

export default WideBanner;