import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import {COLORS, FONTS, SIZES} from '../../constants'

 const ButtonComponent = ({onPress, title, btnStyle, btnTextStyle}) => {
    return (
        <TouchableOpacity
              onPress={() => onPress()}
              style={[styles.btn,  btnStyle&&btnStyle]}>
              <Text style={[styles.btnTxt, btnTextStyle&& btnTextStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent
const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.primary,
        borderWidth:1.5,

        marginVertical: 10,
        height: 45,
        borderRadius:50,
        borderColor:COLORS.secondary,
        width: SIZES.width*0.5,
        justifyContent: 'center',
        alignSelf: 'center',
        // margin: 20,
      },
      btnTxt: {
        color: COLORS.secondary,
        textAlign: 'center',
        letterSpacing: 0.75,
        ...FONTS.h_m,
      },
})
