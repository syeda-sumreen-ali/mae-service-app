import React, { Component } from 'react'
import { Splash } from '../screens'

export class SplashContainer extends Component {
    render() {
        return <Splash navigation={this.props.navigation}/>
    }
}

export default SplashContainer
