import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES } from '../../constants'
const Button = ({ title, handleButton, }) => {
	return (
		<TouchableHighlight onPress={() => handleButton()} style={[styles.btn, btnStyle]}>
			<Text style={[styles.btnText, btnTextStyle]}>{title}</Text>
		</TouchableHighlight>
	)
}

export default Button

const styles = StyleSheet.create({
	btn: {
		backgroundColor: COLORS.black2,
		width: SIZES.width / 1.8,
		height: SIZES.height * 0.1
	},
	btnText: {
		...FONTS.h2_m,
		color: COLORS.light
	}
})
