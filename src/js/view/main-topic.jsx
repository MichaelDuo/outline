import React from 'react'
import Topic from './topic'
import PropTypes from 'prop-types'

import Handle from './handle'

export default class MainTopic extends React.Component {
    render() {
        let topic = this.props.topic
        let children = topic.children || []
        return (
            <Topic className="outline-main-topic" topic={topic}>
                <div className="outline-main-topic__content">
                    <Handle/>
                    <div className="outline-main-topic__title">{topic.title}</div>
                </div>
                <div className="outline-main-topic__children">
                    {children.map(child => <MainTopic key={child.id} topic={child}/>)}
                </div>
            </Topic>
        )
    }
}

MainTopic.propTypes = {
    topic: PropTypes.object.isRequired
}
