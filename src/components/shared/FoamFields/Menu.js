import React, { useState } from 'react'
import { StyleSheet, FlatList, Text, View, TouchableHighlight, } from 'react-native';
import { COLORS, FONTS, SIZES, ICONS } from '../../../constants';
;
import DropDownPicker from "react-native-custom-dropdown";

const DropDownField = (props) => {
	const { value, onItemChange, itemList, placeholder, style, label, btnRight, onPressBtn, editable } = props

	const [field, setField] = useState(value);
	const [errMsg, setErrMsg] = useState(null);
	const [showDropdown, setShowDropdown] = useState(false)
	const [country, setCountry] = useState('Africa/Abidjan')


	let arr = [];
	itemList.map(item => arr.push({ label: item, value: item }))
	// const onChangeItem = (val) => {
	// 	setField(val);
	// 	onItemChange(val);
	// };

	const handleSubmit = () => {
		// if not in edit mode 
		if (editable === false) {
			onPressBtn(field || value)
		}
		else {
			if (!field) {
				setErrMsg('Field is required')
			} else {
				setErrMsg(null)
				onPressBtn(field || value)
			}
		}
	}

	return (
		<View>
			<View style={styles.row1}>
				{label && <View>
					<Text style={[styles.label, {}]}>{label}</Text>
				</View>}
				<View>

					<TouchableHighlight
						// disabled={editable}
						// underlay={"transparent"}
						underlayColor={'transparent'}
						onPress={() => handleSubmit()}
					>
						<Text>{btnRight}</Text>
					</TouchableHighlight>

				</View>
			</View>

			<DropDownPicker
				// items={[
				// 	{ label: 'UK', value: 'uk' },
				// { label: 'France', value: 'france' },
				// ]}
				items={arr}
				defaultValue={country}
				containerStyle={{ height: 40 }}
				style={{ backgroundColor: '#fafafa' }}
				itemStyle={{
					justifyContent: 'flex-start'
				}}
				dropDownStyle={{ backgroundColor: '#fafafa' }}
				onChangeItem={item => setCountry(item.value)}
			/>

		</View >

	)
}

export default DropDownField

const styles = StyleSheet.create({

	row1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	dropdown: {
		flexDirection: 'row',
		justifyContent: "space-between",
		paddingHorizontal: '2%',
		height: 50,
		alignItems: 'center',
		backgroundColor: COLORS.lightGray3,
		borderBottomWidth: 2,
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
	},

	dropdownItem: {
		// backgroundColor: COLORS.white,
		padding: '4%',
		// justifyContent: "center",
		// alignItems: "center",
		backgroundColor: COLORS.lightGray3,
		borderColor: COLORS.lightGray1,
		borderWidth: 1,
		height: 50,
		borderBottomColor: COLORS.gray2,
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
	},
	btnRight: {
		...FONTS.h1_b,
		color: COLORS.gray3,
	},
})
