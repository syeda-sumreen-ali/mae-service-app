import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View, TouchableWithoutFeedback } from 'react-native';
import { FONTS, ICONS, COLORS, SIZES } from '../../../constants';

const TextArea = (props) => {

	const { value, placeholder, onTermChange, style, maxChar, validationStatus, validationStatusStyle, btnRightText, btnRightStyle, btnRightTextStyle, onPressBtnRight, label, editable,
		iconColor, iconStyle, icon, iconFamily } = props;
	const [field, setField] = useState(value || '');
	const [onFocus, setOnFocus] = useState(false)
	const handleTextChange = (val) => {
		setField(val);
		onTermChange(val);
	};

	return (
		<TouchableWithoutFeedback onPress={() => setOnFocus(true)}>
			<>
				<View style={styles.row1}>
					{label && <View>
						<Text style={[styles.label, !editable && { color: COLORS.disabled }]}>{label}
							{validationStatus && <Text style={[styles.label, !editable && { color: COLORS.disabled }, validationStatusStyle]}>{" "}{validationStatus}</Text>}

						</Text>

					</View>}
					{maxChar && <View>
						<Text style={styles.maxChar}>{field.length}/{maxChar}</Text>
					</View>}

					{btnRightText && <TouchableHighlight
						style={[styles.btnRightStyle, btnRightStyle]}
						onPress={() => onPressBtnRight()}
						underlayColor={'transparent'}>
						<Text style={[styles.btnRightText, btnRightTextStyle]}>{btnRightText}</Text>
					</TouchableHighlight>}

				</View>


				<View style={[styles._textInput, style, !editable && styles.disabledTextInput
					// onFocus && styles.active_border,
				]}>
					<View style={styles.flexRow}>
						<TextInput
							style={styles.textInput}
							maxLength={maxChar}
							onFocus={() => setOnFocus(true)}
							multiline={true}
							placeholder={placeholder}
							placeholderTextColor={COLORS.gray}
							onChangeText={(val) => handleTextChange(val)}
							value={field || value}
							editable={editable}
							onPressBtnRight={onPressBtnRight}
							btnRightText={btnRightText}

						// onBlur={() => setOnFocus(false)}
						// onTouchEnd={() => setOnFocus(false)}
						/>
						{icon &&
							<View style={[styles.textInputIcon, iconStyle]}>
								{iconFamily ?
									(iconFamily === 'AntDesign' ?
										<ICONS.AntDesign name={icon} color={iconColor ? iconColor : COLORS.black1} size={SIZES.calender} /> : null
									)

									:
									<ICONS.MaterialIcons name={icon} color={iconColor ? iconColor : COLORS.black1} size={SIZES.calender} />}
							</View>
						}
					</View>
				</View>
			</>
		</TouchableWithoutFeedback>
	);
};

export default TextArea;

const styles = StyleSheet.create({
	disabledTextInput: {
		backgroundColor: COLORS.lightGray4,
		borderBottomColor: COLORS.lightGray1,
		color: COLORS.disabled
	},
	row1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textInput: { flex: 1.5 },
	_textInput: {
		backgroundColor: COLORS.lightGray3,
		borderColor: 'transparent',
		borderBottomColor: COLORS.gray2,
		borderWidth: 1,

		height: SIZES.height / 4,
		paddingLeft: 15,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		color: COLORS.black1,
		width: '100%',
		...FONTS.h2_r,
	},
	flexRow: { flexDirection: 'row', justifyContent: 'space-between' },
	textInputIcon: {
		flex: 0.12,
		paddingTop: "4%",
		paddingLeft: "2%"
	},

	active_border: {
		borderWidth: 2,
		borderColor: COLORS.black1,
		borderBottomColor: COLORS.black1,
		borderRadius: 4,
	},
	danger_border: {
		borderWidth: 2,
		borderColor: COLORS.danger,
		borderBottomColor: COLORS.danger,
		borderRadius: 4,
	},
	label: {
		...FONTS.body4_r,
		paddingBottom: '2%',
		color: COLORS.gray3,
		lineHeight: 16
	},
	placeholder: {
		color: COLORS.lightGray1,
		...FONTS.h2_r,
	},
	btnRightText: {
		...FONTS.h1_b,
		color: COLORS.gray3,
		lineHeight: 16,
		letterSpacing: 0.43,
		textAlign: 'right'
	},

	maxChar: {
		...FONTS.body4_r,
		color: COLORS.gray3,
		lineHeight: 16,
		letterSpacing: 0.32

	},
	textInputIcon: {
		position: 'absolute',
		right: 10,
		top: 10,
		// alignSelf: 'center',
		// marginLeft: -30,
		// height: 50,
		// alignItems: 'flex-end',
		// justifyContent: 'center'
	},


});


