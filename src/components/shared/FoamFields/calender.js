import * as React from "react";
import { Text, View, TouchableOpacity, TouchableHighlight, ScrollView } from "react-native";
import { COLORS, ICONS } from "../../../constants";
class MyCalendar extends React.Component {
    months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    weekDays = ["S", "M", "T", "W", "T", "F", "S"];

    nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    constructor(props) {
        super(props);
        this.state = {
            activeDate: new Date(),
            maxDate: false,
            minDate: true,
            minYear: 1960,
            maxYear: new Date().getFullYear() + 1,
            yearArr: [],
            yearDropDown: false,
            minimumDate: new Date(),
            maximumDate: new Date(),
            arrowRight: true,
            arrowleft: true,
        };
    }
    getdateFunc() {
        let day = this.state.activeDate.getDate();
        let month = this.state.activeDate.getMonth() + 1;
        let year = this.state.activeDate.getFullYear();
        this.props.setPickDateFromCalender(`${month}/${day}/${year}`);
        this.props.setIsCalenderOpen(false);
    }
    selectYear(item) {
        this.setState(() => {
            this.state.activeDate.setFullYear(item);
            this.state.yearDropDown = false;
            return this.state;
        });
    }
    yearDropdown() {
        return (
            <ScrollView
                style={{
                    height: 250,
                    position: "absolute",
                    zIndex: 110,
                    backgroundColor: "white",
                    width: 70,
                }}
            >
                {this.state.yearArr.map((item) => (
                    <TouchableOpacity
                        style={{ alignItems: "center" }}
                        onPress={() => this.selectYear(item)}
                    >
                        <Text style={{ color: "grey", padding: 7, fontSize: 22 }}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    }

    componentDidMount() {
        if (this.props.initialDate) {
            this.setState({
                activeDate: new Date(this.props.initialDate)
            })
        }
        if (this.props.minDate) {
            this.setState(
                {
                    minimumDate: this.props.minDate,
                }
            );
        }
        if (this.props.maxDate) {
            this.setState(
                {
                    maximumDate: this.props.maxDate,
                }
            );
        }

        let yearArr = [];
        for (let i = this.state.minYear; i < this.state.maxYear; i++) {
            yearArr.push(i);
        }
        this.setState({
            yearArr: yearArr,
        });
        this.setState({
            maxDate: this.props.maxDate === false && this.props.maxDate,
            minDate: this.props.minDate === false && this.props.minDate,
        });
    }

    generateMatrix() {
        var matrix = [];
        // Create header
        matrix[0] = this.weekDays;

        // More code here
        var year = this.state.activeDate.getFullYear();
        var month = this.state.activeDate.getMonth();

        var firstDay = new Date(year, month, 1).getDay();
        var maxDays = this.nDays[month];
        if (month == 1) {
            // February
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                maxDays += 1;
            }
        }

        var counter = 1;
        for (var row = 1; row < 7; row++) {
            matrix[row] = [];
            for (var col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if (row == 1 && col >= firstDay) {
                    // Fill in rows only after the first day of the month
                    matrix[row][col] = counter++;
                } else if (row > 1 && counter <= maxDays) {
                    // Fill in rows only if the counter's not greater than
                    // the number of days in the month
                    matrix[row][col] = counter++;
                }
            }
        }

        return matrix;
    }
    onPressDate(item) {
        for (var key in this.weekDays) {
            this.weekDays[key] !== item &&
                this.setState(() => {
                    if (!item.match && item != -1) {
                        this.state.activeDate.setDate(item);
                        return this.state;
                    }
                });
        }
    }
    changeMonth = (n) => {
        // let currentDate = new Date()
        // let mnt = currentDate.getMonth()
        // let year = currentDate.getFullYear()
        // if (!this.state.maxDate) {
        //     if (year < this.state.activeDate.getFullYear() && mnt < (this.state.activeDate.getMonth() + n)) {
        //         this.setState(() => {
        //             this.state.activeDate.setMonth(
        //                 this.state.activeDate.getMonth() + n
        //             )
        //             return this.state;
        //         });
        //     }
        // } else if (!this.state.minDate) {
        //     if (mnt <= (this.state.activeDate.getMonth() + n)) {
        //         this.setState(() => {
        //             this.state.activeDate.setMonth(
        //                 this.state.activeDate.getMonth() + n
        //             )
        //             return this.state;
        //         });
        //     }
        // } else {

        this.setState(() => {
            this.state.activeDate.setMonth(this.state.activeDate.getMonth() + n);
            return this.state;
        });
        // }
    };

    isMinimumDate = (val) => {
        return (
            this.state.minimumDate.getFullYear() >=
            this.state.activeDate.getFullYear() &&
            ((this.state.minimumDate.getMonth() ===
                this.state.activeDate.getMonth() &&
                this.state.minimumDate.getDate() > val) ||
                this.state.minimumDate.getMonth() > this.state.activeDate.getMonth())
        );
    };

    isMaximumDate = (val) => {

        // if maxdate is current date then call this
        return (
            this.state.maximumDate.getFullYear() <=
            this.state.activeDate.getFullYear() &&
            (this.state.maximumDate.getDate() === new Date().getDate()
                ? (this.state.maximumDate.getMonth() ===
                    this.state.activeDate.getMonth() &&
                    this.state.maximumDate.getDate() < val) ||
                this.state.maximumDate.getMonth() < this.state.activeDate.getMonth()
                : (this.state.maximumDate.getMonth() - 1 ===
                    this.state.activeDate.getMonth() &&
                    this.state.maximumDate.getDate() < val) ||
                this.state.maximumDate.getMonth() - 1 <
                this.state.activeDate.getMonth())
        );
    };
    row = () => {
        var matrix = this.generateMatrix();
        var rows = [];
        rows = matrix.map((row, rowIndex) => {
            var rowItems = row.map((item, colIndex) => {
                return (
                    <Text
                        style={{
                            flex: 1,
                            // width: '80%',
                            padding: 10,
                            // paddingBottom: 10,
                            textAlign: "center",
                            // Highlight header
                            backgroundColor: "#262626",
                            // backgroundColor: 'red',
                            // Highlight Sundays
                            color:
                                this.isMinimumDate(item) || this.isMaximumDate(item)
                                    ? COLORS.gray
                                    : "white",
                            // Highlight current date
                            borderBottomWidth: this.weekDays.find(W => W === item)
                                || item == this.state.activeDate.getDate()
                                ? 1 : 0,
                            fontWeight:
                                item == this.state.activeDate.getDate() ? "bold" : "100",
                            borderWidth: item == this.state.activeDate.getDate() ? 1 : 0,
                            borderColor: "white",
                        }}
                        onPress={() =>
                            this.isMinimumDate(item) || this.isMaximumDate(item)
                                ? {}
                                : this.onPressDate(item)
                        }
                    >
                        { item != -1 ? item : ""}
                    </Text >
                );
            });
            return (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        // backgroundColor: "green"
                    }}
                >
                    {rowItems}
                </View>
            );
        });
        return rows;
    };

    render() {
        return (
            <View
                style={{
                    zIndex: 100,
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {/* <ScrollView> */}
                <View style={[{
                    margin: 10, padding: 10,
                    // backgroundColor: 'green'
                    backgroundColor: "#262626"
                }, this.props.calendarContainer]}>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            margin: 10,
                        }}
                    >
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Text
                                style={{
                                    // fontWeight: 'bold',
                                    fontSize: 18,
                                    textAlign: "left",
                                    color: "white",
                                }}
                            >
                                {this.months[this.state.activeDate.getMonth()]} &nbsp;
              </Text>
                            <View>
                                {!this.state.yearDropDown && (
                                    <View style={{ display: "flex", flexDirection: "row" }}>
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                textAlign: "left",
                                                color: "white",
                                            }}
                                        >
                                            {this.state.activeDate.getFullYear()}
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() => this.setState({ yearDropDown: true })}
                                        >
                                            <ICONS.MaterialIcons
                                                name={"arrow-drop-down"}
                                                size={25}
                                                color={COLORS.white}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )}
                                {this.state.yearDropDown && this.yearDropdown()}
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <TouchableOpacity
                                onPress={() =>
                                    this.state.activeDate.getFullYear() <= this.state.minYear &&
                                        this.state.activeDate.getMonth() === 0
                                        ? {}
                                        : this.changeMonth(-1)
                                }
                            >
                                <ICONS.MaterialIcons
                                    name={"keyboard-arrow-left"}
                                    size={25}
                                    color={
                                        this.state.activeDate.getFullYear() <= this.state.minYear &&
                                            this.state.activeDate.getMonth() === 0
                                            ? COLORS.gray
                                            : "white"
                                    }
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ paddingLeft: 20 }}
                                onPress={() =>
                                    this.isMaximumDate(this.state.activeDate.getDate())
                                        ? {}
                                        : this.changeMonth(+1)
                                }
                            >
                                <ICONS.MaterialIcons
                                    name={"keyboard-arrow-right"}
                                    size={25}
                                    color={
                                        this.isMaximumDate(this.state.activeDate.getDate())
                                            ? COLORS.gray : "white"
                                    }
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {this.row()}
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        height: 48,
                        marginTop: -10,
                        marginRight: 10,
                        marginLeft: 10,
                    }}
                >
                    <TouchableHighlight
                        underlayColor={COLORS.lightGray1}
                        onPress={() => this.props.setIsCalenderOpen(false)}
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#262626",
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 16 }}>Cancel</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={COLORS.gray}
                        onPress={() => this.getdateFunc()}
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#cacaca",
                        }}
                    >
                        <Text style={{ color: "black" }}>Ok</Text>
                    </TouchableHighlight>
                </View>
                {/* </ScrollView> */}
            </View>
        );
    }
}

export default MyCalendar;
