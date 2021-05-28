import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import {COLORS, FONTS} from '../../constants'

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
        backgroundColor: COLORS.black1,
        marginVertical: 10,
        height: 55,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        // margin: 20,
      },
      btnTxt: {
        color: COLORS.light1,
        textAlign: 'center',
        letterSpacing: 0.75,
        ...FONTS.h2_m,
      },
})
