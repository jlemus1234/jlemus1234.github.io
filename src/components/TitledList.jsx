import React from 'react'


class TitledList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    checkStringArray(a) {
        return a.every((i) => typeof i === "string");
    }

    render() {
        let expandedString = ""

        if (this.props.listArray != null) {
            if (this.checkStringArray(this.props.listArray)) {
                expandedString = this.props.listArray.join(", ")
            } else {
                expandedString = "List contained non-string"
            }
        } else {
            // for testing purposes
            expandedString = "No list provided"
        }

        return (
            <div style={styles.container}>
                <p style={styles.title}>{this.props.title}: </p>
                <p style={styles.listContents}>{expandedString}</p>
            </div>
        )
    }
}

TitledList.defaultProps = {
    title: 'List Title',
    listArray: null
}


const styles = {
    title: {
        display: 'inline',
        fontWeight: 'bold'
    },
    listContents: {
        display: 'inline'

    },
    container: {

    }
}



export default TitledList;