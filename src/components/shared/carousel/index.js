import React, { useRef, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../../../constants';
import Card1 from '../card/card1';

const Pagination = ({ data, handlePagination, activeSlide, setActiveSlide }) => {

	const styles = paginationStyle;
	return (

		<View style={styles.paginationContainer}>
			{data.map((item, index) => (
				<TouchableOpacity

					style={[styles.pageIndicator, index === activeSlide && { backgroundColor: COLORS.yellow, borderColor: COLORS.yellow }]}
					onPress={() => {
						setActiveSlide(index)
						handlePagination(index);
					}}>
					<View />
				</TouchableOpacity>
			))}
		</View>
	);
}

const Carousel = ({ data }) => {
	const scrollRef = useRef(null);
	const [activeSlide, setActiveSlide] = useState(0)
	const handlePagination = (itemIndex) => {
		scrollRef.current.scrollTo({ x: itemIndex * (SIZES.width * 0.6) })
	};
	return (
		<View>
			<View>
				<ScrollView
					nestedScrollEnabled={true}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					ref={scrollRef}
				>
					{data.map((item, index) => (
						<View style={index === data.length - 1 && { marginRight: 20 }}>
							<Card1 key={index} data={item} />
						</View>
					))}

				</ScrollView>
				<Pagination
					activeSlide={activeSlide}
					setActiveSlide={setActiveSlide}
					data={data} handlePagination={handlePagination} />

			</View>
		</View>
	)
}

export default Carousel



const paginationStyle = StyleSheet.create({
	paginationContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'space-evenly',
		maxWidth: '50%',
		marginVertical: '5%'
	},
	pageIndicator: {
		width: 10,
		height: 10,
		borderWidth: 1,
		borderColor: COLORS.light,
		marginRight: 10
	}
});

