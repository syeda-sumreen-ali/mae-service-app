import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { COLORS, SIZES, FONTS, DARK_THEME } from '../../../constants';

const FooterDualButton = ({ btn1Label, btn2Label, btn1LabelStyle, btn2LabelStyle, onPressBtn1, onPressBtn2, btn1Style, btn2Style, darkMode, btnContainer }) => {

	return (
		<View style={[styles.footer, darkMode && styles.darkFooter, btnContainer]}>
			<TouchableHighlight
				underlayColor={darkMode ? COLORS.black1 : COLORS.light}
				style={[styles.btn, darkMode ? DARK_THEME.darkBG : styles.btnBorder, btn1Style]}
				onPress={() => onPressBtn1()}
			>
				<Text style={[
					darkMode ? styles.btnText1Dark : styles.btnText1Light,
					btn1LabelStyle,
				]}>
					{btn1Label}
				</Text>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor={COLORS.light}
				style={[styles.btn, darkMode ? DARK_THEME.lightGray6BG : styles.btnBorder, btn2Style]}
				onPress={() => onPressBtn2()}
			>
				<Text style={[
					darkMode ? styles.btnText2Dark : styles.btnText2Light,
					btn2LabelStyle,
				]}>
					{btn2Label}
				</Text>
			</TouchableHighlight>
		</View>
	)
}

export default FooterDualButton

const styles = StyleSheet.create({
	footer: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		height: 60,
		paddingHorizontal: '2%',
		paddingVertical: '1%',
		backgroundColor: COLORS.gray7,
		display: 'flex',
		flexDirection: 'row',

	},
	darkFooter: {
		height: SIZES.height * 0.12,
		paddingVertical: '3%',
		paddingHorizontal: '5%',
		borderTopWidth: 1,
		...DARK_THEME.darkBG,
		...DARK_THEME.black2BR
	},

	btn: {
		flex: 1,
		backgroundColor: COLORS.black2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnBorder: {
		borderColor: COLORS.gray7,
		borderWidth: 2,
	},
	btnText1Light: {
		...FONTS.body3_m,
		color: COLORS.light,
		letterSpacing: 0.75,
		textTransform: "uppercase",
		textAlign: 'center',
	},
	btnText2Light: {
		...FONTS.body3_m,
		color: COLORS.light,
		letterSpacing: 0.75,
		textTransform: "uppercase",
		textAlign: 'center',
	},
	btnText1Dark: {
		...FONTS.body1_r,
		color: COLORS.white,
		letterSpacing: 0,
		textTransform: "capitalize",
		textAlign: 'center',
	},
	btnText2Dark: {
		...FONTS.body1_r,
		color: COLORS.gray7,
		letterSpacing: 0,
		lineHeight: 22,
		textTransform: 'capitalize',
		textAlign: 'center',
	},

})
