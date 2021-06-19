import React from 'react'
import {Text} from 'react-native'
import Route from './route'
import { LogBox } from 'react-native';
import {Provider} from 'react-redux'
import store from './store'
import { Home } from './screens';
// for specific warnings
// LogBox.ignoreLogs([])

// for all warnings
// LogBox.ignoreLogs()

const App = () => {
  return (
    <Provider store={store}>
    {/* //   <Text>zssssssssssssssssssssssssssss</Text> */}
      <Route/>
    </Provider>
    // <Home/>
  )
}

export default App
