import React from 'react'
import {Link} from 'gatsby'

// home, aboutme, resume
// p around a link element
//const NavigationBar = (currentPage) => (
class NavigationBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    addLinks(){
        console.log("Add links was called")
        let bar = []
        for(var i = 0; i < this.props.pageList.length; i++){
            bar.push(
                <p>
                    <Link
                    to={this.props.pageList[i][1]}
                    style={style.links}
                    >
                    {this.props.pageList[i][0]}
                    </Link>
                </p>
            )
        }
        console.log("Finished adding links")
        console.log(bar)
        return bar
    }

    createNavBar(){
        // Check if the arrays that make up the array are the proper size and type (array)
        // pageList is an array and not empty
        console.log("Made it to createNavBar")
        console.log(this.props.pageList)
        if(Array.isArray(this.props.pageList) && this.props.pageList.length > 0){
            // every element inside it is an array of size two
            for(var i = 0; i < this.props.pageList.length; i++){
                if(Array.isArray(this.props.pageList[i]) && this.props.pageList[i].length === 2){
                    return (this.addLinks())
                }
                console.log("Problem with inner array")
            }
            console.log("Problem with outer array")
        }

        console.log("PageList error: Check that prop is passed in correctly")

    }


    render(){

        return(
            <div style={style.container}>
                {this.createNavBar()}
            </div>
        )
    }
}




const style={
    links:{
        color: 'black',
        textDecoration: 'none'   
    },

    linkPMargin:{
        marginRight: '10px'
    },

    currentPage:{
        textWeight: 'bold'
    },

    container:{
        display: 'flex',
        justifyContent: 'space-between'
    }
}

NavigationBar.defaultProps = {
    // make it an array of two element string arrays
    // [[name, page]]
    pageList: []
}

export default NavigationBar;

