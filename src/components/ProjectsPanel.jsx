import React from 'react'
import { Link } from 'gatsby'


const ProjectsPanelStyle = {
    display: 'inline-block',
    width: '100%'
}

class ProjectsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    // make its children alternate left and right

    renderChildren(){
        // can't remember what this does...
        // may just be passing 
        // adding an extra set of brackets just creates a closure instead of just 
        // returning the element needed

        //function cloneWithDirect(child, i)

        return React.Children.map(this.props.children, (child, i) => {
            //console.log("render children is running")
            //return React.cloneElement(child, {alignmentDir: "Right"})
            // set direction items float in
            if(i % 2 == 0){
                console.log("right child")
                const alignmentProp = {float: 'right'};
                //return React.cloneElement(child, alignmentProp)
                return (
                    <div>
                    {React.cloneElement(child, {alignmentDir: alignmentProp})}
                    </div>
                )
            }else{
                console.log("left child")
                const alignmentProp = {float: 'left'};
                //return React.cloneElement(child, alignmentProp)
                return (
                    <div>
                    {React.cloneElement(child, {alignmentDir: alignmentProp})}
                    </div>
                )
            }
//         return React.Children.map(this.props.children, (child, i) => 
//            React.cloneElement(child, {alignmentDir: "Right"})); 

        })
    }

    render(){
        return (
            <div style = {ProjectsPanelStyle} className = "ProjectsPanel">
                {this.renderChildren()}
            </div>
        )
    }
}

export default ProjectsPanel;