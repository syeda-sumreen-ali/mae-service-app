import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableHighlight, Text, ScrollView } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures'
import { COLORS, FONTS } from '../../../constants';

export const Tab = ({ tab, setActiveTab, children }) => {
	const [tabIndex, setTabIndex] = useState(0);
	let count = tabIndex;

	return (
		<View style={{ backgroundColor: COLORS.light, height: "100%" }}
		// style={styles.modalView}
		>

			<GestureRecognizer
				onSwipeLeft={() => {
					// alert('left', tabIndex);
					tabIndex > tab.length ? setTabIndex(count--) : setTabIndex(tab.length)
				}
				}
				onSwipeRight={() => {
					// alert('right', tabIndex);
					tabIndex < tab.length ? setTabIndex(count++) : setTabIndex(0)
				}}
				config={{
					velocityThreshold: 0.5,
					directionalOffsetThreshold: 80
				}}
			>
				<View style={styles.tabContainer}>
					{tab.map((tabName, index) => {
						return (
							<TouchableOpacity
								activeOpacity={0.6}
								onPress={() => {
									setTabIndex(index);
									setActiveTab(tabName)
								}}
								style={tabIndex === index ? styles.activeTabBorder : styles.inActiveTabBorder}
							>
								<Text style={tabIndex === index ? styles.tabsTxtActive : styles.tabsTxtInActive}>
									{tabName}
								</Text>
							</TouchableOpacity>)
					})
					}
				</View>
				<ScrollView>
					<View style={styles.contentContainer}>
						{children}
						{/* <Text>{tabIndex} </Text> */}
					</View>
				</ScrollView>
			</GestureRecognizer>

		</View>
	);
};


const styles = StyleSheet.create({
	tabContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: "white"
	},
	contentContainer: { backgroundColor: "white" },
	activeTabBorder: {
		borderBottomColor: COLORS.black1,
		borderBottomWidth: 2,
		height: 30,
		margin: 20,
		// paddingVertical: 20,
		alignSelf: "center"
	},
	inActiveTabBorder: {
		borderBottomColor: COLORS.black1,
		borderBottomWidth: 0,
		height: 30,
		margin: 20,
	},
	tabsTxtActive: {
		...FONTS.h1_m,
		color: COLORS.black,
		lineHeight: 24,
	},
	tabsTxtInActive: {
		...FONTS.h1_m,
		color: COLORS.black,
		lineHeight: 24,
	},
	modalView: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: COLORS.white,
	},
	title: {
		...FONTS.title_m,
		color: COLORS.black1
	},
});

