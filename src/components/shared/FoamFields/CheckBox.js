import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, Text, View, TouchableHighlight, } from 'react-native';

import { COLORS, FONTS, SIZES, ICONS } from '../../../constants';


const CheckBox = (props) => {
	const { darkMode, value, itemList, onTermChange, handleSelectedValues, style, label, editable = true, iconStyle, icon, iconColor, validationStatus, validationStatusStyle, } = props;

	const [field, setField] = useState([]);

	const [selectionList, setSelectionList] = useState([]);

	useEffect(() => {
		let updatedValues = itemList.slice(0);

		/**
		 * if values are already selected and comming from container
		 * then compare it with the display array type and if the 
		 * selected value matches with the type of display array then update 
		 * it's status to true else set it's to false
		 */
		if (value.length) {
			for (let indexOfList = 0; indexOfList < updatedValues.length; indexOfList++) {
				for (let indexOfValueList = 0; indexOfValueList < value.length; indexOfValueList++) {
					if (updatedValues[indexOfList].type.toLowerCase() === value[indexOfValueList].toLowerCase()) {
						updatedValues[indexOfList].selected = true
					}
				}
			}
			setSelectionList(updatedValues)
			setField(value)
		}
		/**
		 * if the value array is empty then it means
		 *  no value selected then pass the default 
		 * display array i.e itemlist into the selectionList 
		 */
		else {
			setSelectionList(itemList)
			setField(value)
		}

	}, [value.length])





	const handleItemChange = (item) => {
		//update the selected value array
		let arr = selectionList.slice(0);
		let temp = field.slice(0);
		for (let index = 0; index < arr.length; index++) {
			if (arr[index].type === item) {
				arr[index].selected = !arr[index].selected
				if (arr[index].selected === true) {
					temp.push(arr[index].type)
				}
				if (arr[index].selected === false) {
					temp = temp.filter(element => element !== item)

				}
			}

		}

		setField(temp)
		setSelectionList(arr)
		handleSelectedValues(temp)
		onTermChange(arr)
	}


	return (
		<View>
			<View style={[styles.row1]}>
				{label && <View>
					<Text style={[styles.label, !editable && { color: COLORS.disabled }]}>{label}
					{validationStatus && <Text style={[styles.label, darkMode && DARK_THEME.lightGray7, !editable && { color: COLORS.disabled }, validationStatusStyle]}>{" "}{validationStatus}</Text>}
					</Text>
				</View>}
				{icon &&
					<View style={[styles.textInputIcon, iconStyle]}>
						<ICONS.MaterialIcons name={icon} color={iconColor ? iconColor : COLORS.black1} size={SIZES.calender} />
					</View>
				}
			</View>
			<View style={style}>
				{itemList.map((item, index) =>
					<View key={index}>
						<View style={[styles.item,
						{
							marginBottom:
								// index !== value.length - 1 ?
								'2%'
							//  : 0 
						}
						]}>
							<TouchableHighlight
								disabled={!editable}
								onPress={() => editable ? handleItemChange(item.type) : {}} >
								<View style={[styles.itemIcon,
								{ backgroundColor: item.selected ? COLORS.black1 : 'transparent', },
								!editable && styles.disabledCheckBox
								]}>
									{item.selected && <ICONS.AntDesign
										name={'check'} color={COLORS.white} size={14} />}
								</View>
							</TouchableHighlight>
							<Text style={[styles.itemText, !editable && { color: COLORS.lightGray1 }]}>{item.type}{"  "}
								<Text style={styles.subText}>{item.subText}</Text>
							</Text>
						</View>
					</View>
				)}
			</View>
		</View>

	)
}

export default CheckBox

const styles = StyleSheet.create({

	disabledCheckBox: {
		backgroundColor: COLORS.disabled,
		borderColor: COLORS.gray
	},
	row1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	placeholder: {
		color: COLORS.lightGray1,
		...FONTS.h2_r,
	},
	field: {
		color: COLORS.black1,
		...FONTS.h2_r,
	},
	label: {
		...FONTS.body4_r,
		paddingBottom: '2%',
		color: COLORS.gray3,
		lineHeight: 16,
		textTransform: 'capitalize'
	},
	itemText: {
		marginLeft: "4%",
		...FONTS.h2_m,
		color: COLORS.black1,
		lineHeight: 18,
		textTransform: 'capitalize'
	},
	itemIcon: {
		width: SIZES.width * 0.05,
		height: SIZES.width * 0.05,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 2,
		borderWidth: 2,
		borderColor: COLORS.black1
	},
	item: {
		flexDirection: 'row',
		alignItems: "center",
	},
	subText: {
		...FONTS.xsmall_r,
		lineHeight: 18,
		letterSpacing: 0.16,
		color: COLORS.black3
	}

})
