import React from 'react'
import Topic from './topic'
import PropTypes from 'prop-types'

export default class RootTopic extends React.Component {
    render() {
        let topic = this.props.topic
        return (
            <Topic className="outline-root-topic" topic={topic}>
                <div>
                    {topic.title}
                </div>
                <hr/>
            </Topic>
        )
    }
}

RootTopic.propTypes = {
    topic: PropTypes.object.isRequired
}