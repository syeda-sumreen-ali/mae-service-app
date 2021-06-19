import React from 'react'
import Route from './route'
import { LogBox } from 'react-native';
import {Provider} from 'react-redux'
import store from './store'
import Splash from '../src/screen/screens/splash';
// for specific warnings
// LogBox.ignoreLogs([])

// for all warnings
// LogBox.ignoreLogs()

const App = () => {
  return (
    <Provider store={store}>
      <Route/>
      {/* <Splash/> */}
    </Provider>
  )
}

export default App
