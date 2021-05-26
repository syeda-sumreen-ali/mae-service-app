import React, {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {RouteList,initialRouteName} from './routeList'
import {isReadyRef, navigationRef, navigate} from './rootNavigation'
import { Splash } from '../screens'

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

export default Route
