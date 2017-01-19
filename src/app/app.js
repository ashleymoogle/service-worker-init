import React from 'react' // eslint-disable-line
import ReactDOM from 'react-dom'
import ready from 'document-ready-promise'
import {browserHistory} from 'react-router'

import ReactContainer from './components/ReactContainer'
import AppFactory from './factories/AppFactory.js'
import './components/styles.css'

// Create Store and populate with data
const factory = new AppFactory()
factory.history = browserHistory

factory.init()
    .then(ready)
    .then(() => {
        ReactDOM.render((
            <ReactContainer factory={factory}/>
        ), document.getElementById('mount'))
    })

window.store = store
