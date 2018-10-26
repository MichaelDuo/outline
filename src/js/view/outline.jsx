import React from 'react'
import PropTypes from 'prop-types'

export default class Outline extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dataString: JSON.stringify(this.props.data, null, 2)
        }
    }

    render() {
        return (
            <div>{this.state.dataString}</div>
        )
    }
}

Outline.propTypes = {
    data: PropTypes.object
}