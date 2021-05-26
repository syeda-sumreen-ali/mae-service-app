import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import TextFieldComponent from './TextFields'
import { COLORS, FONTS, ICONS, SIZES } from '../../../constants'

const MultipleInputField = (props) => {

	const { icon, iconColor, iconStyle, btnRight, onTermChange, onPressBtn, maxLength, label, hideLabel, remove, labelStyle, value, editable, addInputBtnLabel, placeholder, crossBtnStyle, addInputBtnLabelStyle, children, onRemove, validationStatus, validationStatusStyle, addListInputTextStyle} = props
	const [listInput, setListInput] = useState(value ? value : ['']);

	const removeListInput = index => {
		if (onRemove) {
			onRemove(listInput[index])
		}
		listInput.splice(index, 1)
		onTermChange(listInput)
		setListInput(listInput)
	}
	const addListInput = () => {
		if (maxLength) {
			if (listInput.length < maxLength) {
				setListInput([...listInput, ''])
			}
		}
		else {
			setListInput([...listInput, ''])
		}

	}

	return (
		<View>
			{listInput.map((item, index) => {
				return (
					<View
						style={{
							flexDirection: 'row',
							alignItems: "center",
							justifyContent: "space-around",
							paddingLeft: '7%',
							paddingRight: '2%',
							marginTop: index !== 0 ? -20 : 0
						}}
						key={index}
					>
						<TextFieldComponent
							value={item}
							validationStatus={index === 0 ? validationStatus : ''}
							validationStatusStyle={validationStatusStyle}
							placeholder={placeholder}
							style={[styles.textInput, { marginBottom: index !== listInput.length - 1 ? '6%' : '2%' }]}
							label={index === 0 ? label : ''}
							labelStyle={labelStyle}
							hideLabel={hideLabel}
							btnRight={index === 0 && btnRight}
							onPressBtn={index === 0 && onPressBtn}
							onTermChange={(val) => {
								let temp = listInput.slice(0)
								temp[index] = val
								setListInput(temp)
								onTermChange(temp)
							}}
							// onPressBtn={updatedProfile.languages ? (val) => onProfileUpdate(val, 'languages') : (val) => handleEditMode('languages')}
							editable={editable}
							icon={icon}
							iconColor={iconColor}
							iconStyle={iconStyle}
						/>

						<View
							style={[{
								width: "20%",
								height: 50,
								position: "absolute",
								right: -20,
								top: index === 0 ? 60 : 40,
								// bottom: '40%'
								// marginBottom: -70,

								alignItems: 'center',
								// justifyContent: 'center',
								// alignSelf: 'center',
								// marginVertical: "5%"
								// index !== listInput.length - 1 ? 0 : '-5%'
							}, crossBtnStyle]}>
							{index >= 0 && <TouchableHighlight onPress={() => removeListInput(index)}>

								<View style={{
									backgroundColor: COLORS.black1,
									borderRadius: 4,
									padding: 1,
									width: '30%',
									// alignSelf: "center",
									alignItems: "center",
									justifyContent: "center"
								}}>

									<ICONS.AntDesign name={'close'} size={16} color={COLORS.white} />
								</View>
							</TouchableHighlight>}
						</View>
					</View>)
			})}

			<TouchableHighlight
				underlayColor={'transparent'} onPress={() => addListInput()}
				style={[styles.addListInputLink, addInputBtnLabelStyle]}>
				<View>
					<Text style={[styles.addListInputText, !!addListInputTextStyle && addListInputTextStyle]}>{addInputBtnLabel}</Text>
				</View>
			</TouchableHighlight>
		</View>
	)
}

export default MultipleInputField

const styles = StyleSheet.create({
	addListInputLink: { width: '30%', paddingVertical: '2%' },
	addListInputText: {
		...FONTS.h1_r,
		color: COLORS.black1,
		marginBottom: '6%',
		lineHeight: 24,
		textDecorationLine: 'underline',
	},
	labelStyle: {
		paddingBottom: '4%',
	},
	textInput: {
		width: '110%',
		// width: '100%',
		marginTop: '2%'
	},
})