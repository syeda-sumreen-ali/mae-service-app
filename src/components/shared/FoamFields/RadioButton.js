import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, Text, View, TouchableHighlight, } from 'react-native';

import { COLORS, FONTS, SIZES, ICONS } from '../../../constants';

// itemlist will be change and then send back tothe parent component

const RadioButton = (props) => {
	const { darkMode, itemList, onTermChange, style, label, validationStatus, validationStatusStyle, editable, radioButtonStyle, RadioButtonColor, radioButtonItemStyle } = props

	const handleItemChange = (item, index) => {
		itemList.forEach(element => {
			if (element.type === item) {
				element.selected = true
			} else {
				element.selected = false
			}
		});
		onTermChange(itemList)
		// let arr = itemList.slice(0)

		// arr.forEach((item) => item.selected = false)
		// arr[index] = {
		// 	type: item,
		// 	selected: true
		// };
		// onTermChange(arr)

	}

	return (

		<View style={style}>
			<View style={styles.row1}>
				{label && <View>
					<Text style={[styles.label, {}]}>{label}
						{validationStatus && <Text style={[styles.label, darkMode && DARK_THEME.lightGray7, !editable && { color: COLORS.disabled }, validationStatusStyle]}>{" "}{validationStatus}</Text>}
					</Text>
				</View>}
			</View>
			<View >
				{itemList.map((item, index) =>
					<View key={index}>
						<View style={[styles.item, radioButtonItemStyle, { marginBottom: index !== itemList.length - 1 ? '2%' : 0 }]}>
							<TouchableHighlight
								underlayColor={COLORS.light}
								onPress={() => handleItemChange(item.type, index)} >
								<View style={[styles.itemIcon, radioButtonStyle]}>
									{item.selected && <ICONS.FontAwesome name={'circle'} color={RadioButtonColor || COLORS.black1} size={10} />}
								</View>
							</TouchableHighlight>

							<Text style={styles.itemText}>{item.type}</Text>
						</View>
					</View>
				)}
			</View>
		</View>

	)
}

export default RadioButton

const styles = StyleSheet.create({

	row1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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
		borderRadius: (SIZES.width * 0.05) / 2,
		borderWidth: 2,
		borderColor: COLORS.black1,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: "hidden"
	},
	item: {
		flexDirection: 'row',
		alignItems: "center",
	}

})
