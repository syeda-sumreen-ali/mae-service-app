import React from 'react'
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native'
import { COLORS, FONTS, IMAGES } from '../../constants'

const Header = ({
	title,
	titleStyle,
	subTitle,
	subTitleStyle,
	rightBtnText,
	rightBtnTextStyle,
	children,
	onPressLeft,
	onPressRight,
	navigation,
	hideRightBtn=false
}) => {
	return (
		<View style={styles.header}>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => onPressLeft ? onPressLeft() : navigation.goBack()}
			>
				<Image
					style={styles.headerRightImage}
					source={IMAGES.icons_actions_left}
				/>
			</TouchableOpacity>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				{children ? children : <>
					{title && <Text style={[styles.headerText, { ...FONTS.h1_m }, titleStyle]}>
						{title}
					</Text>}
					{subTitle &&
						<Text style={(styles.headerText, { ...FONTS.body4_r }, subTitleStyle)}>
							{subTitle}
						</Text>}</>}
			</View>

		{!hideRightBtn 	?
		<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => onPressRight ? onPressRight() : navigation.goBack()}
			>
				<Text style={[styles.headerRightBtn, rightBtnTextStyle]}>{rightBtnText || 'Done'}</Text>
			</TouchableOpacity>
			:<View/>
			}

		</View>
	)
}

export default Header

const styles = StyleSheet.create({

	header: {
		backgroundColor: COLORS.white,
		borderBottomWidth:2,
		borderBottomColor:COLORS.lightGray1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 15,
		paddingRight: 15,
		// position: "absolute",
		// top: 0,
		// right: 0,
		// left: 0,
		height: 70,
		// zIndex: 50,
	},
	headerText: {
		...FONTS.h1_m,
		color: COLORS.black1,
		lineHeight: 24,
		letterSpacing: 0.15
	},
	headerRightImage: {
		width: 24,
		height: 26,
	},
	headerRightBtn: {
		...FONTS.h1_m,
		color: COLORS.black1,
		lineHeight: 24,
		letterSpacing: 0.15
	},
})
