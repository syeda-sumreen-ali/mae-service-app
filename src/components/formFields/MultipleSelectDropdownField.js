import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	ScrollView,
	FlatList,
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity,
	ActivityIndicator
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES, ICONS } from "../../constants";

const MultipleSelectDropDownField = (props) => {
	const {
		loader,
		onTermChange,
		value,
		itemList,
		placeholder,
		style,
		label,
		btnRight,
		onPressBtn,
		dropdownModalStyle,
		editable = true,
		borderActive = true,
		icon,
		iconColor,
		iconStyle,
		iconFamily,
		validationStatus,
		validationStatusStyle,
		returnType

	} = props;

	// console.log(props)
	const [field, setField] = useState([]);
	const [errMsg, setErrMsg] = useState(null);
	const [showDropdown, setShowDropdown] = useState(false);
	const [selectionList, setselectionList] = useState([]);
	const handleSubmit = () => {
		// if not in edit mode
		if (editable === false) {
			onPressBtn(field || value);
		} else {
			if (!field) {
				setErrMsg("Field is required");
			} else {
				setErrMsg(null);
				onPressBtn(field || value);
			}
		}
	};


	// console.log(props)
	useEffect(() => {
		// let arr = [];
		setField(value && value.toString() || [])
		// if the list consist of string items make it an object and add selection key
		let arr = []
		let obj = {}
		if (typeof itemList[0] === "string") {
			itemList.forEach(element => {
				obj = {
					type: element,
					selected: false
				}
				arr.push(obj)
			})
			// console.log(arr)

			if (value) {
				arr.forEach((item1, index) => {
					value.forEach(item2 => {
						if (item1.type === item2) {
							item1.selected = true
						}
					})
				})
			}
			setselectionList(arr)
		}
		else if (typeof itemList[0] === "object") { //arr
			if (typeof value === 'object') { //obj
				let labelArr = []
				for (const key in value) {
					if (value[key].data) {
						itemList.forEach(element => {
							if (element.name === key) {
								element.selected = true,
									labelArr.push(element.type)
							}
						})
					}
				}

				setField(labelArr.toString())
			}
			setselectionList(itemList)
		}
		if (editable === false) {
			setShowDropdown(false)
		}
	}, [value, editable])




	const handleItemChange = (item) => {

		let arr = selectionList.slice(0);
		const index = arr.findIndex((el) => el.type === item);

		arr[index] = {
			...arr[index],
			selected: !arr[index].selected,
			// latestUpdated: true

		};
		setselectionList(arr);
		if (!returnType) {
			return onTermChange(arr)

		} else {

			let temp = arr.filter((element) => element.selected === true);
			// console.log("TEMPPPPPPPPPPPPPPPP", temp);
			// return;
			let selectedItems = [];
			temp.forEach((element2) => {
				selectedItems.push(element2.type);
			});
			onTermChange(selectedItems);
			setField(selectedItems.toString());
		}

	};
	// return <View><Text>sadsadas</Text></View>

	return (
		<View>
			<View style={styles.row1}>
				{!!label && (
					<View>
						<Text style={[styles.label, !editable && { color: COLORS.disabled }]}>{label}
							{validationStatus && <Text style={[styles.label, !editable && { color: COLORS.disabled }, validationStatusStyle]}>{" "}{validationStatus}</Text>}
						</Text>
					</View>
				)}
				{!!btnRight && <View>
					<TouchableOpacity
						activeOpacity={0.7}
						// disabled={editable}
						underlayColor={"transparent"}
						onPress={() => handleSubmit()}
					>
						<Text style={styles.btnRight}>{btnRight}</Text>
					</TouchableOpacity>
				</View>}
				{loader &&
					<View style={{ padding: 5, paddingRight: 10 }}>
						<ActivityIndicator size={'small'} color='grey' />
					</View>
				}
			</View>

			<TouchableOpacity
				activeOpacity={0.7}
				disabled={!editable}
				onPress={() => setShowDropdown(!showDropdown)}
				style={[style]}
			>
				<View
					style={[
						styles.dropdown,
						!editable && styles.disabledTextInput,
						//  editable && borderActive && styles.active_border, errMsg && styles.danger_border
					]}>
					<Text
						style={
							!editable || !field ? styles.placeholder : field && styles.field
						}
					>
						{field.length ?
							(field.length > 40
								? field.slice(0, 40) + "..."
								: field) : placeholder}




					</Text>
					{icon ?
						<ICONS.AntDesign name={icon} style={[styles.arrow_down, iconStyle, iconColor && { color: iconColor }]} />
						: <ICONS.AntDesign name="down" style={[styles.arrow_down, !editable && { color: COLORS.disabled }]} />}
				</View>

			</TouchableOpacity>
			{showDropdown && (
				<View>
					<View style={[styles.dropdownModal, dropdownModalStyle]}>
						<FlatList
							nestedScrollEnabled={true}
							data={selectionList}
							renderItem={({ item, index }) => {
								return (
									<TouchableHighlight
										key={index}
										// onPress={() => alert(232)}

										onPress={() => handleItemChange(item.type)}
									>
										<View style={[styles.dropdownItem]}>
											<TouchableHighlight onPress={() => handleItemChange(item.type)}>
												<View style={[styles.itemIcon,
												{
													backgroundColor: item.selected ? COLORS.black1 : "transparent",
												}]}	>
													{item.selected && (
														<ICONS.AntDesign name={"check"} color={COLORS.white} size={14} />
													)}
												</View>
											</TouchableHighlight>

											<Text style={styles.itemText}>{item.type}</Text>
										</View>
									</TouchableHighlight>
								);
								// )}
							}}
							keyExtractor={(item) => item.type}
						/>
					</View>
					{/* </Modal> */}
				</View>
			)}
		</View>
	);
};

export default MultipleSelectDropDownField;

const styles = StyleSheet.create({
	disabledTextInput: {
		backgroundColor: COLORS.lightGray4,
		borderBottomColor: COLORS.lightGray1,
		color: COLORS.disabled
	},
	row1: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	dropdownModal: {
		height: 200,
		backgroundColor: COLORS.light,
		elevation: 4,
		overflow: "hidden",
		elevation: 6,
		marginTop: -5,
	},
	dropdown: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: "2%",
		height: 50,
		alignItems: "center",
		backgroundColor: COLORS.lightGray3,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.lightGray1,
	},
	arrow_down: {
		color: COLORS.black,
		fontSize: SIZES.arrow_down,
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
		backgroundColor: COLORS.light,
		padding: "4%",
		borderWidth: 1,
		borderColor: COLORS.lightGray3,
		height: 50,
		flexDirection: "row",
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
		paddingBottom: "2%",
		color: COLORS.gray3,
		lineHeight: 16,
	},
	btnRight: {
		...FONTS.h1_b,
		color: COLORS.gray3,
		lineHeight: 16,
		letterSpacing: 0.43,
		textAlign: 'right'
	},

	itemText: {
		marginLeft: "4%",
		...FONTS.h2_m,
		color: COLORS.black1,
		lineHeight: 18,
		textTransform: "capitalize",
	},
	itemIcon: {
		// width: SIZES.width * 0.05,
		// height: SIZES.width * 0.05,
		width: 20,
		height: 20,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 2,
		borderWidth: 2,
		borderColor: COLORS.black1,
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
	},
});
