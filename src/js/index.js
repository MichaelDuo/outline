import '../styles/index.less'
import OutlineComp from './view/outline.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
export default class Outline {
    constructor(data){
        this.rootTopic = data.rootTopic
    }

    mount(id){
        ReactDOM.render(
            React.createElement(OutlineComp, { rootTopic: this.rootTopic }, null),
            document.getElementById(id)
        )
    }
}

window.Outline = Outline