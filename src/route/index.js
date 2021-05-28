import React, {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {RouteList,initialRouteName} from './routeList'
import {isReadyRef, navigationRef, navigate} from './rootNavigation'
import {connect} from 'react-redux'
import { clearToast} from '../store/actions'
import { Toast } from '../components'
const Stack = createStackNavigator()

export class Route extends Component {
  componentDidMount () {
    return () => {
      isReadyRef.current = false
    }
  }
  render () {
    return (
      <NavigationContainer
        ref={navigationRef}
        onReady={() => (isReadyRef.current = true)}>
          {this.props.isToastShowing && <Toast {...this.props.toastConfig} clearToast={this.props.clearToast}/>}
        <Stack.Navigator initialRouteName={initialRouteName}>
          {RouteList.map((route,index )=> (
            <Stack.Screen
              key={index}
              name={route.name}
              component={route.component}
              options={{headerShown: false}}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const mapStateToProps= props =>{
  const {toast ,auth} = props 
  return {
    isToastShowing:toast.isToastShowing,
    toastConfig:toast.config 
  }
}

export default connect (mapStateToProps,{clearToast})(Route)
