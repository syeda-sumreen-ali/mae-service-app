import React, { useState } from 'react'
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native'
import { COLORS } from '../../constants'

// const STYLES = ['default', 'dark-content', 'light-content']
// const TRANSITIONS = ['fade', 'slide', 'none']

const Screen = ({ children, style, center=true }) => {
  return (
    <SafeAreaView style={[styles.container, center &&styles.center, style]}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.primary}
        barStyle={'default'}
        showHideTransition={'fade'}
      />
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
   center:{
    justifyContent: 'center',
    alignItems: 'center',
   },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
})

export default Screen
