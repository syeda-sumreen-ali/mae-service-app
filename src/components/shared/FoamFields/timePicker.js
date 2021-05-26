import React, { useState } from 'react'
import TextFieldComponent from './TextFields'
import { StyleSheet, Text, View, TouchableHighlight, Modal } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const TimePicker = ({ value, isVisible, style, placeholder, onTermChange, label, labelStyle, validationStatus, validationStatusStyle }) => {
  const [show, setShow] = useState(isVisible);
  const [time, setTime] = useState(value || '');

  const handleConfirm = (val) => {
    let temp = new Date(val).getHours() + ":" + new Date(val).getMinutes() + ":" + new Date(val).getSeconds()
    setTime(temp);
    onTermChange(temp);
    setShow(false);
  }


  return (
    <View style={styles.container}>
      <DateTimePickerModal
        style={{ backgroundColor: COLORS.lightGray1 }}
        isVisible={show}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={() => setShow(false)}
      />

      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={() => setShow(!show)}>

        <TextFieldComponent
          validationStatus={validationStatus}
          validationStatusStyle={validationStatusStyle}
          activeColorReadOnly={true}
          editable={false}
          value={time}
          style={style}
          label={label}
          placeholder={placeholder}
          labelStyle={labelStyle}
        />
      </TouchableHighlight>
    </View>
  )
}



const styles = StyleSheet.create({})
