import OutlineComp from './view/outline.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
export default class Outline {
    constructor(data){
        this.data = data
    }

    mount(id){
        ReactDOM.render(
            React.createElement(OutlineComp, { data: this.data }, null),
            document.getElementById(id)
        )
    }
}

window.Outline = Outline