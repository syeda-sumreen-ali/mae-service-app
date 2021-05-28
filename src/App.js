import React from 'react'
import Route from './route'
import { LogBox } from 'react-native';
import {Provider} from 'react-redux'
import store from './store'
// for specific warnings
// LogBox.ignoreLogs([])

// for all warnings
// LogBox.ignoreLogs()

const App = () => {
  return (
    <Provider store={store}>
      <Route/>
    </Provider>
  )
}

export default App
