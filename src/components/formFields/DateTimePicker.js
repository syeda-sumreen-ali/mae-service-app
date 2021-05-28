import React, { useEffect, useState } from 'react'
import TextField from './textInput'
import Calendar from './Calendar'
import { StyleSheet, View, TouchableHighlight, Modal } from 'react-native'
import { SIZES } from '../../constants'

const DateTimePicker = ({ value, style, placeholder, onTermChange, label, btnRight, open=false, onPressBtn, labelStyle, minDate, maxDate, initialDate, editable, validationStatus, validationStatusStyle, }) => {
	const [isCalenderOpen, setIsCalenderOpen] = useState(open);
	const [pickDateFromCalender, setPickDateFromCalender] = useState(value || '')
	const getDateInFormate = (value) => {
		let currentDate = new Date(value)
		let day = currentDate.getDate();
		let month = currentDate.getMonth() + 1;
		let year = currentDate.getFullYear();
		return `${month}/${day}/${year}`
	}

	useEffect(() => {
		if(value){
			setPickDateFromCalender(getDateInFormate(value))
		}

	}, [value])
	return (
		<View style={styles.container}>
			{
				isCalenderOpen &&
				<Modal

					transparent={true}
					visible={isCalenderOpen}
				>
					<View
						style={styles.calendarContainer}
					>

						<Calendar
							setIsCalenderOpen={setIsCalenderOpen}
							minDate={minDate}  // year , month , day
							maxDate={maxDate}
							value={initialDate}
							selectDate={val => {
								setPickDateFromCalender(val);
								onTermChange(val);
							}}
						/>
					</View>
				</Modal>
			}
			<TouchableHighlight
				underlayColor={'transparent'}
				onPress={() => editable ? setIsCalenderOpen(true) : {}}
			>

				<TextFieldComponent
					activeColorReadOnly={true}
					value={pickDateFromCalender ? getDateInFormate(pickDateFromCalender.toString()) : ''}
					validationStatus={validationStatus}
					validationStatusStyle={validationStatusStyle}
					style={style}
					label={label}
					placeholder={placeholder}
					labelStyle={labelStyle}
					btnRight={btnRight}
					onPressBtn={onPressBtn}
					editable={false}
					icon={'date-range'}
					iconStyle={{ alignSelf: 'flex-start' }}
					activeColorReadOnly={editable}
				/>
			</TouchableHighlight>
		</View>
	)
}

export default DateTimePicker

const styles = StyleSheet.create({
	calendarContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		width: SIZES.width,
		height: SIZES.height,
		justifyContent: 'center',
		alignItems: 'center',
	}

})
