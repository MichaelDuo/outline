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
        this.state = {
            dataString: JSON.stringify(this.props.data, null, 2)
        }
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
        return (
            <div>
                <RootTopic></RootTopic>
                <MainTopic></MainTopic>
            </div>
        )
    }
}

Outline.propTypes = {
    data: PropTypes.object
}