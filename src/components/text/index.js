import React from 'react'
import { StyleSheet, Text} from 'react-native'
import {COLORS, FONTS} from '../../constants'

 const TextComponent = ({style , text, children}) => {
    return (
        <Text style={[ styles.text, style]}>{text} {children} </Text>
    )
}


const styles = StyleSheet.create({
  text:{
    color:COLORS.black,
    ...FONTS.h1_r
  } 
})
export default TextComponent
