import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Dimensions, View, Image } from "react-native";
import { FONTS, COLORS, SIZES, IMAGES, } from "../../../constants";

export const ProfileInfo1 = (props) => {
	const { image, name, place } = props.profileInfo;
	const { totalReview } = props.review;
	const [orientation, setOrientation] = useState('PORTRAIT');


	useEffect(() => {
		Dimensions.addEventListener('change', ({ window: { width, height } }) => {
			if (width < height) {
				setOrientation("PORTRAIT")
			} else {
				setOrientation("LANDSCAPE")
			}
		})

		return () => { Dimensions.removeEventListener('change') }
	}, [])


	return (
		<View style={styles._profile}>
			<View style={orientation === 'PORTRAIT' ? styles._profileImage : styles._profileImageLandscape}>
				<Image style={styles.smallProfileImage} source={image} />
			</View>

			<View style={styles._profileDesc}>
				<View>
					<Text style={styles.profileText}>
						by{" "}
						<Text style={[styles.profileName, styles.textUnderline]}>
							{name}
						</Text>
					</Text>
				</View>
				<View style={styles._place}>
					{place && (
						<Text style={styles.profileText}>
							from{" "}
							<Text style={[styles.profileTextBold, styles.textUnderline]}>
								{place}
							</Text>{" "}
              |.
						</Text>
					)}

					<Image
						source={IMAGES.icons_actions_star_fill}
						style={styles.iconImage}
					/>
					<Text style={[styles.profileText, styles.textUnderline]}>
						{totalReview}
					</Text>
				</View>
			</View>
		</View>
	);
};

export const ProfileInfo2 = ({ image, name, review, date }) => {
	const [orientation, setOrientation] = useState('PORTRAIT');

	useEffect(() => {
		Dimensions.addEventListener('change', ({ window: { width, height } }) => {
			if (width < height) {
				setOrientation("PORTRAIT")
			} else {
				setOrientation("LANDSCAPE")
			}
		})
	}, [])
	return (
		<View style={styles._profile2}>
			<View style={orientation === 'PORTRAIT' ? styles._profile2Image : styles._profileImageLandscape}>
				<Image source={{ uri: image }} style={styles.profileImage2} />
			</View>
			<View style={styles._profile2Desc}>
				<View>
					<Text style={styles.profile2Name}>{name}</Text>
				</View>
				{review && <View style={styles._profile2Row}>
					<View style={styles._profile2Row}>
						<Image
							source={IMAGES.icons_actions_star_fill}
							style={styles.iconImage}
						/>
						<Text style={styles.h1}>{review} Review</Text>
					</View>
					<View
						style={[styles._profile2Row, styles.pl4]}
					>
						<Image
							source={IMAGES.icons_actions_verified}
							style={styles.iconImage}
						/>
						<Text style={styles.h1}>Verified</Text>
					</View>
				</View>}
				{date && <View style={styles._profile2Row}>
					<Text style={[styles.h1, styles.date]}>{date}</Text>
				</View>}
			</View>
		</View>
	);
};



const styles = StyleSheet.create({
	title: {
		...FONTS.title_m,
		color: COLORS.black1,

	},
	_profile: { paddingVertical: "10%", flexDirection: "row" },
	_profileImage: { flex: 0.15 },
	_profileImageLandscape: { flex: 0.1 },
	_profileDesc: { flex: 0.8 },
	smallProfileImage: {
		width: SIZES.width * 0.12,
		borderRadius: (SIZES.width * 0.12) / 2,
		height: SIZES.width * 0.12,
		resizeMode: "cover",
	},
	_profileDesc: { flex: 0.6 },
	profileText: { ...FONTS.h1_r, color: COLORS.black1, letterSpacing: 0.44 },
	profileName: { textTransform: "capitalize" },
	_place: { flexDirection: "row", paddingTop: "2%" },
	profileTextBold: { ...FONTS.h1_m, color: COLORS.black1 },
	textUnderline: { textDecorationLine: "underline" },
	// iconImage: { width: SIZES.width * 0.055, height: SIZES.width * 0.055 },
	iconImage: { width: 22, height: 22 },

	// ============ PROFILE INFO 2 ================ //
	_profile2: { paddingVertical: "5%", flexDirection: "row" },

	profileImage2: {
		width: SIZES.width * 0.12,
		borderRadius: (SIZES.width * 0.12) / 2,
		height: SIZES.width * 0.12,
		resizeMode: "cover",
	},
	profile2Name: {
		...FONTS.title_r,
		color: COLORS.black,
		paddingBottom: '2%',
		letterSpacing: 0.18
	},
	_profile2Image: { flex: 0.18 },

	_profile2Desc: { flex: 0.8 },
	_profile2Row: {
		flexDirection: "row",
		// justifyContent: "center",
		alignItems: "center",
	},
	pl4: { paddingLeft: '4%' },
	h1: {
		...FONTS.h1_r,
		color: COLORS.black,
		lineHeight: 28,
		letterSpacing: 0.44
	},
	date: { color: COLORS.gray5, }
});
