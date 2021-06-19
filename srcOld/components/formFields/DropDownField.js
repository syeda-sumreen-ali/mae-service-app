import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, Text, View, TouchableHighlight, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SIZES, ICONS } from '../../constants';

const DropDownField = (props) => {
	const { value, loader, onTermChange, itemList, placeholder, icon, iconFamily, iconColor, dropdownModalStyle, iconStyle, style, label, btnRight, onPressBtn, editable = true, borderActive = true, validationStatus, validationStatusStyle } = props

	// const { value, onTermChange, itemList, placeholder, style,
	// 	label, btnRight, onPressBtn, editable = true, borderActive = true,
	// 	icon, iconStyle, iconFamily, iconColor
	// } = props

	const [field, setField] = useState(value);

	const [errMsg, setErrMsg] = useState(null);
	const [showDropdown, setShowDropdown] = useState(false)


	const handleSubmit = () => {
		// if not in edit mode 
		// if (editable === false) {
		// 	onPressBtn(field || value);
		// }
		// else {
		// 	if (!field) {
		// 		setErrMsg('Field is required')
		// 	} else {
		// 		setErrMsg(null);
		// 		onPressBtn(field || value)
		// 	}
		// }
		onPressBtn()
	}

	useEffect(() => {
		// if(itemList.length && typeof itemList[0]==='object'){

		// }
		if (editable === false) {
			setShowDropdown(false)
		}
	}, [editable])
	return (
		<View>
			<View style={styles.row1}>
				{label && <View>
					<Text style={[styles.label, !editable && { color: COLORS.disabled }]}>{label}
						{validationStatus && <Text style={[styles.label, !editable && { color: COLORS.disabled }, validationStatusStyle]}>{" "}{validationStatus}</Text>}
					</Text>
				</View>}
				{loader &&
					<View style={{ padding: 5, paddingRight: 10 }}>
						<ActivityIndicator size={'small'} color='grey' />
					</View>
				}
				{!!btnRight && <View>

					<TouchableHighlight
						// disabled={editable ? false : true}
						// underlay={"transparent"}
						underlayColor={'transparent'}
						onPress={() => { onPressBtn() }}
					// onPress={() => {
					// 	// handleSubmit();
					// 	onPressBtn()
					// 	// setShowDropdown(!showDropdown);
					// }}
					>
						<Text style={styles.btnRight}>{btnRight}</Text>
					</TouchableHighlight>

				</View>}
			</View>

			<TouchableHighlight
				disabled={!editable}
				onPress={() => setShowDropdown(!showDropdown)} style={style}>
				<View style={[styles.dropdown, !editable && styles.disabledTextInput
					//  editable && borderActive && styles.active_border, errMsg && styles.danger_border
				]}>
					<Text style={(!editable || !field) ? styles.placeholder : field && styles.field}>{field ? field : placeholder}</Text>
					{icon ?
						iconFamily === 'AntDesign' ? <ICONS.AntDesign name={icon} style={[styles.arrow_down, iconStyle, iconColor && { color: iconColor }]} /> :
							<ICONS.MaterialIcons name={icon} color={iconColor} size={20} />
						: <ICONS.AntDesign name="down" style={[styles.arrow_down, !editable && { color: COLORS.disabled }]} />}
				</View>
			</TouchableHighlight>
			{showDropdown && <View>

				<View style={[styles.dropdownModal, dropdownModalStyle]}>
					<FlatList
						nestedScrollEnabled={true}
						initialNumToRender={4}
						keyExtractor={item => item.toString()}
						data={itemList}
						renderItem={({ item, index }) => {
							return (
								// <Text>asdasd</Text>
								<TouchableHighlight onPress={() => {
									setField((typeof item === 'string' || typeof item === 'number') ? item : item.title);
									onTermChange(item);
									setShowDropdown(false);
								}}>

									<Text style={styles.dropdownItem}>{
										((typeof item).toLowerCase().toString() === 'number' || (typeof item).toLowerCase().toString() === 'string') ? item : item.title
									}
									</Text>
								</TouchableHighlight>
							)
						}
						}
					/>


				</View>
				{/* </Modal> */}
			</View>}

		</View >

	)
}

export default DropDownField

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
	dropdownModal: {
		maxHeight: (SIZES.height / 4) + 20,
		minHeight: 'auto',
		backgroundColor: COLORS.light,
		marginTop: -24,
		elevation: 4,
		overflow: "hidden",
		elevation: 6
	},
	dropdown: {
		flexDirection: 'row',
		justifyContent: "space-between",
		paddingHorizontal: '2%',
		height: 50,
		alignItems: 'center',
		backgroundColor: COLORS.lightGray3,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.lightGray1,

	},
	arrow_down: {
		color: COLORS.black,
		fontSize: SIZES.arrow_down
	},
	placeholder: {
		color: COLORS.lightGray1,
		...FONTS.h2_r,
	},
	field: {
		color: COLORS.black1,
		...FONTS.h2_r,
		textTransform: "capitalize"
	},

	dropdownItem: {
		backgroundColor: COLORS.light,
		padding: "4%",
		borderWidth: 1,
		borderColor: COLORS.lightGray3,
		height: 50,
		textTransform: "capitalize"
	},
	active_border: {
		borderWidth: 2,
		borderColor: COLORS.black1,
		borderBottomColor: COLORS.black1,
		borderRadius: 4
	},
	danger_border: {
		borderWidth: 2,
		borderColor: COLORS.danger,
		borderBottomColor: COLORS.danger,
		borderRadius: 4
	},
	label: {
		...FONTS.body4_r,
		paddingBottom: '2%',
		color: COLORS.gray3,
		lineHeight: 16
	},
	btnRight: {
		...FONTS.h1_b,
		color: COLORS.gray3,
		lineHeight: 16,
		letterSpacing: 0.43,
		textAlign: 'right'
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
})
