import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { FONTS, COLORS } from "../../../constants";

const Label = ({ title, subText, titleStyle, subTextStyle }) => {
	return (
		<Text style={[styles.small_r, titleStyle, titleStyle]}>{title} <Text style={[styles.xsmall_r, subTextStyle]}>{subText}</Text>
		</Text>
	)
}

export default Label

const styles = StyleSheet.create({
	small_r: { ...FONTS.small_r, lineHeight: 16, letterSpacing: 0.32, color: COLORS.gray3, paddingBottom: '2%' },
	xsmall_r: { ...FONTS.xsmall_r, color: COLORS.gray3, lineHeight: 16, letterSpacing: 0.27 },
})
