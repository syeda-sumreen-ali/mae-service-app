import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, TouchableHighlight, View } from 'react-native'
import { COLORS, ICONS, SIZES, IMAGES } from '../../../constants'
import TextFieldComponent from './TextFields'

const MultipleBtnFieldTab = (props) => {
	const { iconFunc, status, btnType, value, onTermChange, btnRight, onPressBtn, editable = true, validationStatus, validationStatusStyle } = props
	let socialLinks = [
		{
			name: "twitter",
			icon: "twitter",
			fontFamily: "AntDesign"
		},
		{
			name: "facebook",
			icon: "sc-facebook",
			fontFamily: "EvilIcons"
		},
		{
			name: "snapchat",
			icon: "snapchat",
			fontFamily: "MaterialCommunityIcons"
		},
		{
			name: "linkedin",
			icon: "linkedin",
			fontFamily: "Entypo"
		},
		{
			name: "instagram",
			icon: "instagram",
			fontFamily: "AntDesign"
		},
		{
			name: "youtube",
			icon: "youtube",
			fontFamily: "AntDesign"
		},
		{
			name: "blog",
			icon: "blogger",
			fontFamily: "Zocial"
		},
		{
			name: "ticktok",
			icon: null,
			fontFamily: null
		},

	]
	const [fieldArr, setfieldArr] = useState([])
	const [activeBtnTab, setactiveBtnTab] = useState(0)

	useEffect(() => {
		let arr = []

		if (btnType === 'social_icons') {
			socialLinks.forEach(element => {
				arr.push({ name: element.name, link: "", latestUpdated: false })
			});
			setfieldArr(arr)
		}

		arr.forEach(element => {
			for (let key in value) {
				if (element.name === key && value[key].data) {
					element.link = value[key].data
					element.is_update = value[key].is_update
					element.status = value[key].status
				}
			}
		})
	}, [value])
	return (

		<View>
			<View style={styles._btnTab}>
				{socialLinks.map((item, index) => (

					<TouchableHighlight
						underlayColor={COLORS.light}
						key={index}
						style={activeBtnTab === index ? styles.activeBtn : styles.inActiveBtn}
						onPress={() => setactiveBtnTab(index)}>

						{item.fontFamily === 'EvilIcons' ?
							<ICONS.EvilIcons
								name={item.icon} style={activeBtnTab === index ? styles.activeBtnIcon : styles.inActiveBtnIcon}
							/> :
							item.fontFamily === 'MaterialCommunityIcons' ?
								<ICONS.MaterialCommunityIcons name={item.icon} style={activeBtnTab === index ? styles.activeBtnIcon : styles.inActiveBtnIcon} /> :
								item.fontFamily === 'Entypo' ?
									<ICONS.Entypo name={item.icon} style={activeBtnTab === index ? styles.activeBtnIcon : styles.inActiveBtnIcon} /> :
									item.fontFamily === 'Zocial' ?
										<ICONS.Zocial name={item.icon} style={activeBtnTab === index ? styles.activeBtnIcon : styles.inActiveBtnIcon} /> :
										item.fontFamily === 'AntDesign' ?
											<ICONS.AntDesign name={item.icon} style={activeBtnTab === index ? styles.activeBtnIcon : styles.inActiveBtnIcon} /> :
											<Image source={IMAGES.icons_action_ticktok} style={{ width: 20, height: 20, tintColor: activeBtnTab === index ? COLORS.black1 : COLORS.lightGray1 }} />
						}
					</TouchableHighlight>
				))}
			</View>

			{fieldArr.length > 0 && <TextFieldComponent
				value={fieldArr[activeBtnTab].link}
				style={styles.textInput}
				validationStatus={validationStatus}
				validationStatusStyle={validationStatusStyle}
				label={fieldArr[activeBtnTab].name || ""}
				placeholder={"/Username"}
				labelStyle={styles.labelStyle}
				btnRight={btnRight}
				onPressBtn={onPressBtn}
				onTermChange={(val) => {
					let temp = fieldArr.slice(0)
					temp[activeBtnTab].link = val
					temp[activeBtnTab].latestUpdated = true
					setfieldArr(temp)
					onTermChange(temp)
				}}
				editable={editable}
				icon={iconFunc && iconFunc(fieldArr[activeBtnTab].is_update, fieldArr[activeBtnTab].status, fieldArr[activeBtnTab].link, status)}
				iconColor={iconFunc && iconFunc(fieldArr[activeBtnTab].is_update, fieldArr[activeBtnTab].status, fieldArr[activeBtnTab].link, status) === 'warning' ? 'orange' : iconFunc && iconFunc(fieldArr[activeBtnTab].is_update, fieldArr[activeBtnTab].status, fieldArr[activeBtnTab].link, status) === 'check-circle' ? 'green' : 'red'}
				iconStyle={{ paddingBottom: "5%" }}
			/>}

		</View>


	)
}

export default MultipleBtnFieldTab

const styles = StyleSheet.create({
	_btnTab: { flexDirection: 'row', marginBottom: '4%' },
	inActiveBtn: {
		borderWidth: 1,
		borderColor: COLORS.lightGray1,
		width: 35,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
		borderRadius: 2
	},
	activeBtn: {
		borderWidth: 1,
		borderColor: COLORS.black1,
		width: 35,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
		borderRadius: 2

	},
	inActiveBtnIcon: {
		fontSize: 25,
		color: COLORS.lightGray1
	},
	activeBtnIcon: {
		fontSize: 25,
		color: COLORS.black1
	},
	textInput: {
		marginBottom: '4%'
	}

})
