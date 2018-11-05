import React from 'react'
import PropTypes from 'prop-types'
import ActionSheetModule from '../modules/action-sheet'
import CopypasteModule from '../modules/copypaste'
import DragndropModule from '../modules/dragndrop'
import SelectionModule from '../modules/selection'

import RootTopic from './root-topic'
import MainTopic from './main-topic'

export default class Outline extends React.Component {
    constructor(props){
        super(props)
        this.state = { }
    }
    
    componentDidMount(){
        this.initModules()
    }

    initModules(){
        this.actionSheetModule = new ActionSheetModule(this)
        this.copypasteModule = new CopypasteModule(this)
        this.dragndropModule = new DragndropModule(this)
        this.selectionModule = new SelectionModule(this)
    }

    render() {
        let rootTopic = this.props.rootTopic
        let rootTopicChildren = rootTopic.children || []
        return (
            <div className="outline">
                <RootTopic topic={rootTopic}></RootTopic>
                {rootTopicChildren.map(child => <MainTopic key={child.id} topic={child}></MainTopic>)}
            </div>
        )
    }
}

Outline.propTypes = {
    rootTopic: PropTypes.object
}