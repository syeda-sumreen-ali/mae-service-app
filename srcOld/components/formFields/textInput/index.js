import React, {useState, useEffect} from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'
import {FONTS, COLORS, ICONS, DARK_THEME, SIZES} from '../../../constants'

 const TextFieldComponent = props => {
  const {
    value,
    isfocus,
    loader,
    placeholder,
    type,
    icon,
    iconStyle,
    validationStatus,
    activeColorReadOnly,
    validationStatusStyle,
    onTermChange,
    maxLength,
    iconColor,
    iconFamily,
    style,
    label,
    btnRight,
    onPressBtn,
    editable = true,
    keyboardType,
    hideLabel,
    darkMode,
    children,
    getOnlyNumbers,
    hideText=true
  } = props
  // const { loader,isfocus, value, placeholder, type, icon, iconStyle, onTermChange, maxLength, iconColor, iconFamily, style, label, btnRight, onPressBtn, editable, keyboardType, hideLabel, darkMode, children } = props;

  const [field, setField] = useState('')
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    setField(value)
  }, [value])

  const validateField = val => {
    if (label.toLowerCase() === 'email') {
      const email_frmt = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      email_frmt.test(val) === false
        ? setErrMsg('Invalid Email Format')
        : setErrMsg(null)
    }
    if (label.toLowerCase() === 'age') {
      val <= 0 ? setErrMsg('Invalid Age') : setErrMsg(null)
    } else {
      setErrMsg(null)
    }
  }

  const handleTextChange = val => {
    setField(val)
    validateField(val)
    // if (errMsg === null) {
    onTermChange(val)
    // }
  }
  const isUpdatedFields = value => {
    let currentVal = ''
    if (label === 'Date of Birth') {
      currentVal = value
        ? new Date(value.split('T')[0]).toLocaleDateString()
        : ''
    } else if (label === 'Age') {
      currentVal = value ? value : ''
    } else {
      currentVal = value || ''
    }
    return currentVal
  }

  const handleSubmit = () => {
    // if not in edit mode
    if (editable === false) {
      onPressBtn(field || value)
    } else {
      validateField(field)
      // if in edit mode  validate and submit
      // alert('required field is empty')
      if (errMsg == null) {
        onPressBtn(field || value)
      }
    }
  }

  return (
    <View>
      <View style={styles.row1}>
        {hideLabel ? null : label ? (
          <>
            <Text
              style={[
                styles.label,
                darkMode && DARK_THEME.lightGray7,
                !editable && !activeColorReadOnly && {color: COLORS.disabled},
              ]}>
              {label}
              {validationStatus && (
                <Text
                  style={[
                    styles.label,
                    darkMode && DARK_THEME.lightGray7,
                    !editable && {color: COLORS.disabled},
                    validationStatusStyle,
                  ]}>
                  {' '}
                  {validationStatus}
                </Text>
              )}
            </Text>
          </>
        ) : (
          children && children
        )}

        {!!btnRight && (
          <View>
            <TouchableHighlight
              onPress={() => handleSubmit()}
              underlayColor={'transparent'}>
              <Text style={[styles.btnRightText, darkMode && DARK_THEME.white]}>
                {btnRight}
              </Text>
            </TouchableHighlight>
          </View>
        )}
        {loader && (
          <View style={{padding: 5, paddingRight: 10}}>
            <ActivityIndicator size={'small'} color='grey' />
          </View>
        )}
      </View>

      {/* MOBILE MASKING TEXT INPUT */}

      {label.toLowerCase() === 'mobile number' ? (
        <TextInput
          autoFocus={isfocus ? isfocus : false}
          maxLength={maxLength}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={COLORS.primary}
          onChangeText={(formatted, extracted) => {
            setField(formatted)
            handleTextChange(formatted)
          }}
          keyboardType='number-pad'
          value={field}
          style={[
            styles.textInput,
            style,
            !editable && !activeColorReadOnly && styles.disabledTextInput,
          ]}
        />
      ) : // <TextInputMask
      // 	onChangeText={(formatted, extracted) => {
      // 		setField(formatted)
      // 		handleTextChange(formatted)
      // 	}}
      // 	editable={editable}
      // 	value={'1234123'}
      // 	// placeholder={'+92-300-3438283'}
      // 	keyboardType='number-pad'
      // 	// mask={'+92-[000]-[0000000]'}
      // 	keyboardType={keyboardType ? keyboardType : 'default'}
      // 	style={[styles.textInput, !errMsg && style, editable && styles.active_border, errMsg && styles.danger_border]}
      // />

      // DATE  TEXT INPUT BUTTON
      type === 'date' ? (
        <TouchableHighlight
          disabled={!editable}
          onPress={() => onPressBtn()}
          style={style}>
          <View style={[styles.date]}>
            <Text
              style={
                value
                  ? {
                      color:
                        editable || activeColorReadOnly
                          ? COLORS.black1
                          : COLORS.primary,
                    }
                  : styles.placeholder
              }>
              {' '}
              {// value ? isUpdatedFields(value) : placeholder
              value ? value : placeholder}
            </Text>
            <ICONS.MaterialIcons
              name={'date-range'}
              color={
                value && (editable || activeColorReadOnly)
                  ? COLORS.black1
                  : COLORS.primary
              }
              size={SIZES.calender}
            />
          </View>
        </TouchableHighlight>
      ) : (
        // DEFAULT TEXT INPUT
        <View style={styles._textInput}>
          <TextInput
          secureTextEntry={hideText}
            autoFocus={isfocus ? isfocus : false}
            maxLength={maxLength}
            editable={editable}
            placeholder={placeholder}
            placeholderTextColor={COLORS.primary}
            // onChange={(e) => console.log(e)}
            onChangeText={val =>
              getOnlyNumbers
                ? // new RegExp(/^(\s*|\d+)$/).test(val) &&
                  handleTextChange(val.replace(/[^0-9]/g, ''))
                : handleTextChange(val)
            }
            keyboardType={keyboardType ? keyboardType : 'default'}
            value={isUpdatedFields(field || value)}
            style={[
              styles.textInput,
              style,
              darkMode && DARK_THEME.lightGray9BG,
              !editable && !activeColorReadOnly && styles.disabledTextInput,
              // !errMsg && style, editable && styles.active_border, errMsg && styles.danger_border
            ]}
            // 	onKeyPress={(e) => (e.nativeEvent.key === '-') &&
            // 	console.log(e)
            // 	// e.persist()
            // }
          />
          {icon && (
            <View style={[styles.textInputIcon, iconStyle]}>
              {iconFamily ? (
                iconFamily === 'AntDesign' ? (
                  <ICONS.AntDesign
                    name={icon}
                    color={
                      editable && !!activeColorReadOnly
                        ? COLORS.disabled
                        : iconColor
                        ? iconColor
                        : COLORS.black1
                    }
                    size={SIZES.calender}
                  />
                ) : null
              ) : (
                <ICONS.MaterialIcons
                  name={icon}
                  color={
                    editable && !!activeColorReadOnly
                      ? COLORS.disabled
                      : iconColor
                      ? iconColor
                      : COLORS.black1
                  }
                  size={SIZES.calender}
                />
              )}
            </View>
          )}
        </View>
      )}

      {/* {errMsg && <Text style={[{ color: COLORS.danger }, style]}>{errMsg}</Text>} */}
    </View>
  )
}

export default TextFieldComponent
const styles = StyleSheet.create({
  disabledTextInput: {
    backgroundColor: COLORS.lightGray4,
    borderBottomColor: COLORS.lightGray1,
    color: COLORS.disabled,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  _textInput: {flexDirection: 'row', overflow: 'hidden'},
  textInput: {
    backgroundColor: COLORS.secondary,
    // borderColor: 'transparent',
    borderColor: COLORS.base,
    borderRadius:50,
    marginBottom:20,
    color:COLORS.primary,
    
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 15,
    width: '100%',
    ...FONTS.h2_r,
    lineHeight: 18,
    letterSpacing: 0.16,
  },

  date: {
    backgroundColor: COLORS.lightGray3,
    borderColor: 'transparent',
    borderBottomColor: COLORS.gray2,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: '2%',
    alignItems: 'center',
  },
  active_border: {
    borderWidth: 2,
    borderColor: COLORS.black1,
    borderBottomColor: COLORS.black1,
    borderRadius: 4,
  },

  label: {
    ...FONTS.body4_r,
    paddingBottom: '2%',
    color: COLORS.gray3,
    lineHeight: 16,
    letterSpacing: 0.32,
  },
  placeholder: {
    color: COLORS.lightGray1,
    ...FONTS.h2_r,
  },
  btnRightText: {
    ...FONTS.h1_b,
    color: COLORS.gray3,
    lineHeight: 16,
    letterSpacing: 0.43,
    textAlign: 'right',
  },
  textInputIcon: {
    alignSelf: 'center',
    marginLeft: -30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
