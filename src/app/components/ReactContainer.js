import React from 'react'

import {I18nextProvider} from 'react-i18next'
import i18n from '../i18n'

import { Router, Route } from 'react-router'

import AppContainer from './app/AppContainer'
import MenuNavTop from './menus/MenuNavTop'


class ReactContainer extends React.Component {

    createElement = (Component, props) => {
        return <Component factory={this.props.factory} {...props} />
    }

    render () {
        let {factory} = this.props
        const routes = [
            <Route path="/test" component={(props) => <div><MenuNavTop factory={factory}/>TEST</div>}/>,
            <Route path="/" component={(props) => <AppContainer factory={factory} counter={factory.state.counter} value={factory.state.counter.getState()} plus={() => factory.state.counter.dispatch({type:'INCREMENT'})} less={() => factory.state.counter.dispatch({type:'DECREMENT'})}/>}/>,
            <Route path="*" component={(e) => { console.log('unhandled route', e.routeParams.splat); return null }} />
        ]

        return (
            <I18nextProvider i18n={i18n}>
                <Router
                    history={factory.history}
                    createElement={this.createElement}
                    routes={routes}/>
            </I18nextProvider>
        )
    }
}

export default ReactContainer
