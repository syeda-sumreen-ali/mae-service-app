import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Modal, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import FastImage from 'react-native-fast-image'
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { IMAGES, FONTS, COLORS, SIZES, ICONS } from '../../constants';

class ImagePickerComponent extends Component {
	state = {
		file: null,
		fileUri: null,
		options: {},
		isModalVisible: false,
		displayImage: undefined,
		editable: true
	}

	static getDerivedStateFromProps(props, state) {
		let displayImage
		// , editable;

		if (props.displayImage !== state.displayImage) {
			displayImage = props.displayImage
		}
		// if (props.editable === undefined) {
		// 	editable = true
		// }
		// if (props.editable !== undefined && props.editable) {
		// 	editable = props.editable
		// }
		return { displayImage }
	}

	openGallery = (options = this.state.options) => {
		try {
			ImagePicker.openPicker(options)
				.then(response => {
					// HD	1280 x 720 / 720p
					//Full HD	1920 x 1080 / 1080p	
					// Ultra HD or 4K	3840 x 2160p
					if (this.props.openfrom === 'add_photos_to_experience') {
						if (response.height >= 720 && response.width >= 720) {
							if (response.mime.search('image') !== -1) {
								try {
									ImagePicker.openCropper({
										path: response.path,
										width: 720,
										height: 1080
									}).then(image => {
										this.props.handleImage('image', image)
									});
								} catch (error) {
									console.log(error)
								}
							} else {
								if (response.duration < 120001) {
									this.props.handleImage('video', response)
								} else {
									Alert.alert('maximum lentgh of Video is 2 mints')
								}
							}
						} else {
							alert('Please add HD Image or Video')
						}
					} else {
						// alert('Please add HD Image')
						this.setState({ file: response },
							() => this.props.handleImage(response)
						)
					}
				}).catch(error => {
					console.log(error);
					this.props.handleImage('/rendomstringfortemporarywork')
				})

		} catch (error) {
			console.log(error)
		}
	}
	openCamera = (param, options = this.state.options) => {
		try {
			ImagePicker.openCamera(options)
				.then(response => {
					this.setState({ file: response },
						() => this.props.handleImage(response)
					)
				}).catch(error => {
					console.log(error)
				})

		} catch (error) {
			console.log(error)
		}
	}

	handleChoosePhoto = () => {
		let defaultOptions = {
			mediaType: "photo",
			cropperActiveWidgetColor: 'black',
			multiple: false,
			// showCropGuidelines: false
		}
		if (this.props.openfrom === 'add_photos_to_experience') {
			if (this.props.isVideoUploading) {
				defaultOptions.mediaType = "any"
			}
			if (!this.props.isImageUploading) {
				defaultOptions.mediaType = "video"
			}
			this.setState({ options: defaultOptions },
				() => this.openGallery()
			)
		} else if (this.props.openfrom === 'add_profile_Image') {
			defaultOptions.height = 500;
			defaultOptions.width = 500;
			defaultOptions.cropping = true,
				defaultOptions.cropperCircleOverlay = true;
			// 	defaultOptions.includeBase64 = true
			this.setState({ options: defaultOptions, isModalVisible: true })
		}
		else if (this.props.openfrom === 'add_photo') {
			defaultOptions.height = 500;
			defaultOptions.width = 500;
			defaultOptions.mediaType = "photo"
			// defaultOptions.cropping = true,
			// defaultOptions.cropperCircleOverlay = true;
			defaultOptions.includeBase64 = true
			this.setState({ options: defaultOptions, isModalVisible: true })
		}
		else if (this.props.openfrom === 'add_video') {
			defaultOptions.mediaType = "video"

			this.setState({ options: defaultOptions },
				() => this.openGallery()
			)
		}
	}
	render() {
		const { handleImage, displayImage, style, label, _imgStyle, iconStyle, btnStyle, btnIconStyle, loader } = this.props
		const { photo, isModalVisible, videoCamera, videoGallery, photoCamera, photoGallery } = this.state
		return (
			<>
				{isModalVisible &&
					Platform.OS === "ios" ?
					Alert.alert(
						"Image Picker",
						"Select Any Option",
						[
							{
								text: "Take Photo...",
								onPress: () => this.setState({ isModalVisible: false }, this.openCamera())
							},
							{ text: "Choose from Library...", onPress: () => this.setState({ isModalVisible: false }, this.openGallery()) },
							{
								text: "Cancel",
								onPress: () => this.setState({ isModalVisible: false }),
								style: "cancel"
							},
						],
						{ cancelable: true }
					)
					:
					<Modal
						animationType="slide"
						transparent={true}
						visible={isModalVisible}
						onRequestClose={() => {
							this.setState({ isModalVisible: false })
						}}
					>
						<View style={styles.centeredView}>
							<TouchableOpacity activeOpacity={1} style={{ flex: 1, height: '100%', width: '100%' }} onPress={() => this.setState({ isModalVisible: false })}>
							</TouchableOpacity>
							<View style={styles.modalView}>
								<Text style={styles.textStyle}>Choose photo</Text>
								<TouchableOpacity activeOpacity={0.8}
									onPress={() => {

										this.setState({ isModalVisible: false },
											this.openCamera()
										);
									}}
									style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}
								>
									<ICONS.MaterialIcons name="camera-enhance" size={24} style={{ marginLeft: 30 }} />
									<Text style={styles.modalText}>Take Photo...</Text>
								</TouchableOpacity>
								<TouchableOpacity activeOpacity={0.8}
									onPress={() => {
										this.setState({ isModalVisible: false },
											this.openGallery()
										);
									}}
									style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}
								>
									<ICONS.FontAwesome name="image" size={22} style={{ marginLeft: 30 }} />
									<Text style={styles.modalText}>Choose from Library...</Text>
								</TouchableOpacity>
								<TouchableOpacity activeOpacity={0.8}
									onPress={() => {
										this.setState({ isModalVisible: false });
									}}
								>
									<Text style={styles.cancelBtn}>CANCEL</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
				}
				<View>
					{this.state.file || displayImage ?
						<>
							<View style={[styles._fillImage, _imgStyle]}>
								<FastImage
									source={{
										uri: this.state.file ? this.state.file.path : displayImage,
										// headers: { Authorization: this.state.fileUri ? this.state.fileUri : displayImage},
										priority: FastImage.priority.normal,
										cache: FastImage.cacheControl.web
									}}
									resizeMethod="resize"
									resizeMode="cover"
									style={{ width: "100%", height: "100%", alignSelf: "center", resizeMode: "cover" }}
								/>
								{loader && <View style={{ position: 'absolute', zIndex: 100 }}>
									<ActivityIndicator size={'large'} color='grey' />
								</View>}
							</View>
							{!this.props.hideAddPhotoBtn && <TouchableHighlight
								underlayColor={COLORS.gray}
								style={[styles.editButton, btnStyle]}
								underlayColor={COLORS.black1}
								onPress={() => this.handleChoosePhoto()}>
								<FastImage source={IMAGES.icons_actions_add_photo}
									resizeMode='contain'
									style={[styles.addImageIcon, btnIconStyle]}
								/>
							</TouchableHighlight>}
						</>
						:
						<>
							{/* <Text>{this.state.editable.toString()}</Text> */}
							<TouchableHighlight
								style={[styles._emptyImage, _imgStyle]}
								disabled={!this.state.editable}
								underlayColor={COLORS.gray}
								// underlayColor={!this.props.children ? COLORS.lightGray : COLORS.gray}
								onPress={() => { this.state.editable ? this.handleChoosePhoto() : alert(this.state.editable) }}>
								<View style={styles.imageBox}>
									{this.props.children ? this.props.children : <View style={{ justifyContent: 'center', alignItems: 'center' }}>
										{loader && <View style={{ position: 'absolute', zIndex: 100 }}>
											<ActivityIndicator size={'large'} color='grey' />
										</View>}
										<FastImage
											source={IMAGES.icons_actions_photo}
											resizeMode='contain'
											style={[styles.imageIcon, iconStyle]} />
										<Text style={styles.label}>{label ? label : "Select Image"}</Text>
										{this.props.subText && <Text style={styles.labelSmall}>{this.props.subText}</Text>}
										{!this.props.hideAddPhotoBtn && <TouchableHighlight
											underlayColor={COLORS.gray}
											style={[styles.editButton, btnStyle, {
												position: 'absolute',
												bottom: -50,
												right: -10
											}]}
											underlayColor={COLORS.black1}
											onPress={() => this.handleChoosePhoto()}>
											<FastImage source={IMAGES.icons_actions_add_photo}
												resizeMode='contain'
												style={[styles.addImageIcon, btnIconStyle,]}
											/>
										</TouchableHighlight>}
									</View>

									}
								</View>
							</TouchableHighlight>
							{/* <FastImage source={IMAGES.icons_actions_add_photo}
									style={[styles.addImageIcon, btnIconStyle]} /> */}
						</>
					}
				</View>


			</>
		);
	}
}

export default ImagePickerComponent;

const styles = StyleSheet.create({
	labelSmall: {
		...FONTS.b1_m,
		// paddingTop: SIZES.width * 0.01,
		paddingBottom: SIZES.width * 0.03,
		color: COLORS.gray5,
		textTransform: "lowercase",
		alignSelf: 'center'
	},
	_fillImage: {
		backgroundColor: COLORS.lightGray3,
		borderColor: COLORS.gray4,
		borderWidth: 1.5,
		borderRadius: (SIZES.width * 0.4) / 2,
		width: SIZES.width * 0.4,
		height: SIZES.width * 0.4,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		overflow: "hidden",
		// marginBottom: ,
		// paddingTop: SIZES.width * 0.10
	},
	_emptyImage: {
		backgroundColor: COLORS.lightGray3,
		borderColor: COLORS.gray4,
		borderWidth: 1.5,
		borderRadius: (SIZES.width * 0.4) / 2,
		width: SIZES.width * 0.4,
		height: SIZES.width * 0.4,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",

		// paddingTop: SIZES.width * 0.10
	},
	imageIcon: {
		width: SIZES.width * 0.13,
		height: SIZES.width * 0.13,
		alignSelf: 'center'
	},
	label: {
		...FONTS.h1_m,
		paddingTop: SIZES.width * 0.01,
		// paddingBottom: SIZES.width * 0.03,
		color: COLORS.gray5,
		alignSelf: 'center',
		textTransform: "capitalize"
	},
	addButton: {
		backgroundColor: COLORS.black1,
		width: SIZES.width * 0.10,
		height: SIZES.width * 0.10,
		borderRadius: (SIZES.width * 0.10) / 2,
		borderWidth: 2,
		// borderColor: "red",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		// marginTop: -15,
		position: "absolute",
		// marginTop: -10,
		// marginTop: -SIZES.height * 0.05,
		// marginBottom: SIZES.height * 0.05,
		marginLeft: SIZES.width * 0.25,

	},
	editButton: {
		backgroundColor: COLORS.black1,
		width: SIZES.width * 0.10,
		height: SIZES.width * 0.10,
		borderRadius: (SIZES.width * 0.10) / 2,
		borderWidth: 2,
		// borderColor: "red",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		marginTop: -32,
		// marginTop: -SIZES.height * 0.05,
		// marginBottom: SIZES.height * 0.05,
		marginLeft: SIZES.width * 0.25
	},
	addImageIcon: {
		width: SIZES.width * 0.05,
		height: SIZES.width * 0.05
	},
	imgBtn: {
		backgroundColor: COLORS.black1
	},
	centeredView: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		// alignSelf: 'center',
		// marginTop: 22,
		backgroundColor: 'rgba(169,169,169,0.8)'
	},
	modalView: {
		// margin: 20,
		// flex: 1,
		backgroundColor: "white",
		// borderRadius: 20,
		// padding: 35,
		width: '100%',
		alignItems: "flex-start",
		// shadowColor: "#000",
		// shadowOffset: {
		// width: 0,
		// height: 2
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 3.84,
		// elevation: 5
	},
	openButton: {
		backgroundColor: "#F194FF",
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	textStyle: {
		margin: 20,
		color: "black",
		textAlign: "center",
		...FONTS.subTitle_b
	},
	cancelBtn: {
		margin: 20,
		color: "black",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 16,
	},
	modalText: {
		marginVertical: 20,
		marginHorizontal: 5,
		textAlign: "center",
		...FONTS.h1_m
	},
	imageBox: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});
