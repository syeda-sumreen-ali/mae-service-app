/**
 * Covered Scenerios
 * 1- Select date
 * 2- Show Current Date
 * 3- min max date limit
 * 4- year control
 * 5- if the selected year equals to min year and month pointer is lesser then the minimum date month then set the month pointer to the minimum date month same for max month if the month pointer exceed with month of max month then the monthpointer will set to maxmonth
 * 6- miniumDate Index disable minimum date values
 * 7- maximum date index disable maximum date values
 * 8-  show events
 * 9 select multiple dates  //remaining
 *  */

import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from 'react-native'
import {COLORS, FONTS, ICONS} from '../../constants'

let month = [
  'Januray',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Auguest',
  'September',
  'October',
  'November',
  'December',
]

let weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export class Calendar extends Component {
  state = {
    currentDate: new Date(),
    yearPointer: new Date().getFullYear(),
    monthPointer: new Date().getMonth(),
    lastDay: null,
    lastWeekDay: null,
    firstDay: 1,
    firstWeekday: null,
    dayNumArr: [],
    yearArr: [],
    showYearDropdown: false,
    currentDateIndex: null,
    selectDate: '',
    selectDateIndex: null,
    prevCount: null,
    eventIndexList: [],
    eventsData: [],
    minDate: null,
    maxDate: null,
    minDateIndex: null,
    maxDateIndex: null,
    disablePrevDate: false,
    disableNextDate: false,
  }
  static getDerivedStateFromProps (props, state) {
    const {events, minDate, maxDate} = props
    let {yearPointer, monthPointer, currentDate} = state
    let lastDay,
      currentDateIndex,
      minDateIndex,
      maxDateIndex,
      firstDay = 1,
      dayNumArr = []
    let lastWeekDay = -2
    lastDay = new Date(yearPointer, monthPointer + 1, 0).getDate()
    const firstWeekday = new Date(yearPointer, monthPointer, 1).getDay()
    let pushCurrentDays = false
    let prevCount = 0 //previousMonthPointerDaysCount
    let nextCount = 0 //nextMonthPointerDaysCount
    let eventsData = events
    let eventIndexList = []
	

    let prevMonthtDayPointer = new Date(yearPointer, monthPointer, 0).getDate()

    let i = 0
    // total length 42 to make the grid of 7 days and 6 columns dates
    while (dayNumArr.length < 42) {
      // -1 for previous month date  number for monthpointer dates
      if (i < firstWeekday) {
        prevCount++
        dayNumArr.push(-1)
      } else if (i >= firstWeekday && !pushCurrentDays) {
        for (let index = firstDay; index <= lastDay; index++) {
          dayNumArr.push(index)
          if (eventsData) {
            for (
              let eventIndex = 0;
              eventIndex < eventsData.length;
              eventIndex++
            ) {
              let val = new Date(eventsData[eventIndex])
              if (
                val.getMonth() === monthPointer &&
                val.getFullYear() === yearPointer &&
                val.getDate() === dayNumArr[index]
              ) {
                // console.log(index)
                // eventIndexList.push(index)
					eventIndexList[eventIndex] = { date:val, index: index }
					// console.log('right date')
              // }conso
              // 	console.log("eventsData",eventsData)
              }else{
              	// console.log('wrong date', )
				//   eventIndexList[eventIndex] = { ...eventsData[eventIndex], index: -4 } // -4 flag for no event
              }
            }
          }
        }

		// console.log(eventIndexList)
        //  if the month pointer and year showing the current date year and month
        //   set current date index
        if (
          currentDate.getMonth() === monthPointer &&
          currentDate.getFullYear() === yearPointer
        ) {
          currentDateIndex = dayNumArr.indexOf(currentDate.getDate())
        }

        // set minimum date index to disable minium dates if minimum date exist
        if (
          minDate &&
          minDate.getMonth() - 1 === monthPointer &&
          minDate.getFullYear() === yearPointer
        ) {
          minDateIndex = dayNumArr.indexOf(minDate.getDate())
        }

        // set maximum date index to disable maximium dates if maximum date exist

        if (
          maxDate &&
          maxDate.getMonth() - 1 === monthPointer &&
          maxDate.getFullYear() === yearPointer
        ) {
          maxDateIndex = dayNumArr.indexOf(maxDate.getDate())
        }

        // record event index to show events

        lastWeekDay = dayNumArr.length
        pushCurrentDays = true
      } else {
        nextCount++
        dayNumArr.push(nextCount) // add next month days
      }
      i++
    }

    //filter -1 and replace it with previousDayArray
    dayNumArr = dayNumArr.filter(day => day !== -1)

    prevMonthtDayPointer = prevMonthtDayPointer - prevCount
    let prevMonthtDayArr = []
    for (let prevMonthDay = 0; prevMonthDay < prevCount; prevMonthDay++) {
      prevMonthtDayPointer++
      prevMonthtDayArr.push(prevMonthtDayPointer)
    }

    dayNumArr = [...prevMonthtDayArr, ...dayNumArr]

    // make range for year 40 previous year and 10 next year

    let initialDropdownYear = minDate
      ? minDate.getFullYear()
      : currentDate.getFullYear() - 40
    let lastDropdownYear = maxDate
      ? maxDate.getFullYear() + 1
      : currentDate.getFullYear() + 10
    let yearArr = []

    for (
      let dropDownYear = initialDropdownYear;
      dropDownYear < lastDropdownYear;
      dropDownYear++
    ) {
      yearArr.push(dropDownYear)
    }

    return {
      yearPointer,
      monthPointer,
      lastDay,
      lastWeekDay,
      firstWeekday,
      dayNumArr,
      yearArr,
      currentDateIndex,
      prevCount,
      nextCount,
      events,
      minDate,
      maxDate,
      minDateIndex,
      maxDateIndex,
      eventsData,
	  eventIndexList
    }
  }

  nextMonth = () => {
    const {monthPointer, yearPointer, maxDate} = this.state
    if (monthPointer < 11) {
      let pointer = monthPointer
      ++pointer
      if (
        maxDate &&
        pointer >= maxDate.getMonth() && yearPointer >= maxDate.getFullYear()
      ) {
        alert("you can't select date from next month")
        return
      }
      this.setState({monthPointer: pointer})
    }
  }

  prevMonth = () => {
    const {monthPointer, yearPointer, minDate} = this.state
    if (monthPointer >= 1) {
      let pointer = monthPointer
      pointer = pointer - 1
      if (
        minDate &&
        pointer < minDate.getMonth() - 1 && yearPointer <= minDate.getFullYear()
      ) {
        alert("you can't select date from previous month")
        return
      }
      this.setState({monthPointer: pointer})
    }
  }

  selectYearFromDropDown = year => {
    const {monthPointer, minDate, maxDate} = this.state

    if (
      maxDate &&
      maxDate.getFullYear() === year && maxDate.getMonth() >= monthPointer
    ) {
      this.setState({
        monthPointer: maxDate.getMonth() - 1,
        disableNextDate: true,
        yearPointer: year,
        showYearDropdown: false,
      })
    }

    if (
      minDate &&
      minDate.getFullYear() === year && minDate.getMonth() > monthPointer
    ) {
      this.setState({
        monthPointer: maxDate.getMonth(),
        yearPointer: year,
        disablePrevDate: true,
        showYearDropdown: false,
      })
    } else {
      this.setState({
        yearPointer: year,
        showYearDropdown: false,
        disablePrevDate: false,
        disableNextDate: false,
      })
    }
  }

  onSelectDate = (day, index) => {
    const {yearPointer, monthPointer, lastWeekDay, firstWeekday} = this.state
    let date = ''

    // if (minDate || maxDate) {
    // 	console.log("min max date", minDate, maxDate)
    // }
    //previous month date
    if (index < firstWeekday) {
      date = new Date(yearPointer, monthPointer - 1, day)
    }
    // current month date
    if (index >= firstWeekday && index < lastWeekDay) {
      date = new Date(yearPointer, monthPointer, day)
    }
    //next month date
    if (index >= lastWeekDay) {
      date = new Date(yearPointer, monthPointer + 1, day)
    }
   this.props.directSelect && this.props.selectDate(date)
    this.setState({selectDate: date, selectDateIndex: index})
  }

  render () {
    const {
      currentDate,
      currentDateIndex,
      yearPointer,
      monthPointer,
      dayNumArr,
      yearArr,
      showYearDropdown,
      selectDate,
      selectDateIndex,
      firstWeekday,
      lastWeekDay,
      maxDateIndex,
      minDateIndex,
      minDate,
      maxDate,
      eventsData,
	  eventIndexList
    } = this.state

    let monthPointerName = month[monthPointer]


	// console.log("////////////////////",eventIndexList)

    return (
      <>
        <View
          style={[
            styles.calendarContainer,
            this.props.hideFooterBtn && {height: 440},
          ]}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() =>
                this.setState({showYearDropdown: !showYearDropdown})
              }>
              <Text style={[styles.headerText,{color:COLORS.yellow5, ...FONTS.subTitle_m}]}>
                {monthPointerName} {yearPointer}{' '}
                <ICONS.AntDesign
                  name={'caretdown'}
                  size={12}
                  color={COLORS.white}
                />
              </Text>
            </TouchableOpacity>
            <View style={styles.arrowContainer}>
              <View>
                <TouchableOpacity onPress={this.prevMonth.bind(this)}>
                  <View>
                    <ICONS.AntDesign
                      name={'left'}
                      size={15}
                      color={COLORS.white}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.nextMonth()}>
                  {/* <Text style={styles.headerText}>
										{">"}
									</Text> */}
                  <View>
                    <ICONS.AntDesign
                      name={'right'}
                      size={15}
                      color={COLORS.white}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {showYearDropdown && (
            <View
              style={[
                styles.dropDownYearContainer,
                this.props.yearDropdownStyle && this.props.yearDropdownStyle,
              ]}>
              <ScrollView nestedScrollEnabled={true}>
                {/* <View style={styles.dropDownYearItem}> */}
                {yearArr.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.2}
                    onPress={() => this.selectYearFromDropDown(item)}>
                    <View style={styles.dropDownYearItem}>
                      <Text style={styles.dropDownYearText}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
                {/* </View> */}
              </ScrollView>
            </View>
          )}

          <View style={styles.weekrow}>
            {weekDays.map((day, index) => (
              <View style={styles.dayContainer} key={index}>
                <Text style={styles.p}>{day}</Text>
              </View>
            ))}
          </View>

          <View style={styles.dayrow}>
            {dayNumArr.map((num, index) => {
              // renderCurrentDate = true

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    ;(minDate && minDateIndex > index) ||
                    (maxDate && maxDateIndex < index)
                      ? {}
                      : this.onSelectDate(num, index)
                  }}
                  style={[
                    //current date box style
                    styles.dayContainer,
                    currentDateIndex === index &&
                      currentDate.getMonth() === monthPointer &&
                      currentDate.getFullYear() === yearPointer &&
                      styles.currentDate,

                    //select date box style
                    selectDateIndex=== index &&
                      new Date(selectDate).getDate() === num &&
                      styles.selectDate,
                    eventIndexList &&
                      eventIndexList.find(
                        item =>
                          item.index +1=== index &&
                          item.date.getMonth() === monthPointer &&
                          item.date.getFullYear() === yearPointer,
                      ) && {
                        borderColor: COLORS.yellow5,
                        borderWidth:1,
                        paddingBottom:5,
                        // paddingTop:-10
                        // marginTop:-1
                      },
                  ]}>
                  <Text
                    style={[
                      styles.p,
                      ((minDate && minDateIndex > index) ||
                        (maxDate && maxDateIndex < index)) && {
                        color: '#585858',
                        
                      },
                    ]}>
                    {num}
                  </Text>
                  {eventIndexList &&
                    eventIndexList.find(
                      item =>
                        item.index +1=== index &&
                        item.date.getMonth() === monthPointer &&
                        item.date.getFullYear() === yearPointer,
                    ) && (
                      <View
                        style={{
                          width: 4,
                          marginTop: -10,
                          // marginBottom:2,
                          alignSelf: 'center',
                          height: 4,
                          backgroundColor: 'white',
                        }}
                      />
                    )}
                </TouchableOpacity>
              )
            })}
          </View>
          {!this.props.hideFooterBtn && (
            <View style={styles.calendarFooter}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.footerBtn1}
                onPress={() => this.props.setIsCalenderOpen(false)}>
                <Text style={styles.footerBtn1Text}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.footerBtn2}
                onPress={() => {
                  this.props.setIsCalenderOpen(false);
                  selectDate && this.props.selectDate(selectDate)
                }}>
                <Text style={styles.footerBtn2Text}>OK</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </>
    )
  }
}

export default Calendar

const styles = StyleSheet.create({
  selectDate: {
    backgroundColor: COLORS.light1,
    borderWidth: 1,
    // marginTop:-10,
 //   backgroundColor:'red',

    borderColor: '#f6f6f6',
  },
  currentDate: {
    backgroundColor: '#515151',
    borderStyle: 'dashed',
    borderRadius: 0.5,
    borderWidth: 1,
    borderColor: '#f6f6f6',
  },
  calendarFooter: {
    marginTop: '4%',
    height: 160,
    backgroundColor: COLORS.lightGray6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: '5%',
    flex: 1,
    // alignItems: 'center'
  },

  footerBtn1: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: COLORS.gray9,
  },
  footerBtn2: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor:COLORS.yellow5
  },
  footerBtn2Text: {
    color: COLORS.gray7,
    letterSpacing: 0,
    lineHeight: 22,
    ...FONTS.h1_r,
  },
  footerBtn1Text: {
    color: COLORS.white,
    letterSpacing: 0,
    lineHeight: 22,
    ...FONTS.h1_r,
  },
  calendarContainer: {
    backgroundColor: '#262626',
    width: '95%',
    height: 490,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  h2: {
    color: 'white',
    fontSize: 20,
  },
  arrowContainer: {
    flexDirection: 'row',
    flex: 0.4,
    justifyContent: 'space-around',
  },

  weekDayContainer: {
    flexDirection: 'row',
    paddingHorizontal: '2%',

    // flex: 0.4,
    // justifyContent: 'space-between',
    // paddingHorizontal: '8%'
  },
  weekrow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
    // justifyContent: 'center',
    // paddingLeft: 20
  },
  dayrow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    marginLeft: 5,
    // marginBottom: 2
    // justifyContent: 'center',
    // paddingHorizontal: 0
  },
  dayContainer: {
    width: '14%',
    marginTop: 5,
  },
  p: {
    color: 'white',
    // fontSize: 16,
    alignSelf: 'center',
    padding: 10,
    ...FONTS.h1_r,
    lineHeight: 22,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  dropDownYearContainer: {
    height: 'auto',
    maxHeight: 400,
    position: 'absolute',
    width: '80%',
    top: '20%',
    elevation: 5,
    backgroundColor: '#f8f8f8',
    left: 10,
    zIndex: 30,
  },
  dropDownYearItem: {
    paddingVertical: '4%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
    paddingLeft: '4%',
  },
})
