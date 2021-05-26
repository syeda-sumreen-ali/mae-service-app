import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, TouchableHighlight, Image, View, TouchableOpacity, Touchable } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'

import { VideoPlayer } from '../';

import { COLORS, IMAGES, deviceOrientation } from '../../../constants'
import { navigationRef } from '../../../routing/rootNavigation';


const Slider = ({ images, video, navigation }) => {

	const [isVideoPaused, setIsVideoPaused] = useState(true)
	const [ActiveSlide, setActiveSlide] = useState(0);
	let { orientation, width, height } = deviceOrientation();
	let videoFilePath = video;
	let arr = images.slice(0);
	arr.push('main')
	arr.push('video')
	const styles = StyleSheet.create({
		wrapper: {
			width: width,
			height: height / 1.25,
			backgroundColor: COLORS.light
		},
		mainImage: {
			width: width,
			height: height / 1.25
		},
		backgroundVideo: {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			zIndex: 20,
			// height: 300,
			backgroundColor: 'black',
		},
		_dot: { flexDirection: 'row', justifyContent: "center" },
		dot: {
			width: 10,
			height: 10,
			marginTop: -60,
			borderColor: COLORS.white,
			borderWidth: 1,
			marginHorizontal: '1%'
		},
		pausedIcon: { flex: 1, zIndex: 100, justifyContent: 'center', alignItems: 'center' },
		pause_Image: { width: '100%', height: '100%', resizeMode: 'contain' },
		_row1: { flex: 2, flexDirection: 'row' },
		_row2: { flex: 1, flexDirection: 'row' },
		_col1: { flex: 0.67 },
		_col2: { flex: 1 - 0.67 },
		image: { width: '100%', height: "100%" },
		flex1: { flex: 1 }

	});



	return (

		<ScrollView>
			<GestureRecognizer
				onSwipeRight={() => { setActiveSlide(ActiveSlide > 0 ? ActiveSlide - 1 : 6) }}
				onSwipeLeft={() => { setActiveSlide(ActiveSlide < 6 ? ActiveSlide + 1 : 0) }}
				config={{
					velocityThreshold: 0.5,
					directionalOffsetThreshold: 100
				}}
			>
				<View style={styles.wrapper}>
					{ActiveSlide === 0 ? <View
						key={'video'}
						style={[styles.mainImage]}>

						<View style={styles._row1}>
							<View style={styles._col1} >
								<TouchableHighlight
									style={styles.flex1}
									onPress={() => setActiveSlide(1)}>
									<View style={styles.image}>
										{isVideoPaused && <View style={styles.pausedIcon}>
											<Image source={IMAGES.icons_actions_play} style={styles.pause_Image} />
										</View>}
										<VideoPlayer
											videoFilePath={videoFilePath}
											resizeMode='contain'
											paused={true}
											repeat={true}
											controls={false}
											styles={styles.backgroundVideo}
										/>
									</View>
								</TouchableHighlight>

							</View>
							<View style={styles._col2}>


								<View style={styles.flex1} >
									<TouchableHighlight onPress={() => setActiveSlide(2)}>
										<Image source={{ uri: images[0] }} style={styles.image} />
									</TouchableHighlight>
								</View>

								<View style={styles.flex1} >
									<TouchableHighlight onPress={() => setActiveSlide(3)}>
										<Image source={{ uri: images[1] }} style={styles.image} />
									</TouchableHighlight>
								</View>
							</View>
						</View>
						<View style={styles._row2}>
							<View style={styles.flex1}>
								<TouchableHighlight onPress={() => setActiveSlide(4)}>
									<Image source={{ uri: images[2] }} style={styles.image} />
								</TouchableHighlight>
							</View>
							<View style={styles.flex1}>
								<TouchableHighlight onPress={() => setActiveSlide(5)}>
									<Image source={{ uri: images[3] }} style={styles.image} />
								</TouchableHighlight>
							</View>
							<View style={styles.flex1}>
								<TouchableHighlight onPress={() => setActiveSlide(6)}>
									<Image source={{ uri: images[4] }} style={styles.image} />
								</TouchableHighlight>
							</View>
						</View>

					</View> :
						ActiveSlide === 1 && <View
							key={'video'}
							style={styles.mainImage}>
							{isVideoPaused && <TouchableOpacity onPress={() => navigation.navigate("VideoPlayerContainer", videoFilePath = videoFilePath)} style={styles.pausedIcon}>
								<Image source={IMAGES.icons_actions_play} style={styles.pause_Image} />
							</TouchableOpacity>}
							<VideoPlayer
								videoFilePath={videoFilePath}
								resizeMode='contain'
								paused={isVideoPaused}
								setIsVideoPaused={setIsVideoPaused}
								repeat={true}
								controls={true}
								styles={styles.backgroundVideo}
							/>
						</View>
					}
					{images.map((item, index) => (
						ActiveSlide - 2 === index && (<View key={index}>
							<Image source={{ uri: item }}
								style={styles.mainImage}
								resizeMode={orientation === 'PORTRAIT' ? 'cover' : "contain"} />
						</View>)
					))}
				</View>
				<View style={[styles._dot]}>


					{arr.map((item, index) =>
						<TouchableOpacity
							key={index}
							style={[
								styles.dot,
								{ backgroundColor: index === ActiveSlide ? COLORS.white : 'transparent' },
							]}
							onPress={() => setActiveSlide(index)}>
						</TouchableOpacity>
					)}
				</View>

			</GestureRecognizer>
		</ScrollView >

	)
}

export default Slider


