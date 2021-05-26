import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../../constants';

const Card1 = ({ data }) => {
	const styles = cardStyle;
	return (
		<View style={styles.cardContainer}>
			<Image style={styles.cardImg} source={data.image} />
			<View style={styles.cardContentContainer}>
				<Text style={styles.cardDescription}>{data.description}</Text>
				<View style={styles.cardFooter}>
					<Text style={styles.cardTitle}>{data.title}</Text>
					<Text style={styles.cardSubTitile} >{data.subTitle}</Text>
				</View>
			</View>
		</View>
	);
}

export default Card1;
const cardStyle = StyleSheet.create({
	cardContainer: {
		width: SIZES.width * 0.6,
		height: 400,
		backgroundColor: COLORS.yellow,
		overflow: 'hidden',
		marginLeft: 20
	},
	cardImg: {
		flex: 0.68,
		width: '100%',
		resizeMode: 'cover',
		height: '100%'
	},
	cardContentContainer: {
		flex: 0.3,
		padding: '6%'
	},
	cardDescription: {
		...FONTS.h3_r,
		color: COLORS.black,
		letterSpacing: 0.11,
		marginBottom: '5%'
	},
	cardFooter: {
		flexDirection: 'row'
	},
	cardTitle: {
		...FONTS.h3_b,
		letterSpacing: 0.11,
		color: COLORS.black,
		marginRight: 5
	},
	cardSubTitile: {
		...FONTS.h3_r,
		letterSpacing: 0.11,
		color: COLORS.black
	},
})

