import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, TouchableHighlight, Keyboard } from 'react-native';
import { FONTS, COLORS, ICONS, SIZES } from '../../../constants';

/**
 * NOTE:-
 * In useEffect method the  keys is converting into string to display
 * in field to track the record of valuesfrom backend because
 * if we not set in field it will overwrite all the existing values .
 * and set value to keylist to display keywords
 * 
 * onTermChange will call on onBlur field so the array 
 * will update in the container state when the user change the 
 * focus of textInput which avoid continous changing of value in useEffect 
 * 
 * addingKeyword will call onChangeText so the keys display
 * in component while updating will come from keylist and 
 * not from values
 * 
 * remove key will remove two adjacent same keywords
 *  e.g. 'the' 'the' both will remove  
 */


const Keywords = (props) => {

	const { value, placeholder, onTermChange, onPressBtnRight, style, label, hideLabel, editable, maxKeywords, disableRemoveKey, btnRight, validationStatus, validationStatusStyle,
		icon, iconColor, iconStyle, iconFamily, deletOnly } = props;

	const [field, setField] = useState('');


	const [keyList, setkeyList] = useState([])
	const [disabled, setDisabled] = useState(false)

	const handleTextChange = (val) => {
		// if (!disabled) {
		val = val.replace(/(\r\n|\n|\r)/gm, "");
		setField(val);
		if (val.length === 0) {
			setField('')
			setkeyList([])
		}
		addingKeyword()
		// } else alert('keyword value is too large')
	};

	const removeKeyword = (index, item) => {
		let arr = keyList.slice(0)
		arr = arr.filter(item => item !== keyList[index])

		//if all keys deleted and arr become undefined assign it an empty arr else arr
		setkeyList(arr || [])
		//after deleting large keys if arr is empty then enable typing 
		!arr.length && setDisabled(false)

		//remove key from text 
		let text = field.replace(item, "")
		text = text.replace("  ", " ")
		setField(text || "")
		onTermChange(arr)

	}

	const addingKeyword = (val) => {
		val = val.replace(/(\r\n|\n|\r)/gm, "");
		setField(val);
		if (val.length === 0) {
			setField('')
			setkeyList([])
			onTermChange([])
		}

		else {


			let tempValues;
			tempValues = val

			if (tempValues.length > 0) {
				//split into keywords
				let arr = tempValues.split(' ')

				// remove redundant spaces from keys		
				arr = arr.filter(val => val !== '');


				// if arr is not undefined 
				//  it's length greater than 15 diabled typinge
				// else set keylist
				if (arr[arr.length - 1]) {

					if ((arr[arr.length - 1]).length > 15) {
						setDisabled(true);
						setkeyList(arr)
						alert('keyword length is too large')
						arr.pop
					} else {
						setDisabled(false);
						onTermChange && onTermChange(arr);
						setkeyList(arr);

					}
				}
			}
		}

	}

	useEffect(() => {
		if (value) {
			if (value.length !== keyList.length) {
				let temp = value.toString()
				for (let index = 0; index < temp.length; index++) {
					if (temp[index] === ',') {
						temp = temp.replace(temp[index], " ")
					}
				}
				setField(temp);

				setkeyList(value);
			}
		}

	}, [value]);


	return (
		<ScrollView>
			<View style={styles.row1}>
				{!hideLabel && label && <View style={styles._label}>
					<Text style={[styles.label, !editable && { color: COLORS.disabled }]}>{label}
						{validationStatus && <Text style={[styles.label, !editable && { color: COLORS.disabled }, validationStatusStyle]}>{" "}{validationStatus}</Text>}
					</Text>
				</View>}
				{maxKeywords && <View style={styles._maxKeywords}>
					<Text>{keyList.length}/{maxKeywords}</Text>
				</View>}
				{btnRight && <View>
					<TouchableHighlight
						onPress={() => onPressBtnRight()}
						underlayColor={'transparent'}>
						<Text style={[styles.btnRight]}>{btnRight}</Text>
					</TouchableHighlight>
				</View>}
			</View>
			<View style={[styles.textInput, style, !editable && styles.disabledTextInput]}>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1 }}>
						<View style={styles._keywords}>
							{keyList.map((item, index) => {
								return (
									<View key={index}>
										<View
											style={[styles.keyword, !editable && styles.disabledTextInput]}>
											<Text style={[styles.keywordText, !editable && { color: COLORS.disabled }]}>{item}</Text>
											<TouchableHighlight
												disabled={disableRemoveKey}
												underlayColor={COLORS.gray}
												onPress={() => removeKeyword(index, item)}>
												<ICONS.AntDesign name={'close'} style={[styles.closeIcon, !editable && { color: COLORS.disabled }]} />
											</TouchableHighlight>
										</View>
									</View>
								)
							})}

						</View>
					</View>
					<View style={{ flex: 0.1, alignItems: 'flex-end' }}>
						{icon &&
							<View style={[styles.textInputIcon, iconStyle]}>
								{iconFamily &&
									(iconFamily === 'AntDesign' ?
										<ICONS.AntDesign name={icon} color={iconColor ? iconColor : COLORS.black1} size={16} /> :
										<ICONS.MaterialIcons name={icon} color={iconColor ? iconColor : COLORS.black1} size={20} />
									)

								}
							</View>
						}
					</View>
				</View>


				<TextInput
					multiline={true}
					//  if editable is true then check if maxkeyword exist
					//   if yes the check the keylist length should be less tha maxkeywords
					//  and if any of these coditions false  or explicit disabled key is true then edit mode will be disable
					editable={deletOnly ? false : editable ? ((maxKeywords && maxKeywords <= keyList.length || disabled) ? false : true) : false}
					placeholder={placeholder}
					placeholderTextColor={COLORS.gray}
					// onEndEditing={() => addingKeyword()}
					onSubmitEditing={() => Keyboard.dismiss()}
					onChangeText={(val) => addingKeyword(val)}
					value={field}
					onBlur={() => {
						// onTermChange(keyList)
					}}
				/>
			</View>
		</ScrollView>
	);
};

export default Keywords;

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
	textInput: {
		backgroundColor: COLORS.lightGray3,
		borderColor: 'transparent',
		borderBottomColor: COLORS.gray2,
		borderWidth: 1,
		minHeight: SIZES.height / 3.5,
		maxHeight: null,
		overflow: 'hidden',
		paddingVertical: '2%',
		paddingHorizontal: 15,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		color: COLORS.black1,
		width: '100%',
		...FONTS.h2_r,
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
	keywordText: {
		...FONTS.h3_r,
		color: COLORS.black3,
		lineHeight: 16,
		textTransform: "lowercase"
	},
	closeIcon: {
		...FONTS.h3_r,
		color: COLORS.black1,
		fontWeight: '700'
	},
	_keywords: { flexDirection: 'row', width: '100%', flexWrap: 'wrap' },
	keyword: {
		flexDirection: 'row',
		backgroundColor: COLORS.lightGray5,
		paddingHorizontal: 10,
		paddingVertical: 5,
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 35,
		marginHorizontal: '4%',
		marginVertical: '4%',
		elevation: 2
	},
	btnRight: {
		...FONTS.h1_b,
		color: COLORS.gray3,
		lineHeight: 16,
		letterSpacing: 0.43,
		textAlign: 'right'
	},
	_label: {
		flex: 0.8
	},
	_maxKeywords: {
		...FONTS.body4_r,
		color: COLORS.gray3,
		lineHeight: 16,
		letterSpacing: 0.32,

	}
});


