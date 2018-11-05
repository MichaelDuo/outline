import React from 'react'
import PropTypes from 'prop-types'

export default class Topic extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className={ 'outline-topic ' + this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

Topic.propTypes = {
    className: PropTypes.string,
    topic: PropTypes.object.isRequired,
    children: PropTypes.node
}
