import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../../constants'

const Footer = () => {
	return (
		<View style={{
			// display: 'flex',
			backgroundColor: COLORS.gray9,
			// marginTop: 100,
			// position: "relative",
			// bottom: 0
		}}>
			<Text style={[styles.h1, {color: COLORS.yellow}]}>About</Text>
			<View style={styles._link}>
				<View style={styles.link} >
					<TouchableOpacity >
						<Text style={[styles.linkText]}>About Veziu </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.link}>
					<TouchableOpacity >
						<Text style={[styles.linkText]}>FAQ </Text>
					</TouchableOpacity>

				</View>
			</View>
			<View style={styles._link}>
				<View style={styles.link}>
					<TouchableOpacity >
						<Text style={styles.linkText}>News {'\&'} Press </Text>
					</TouchableOpacity>

				</View>
				<View style={styles.link}>
					<TouchableOpacity >
						<Text style={styles.linkText}>Support </Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={[styles._link]}>
				<TouchableOpacity >
					<ICONS.AntDesign name='twitter' size={25} color={COLORS.white} />
				</TouchableOpacity>
				<TouchableOpacity >
					<ICONS.AntDesign name='google' size={25} color={COLORS.white} />
				</TouchableOpacity>
				<TouchableOpacity >
					<ICONS.FontAwesome name='facebook' size={25} color={COLORS.white} />
				</TouchableOpacity>
				<TouchableOpacity >
					<ICONS.AntDesign name='instagram' size={25} color={COLORS.white} />
				</TouchableOpacity>
			</View>
			<View style={styles._publishButton}>
				<TouchableOpacity
					style={styles.button}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ marginRight: '2%' }}>
							<ICONS.AntDesign name="apple1" size={35} color={COLORS.lightGray1} />
						</View>
						<View>
							<Text style={styles.btnSmallText}>Download on the</Text>
							<Text style={styles.btnText}>App Store</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ marginRight: '2%' }}>
							<ICONS.Ionicons name="logo-google-playstore" size={35} color={COLORS.lightGray1} />
						</View>
						<View>
							<Text style={styles.btnSmallText}>GET IN ON</Text>
							<Text style={styles.btnText}>Google Play</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.footerBottom}>
				<Text style={styles.footerBottomText}>© 2010 Veziu, Inc. </Text>
				<Text style={styles.footerBottomText}> All rights reserves . Privacy . Terms</Text>
			</View>


		</View >
	)
}

export default Footer

const styles = StyleSheet.create({
	h1: {
		...FONTS.subTitle_b,
		color: COLORS.white,
		justifyContent: "center",
		alignSelf: "center",
		marginVertical: '10%'
	},
	_link: {
		flexDirection: "row",
		justifyContent: 'space-evenly',
		marginBottom: 40,
		alignItems: 'center'
		// justifyContent: 'flex-start'
		// backgroundColor: "red"
	},
	link: {
		// backgroundColor: "blue",
		// flex: 1,
		alignItems: 'center'
	},
	linkText: {
		color: COLORS.white,
		...FONTS.h1_r,
		// alignSelf: 'flex-start',
		// textAlign: 'left',
		letterSpacing: 1.45,
	},
	_publishButton: {
		flexDirection: "row",
		justifyContent: 'space-evenly',
		marginBottom: "5%",
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	button: { borderRadius: 8, borderWidth: 2, width: '94%', borderColor: COLORS.lightGray1, paddingHorizontal: '4%', paddingVertical: '2%' },
	btnText: { ...FONTS.subTitle_b, color: COLORS.lightGray1 },
	btnSmallText: { ...FONTS.small_m, color: COLORS.lightGray1 },
	footerBottom: {
		borderTopColor: COLORS.lightGray1,
		borderWidth: 0.5,
		justifyContent: "center",
		alignItems: 'center',
		paddingVertical: "4%"
	},
	footerBottomText: {
		color: COLORS.lightGray1,
		...FONTS.h1_r,
		letterSpacing: 1.36
	}
})
