import React, { useState } from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, ICONS, SIZES, IMAGES } from '../../../constants';
import { HeartLike } from '../heartLike';


const Card2 = ({ data, navigation, user, addToFav }) => {
	const styles = cardStyle;
	return (
		<TouchableOpacity
			style={styles.cardContainer}
			activeOpacity={0.8}
			onPress={() => navigation.navigate('ExperienceDetailsContainer', { fromHomePage: true, experienceID: data._id, contributorID: data.contributor._id })}
		>
			<Image style={styles.cardImg} source={(!!data.pictures && !!data.pictures.data) ? { uri: data.pictures.data[0] } : IMAGES.icon_action_photo_outline_double} />
			<View style={styles.cardLikeContainer}>
				{!!user && !!user._id && <HeartLike user={user} addToFav={addToFav} experience={data} />}
			</View>
			<View style={styles.cardContentContainer}>
				<View style={styles.profileImageContainer}>

					<Image source={(!!data.contributor && !!data.contributor.customer && !!data.contributor.customer.personal_photo) ? { uri: data.contributor.customer.personal_photo } : IMAGES.icon_action_photo_outline_double} style={styles.profileImage} />
				</View>
				<Text style={styles.cardTitle}>{!!data.title && data.title.data || ""}</Text>
				<View style={styles.cardFooter}>
					<View style={styles.ratingContainer}>

						<ICONS.Entypo style={styles.cardRatingStar} name={'star'} size={15} />
						<Text style={styles.cardRating}>{"4.5"}</Text>
						<Text style={styles.cardReview} >({"726"})</Text>
					</View>
					<View>
						<Text style={styles.footerRightText}>From ${"92"}/person</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default Card2;
const cardStyle = StyleSheet.create({
	cardContainer: {
		width: SIZES.width * 0.46,
		height: 350,
		backgroundColor: COLORS.white,
		padding: 10,
		overflow: 'hidden',
		marginLeft: 10
	},
	cardImg: {
		flex: 0.6,
		width: '100%',
		resizeMode: 'cover',
		height: '100%'
	},
	cardLikeContainer: {
		position: 'absolute',
		top: '5%',
		right: '15%'
	},
	cardContentContainer: {
		flex: 0.3,
		// padding: '6%'
	},
	profileImageContainer: {
		position: 'absolute',
		top: -20,
		backgroundColor: COLORS.white,
		paddingHorizontal: 4,
		paddingTop: 4,
		borderRadius: 35
	},
	profileImage: {
		width: 40,
		height: 40,
		borderRadius: 50
	},
	cardTitle: {
		...FONTS.h2_m,
		color: COLORS.black1,
		letterSpacing: 0.11,
		marginTop: '16%',
		marginBottom: '4%'

	},
	cardFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between'


	},
	cardRatingStar: {
		alignSelf: 'center',
		marginRight: 5,
		color: COLORS.yellow,

	},
	cardRating: {
		color: COLORS.black1,
		...FONTS.h3_m
	},
	cardReview: {
		color: COLORS.gray5,
		marginLeft: 1,
		...FONTS.h3_r
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	footerRightText: {
		width: '70%',
		alignSelf: 'flex-end',
		justifyContent: 'center',
		color: COLORS.black1,
		...FONTS.h3_m,
		// lineHeight: 12,
		letterSpacing: 0.09,
		zIndex: 4,
		marginRight: 5
	}
})

