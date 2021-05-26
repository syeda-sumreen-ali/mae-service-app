import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet
	, Text, View, Platform,TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../../constants';
import * as Animatable from 'react-native-animatable';

export const Toast = ({ status, message, clearToast }) => {
	const [show, setShow] = useState(false);
	const [animationStyle, setanimationStyle] = useState('bounceInRight')

	useEffect(() => {
		//show toast true if message exist
		setShow(message ? true : false)

		// if the animation is existAnimation that is bounceOutRight
		// then after 2secs clear the toast and setShowFalse
		let timer;
		if (animationStyle === 'bounceOutRight') {
			timer = setTimeout(() => {
				setShow(false);
				clearToast();
			}, 2000);
		}
		return () => {
			clearTimeout(timer);
			setExitAnimation(true);
		};
	}, [animationStyle.length]);

	const setExitAnimation = (reset) => {
		let timer;
		if (!reset) {
			setTimeout(() => {
				timer = setanimationStyle('bounceOutRight')
			}, 3000)
		} else {
			clearTimeout(timer)
			// setExitAnimation(true)
		}
	}

	const styles = StyleSheet.create({
		toast: {
			minHeight: 60,
			height: 'auto',
			// width: 'auto',
			width: message.length <= 14 ? '60%' : '80%',
			borderLeftColor: COLORS.white,
			backgroundColor:COLORS.lightGray8,
			borderLeftWidth:4,
			borderLeftColor:
				status === 'success' ? COLORS.success :
					status === 'error' ? COLORS.danger :
						status === 'warning' ? COLORS.warning :
							status === 'info' ? COLORS.info : COLORS.black,
			paddingHorizontal: '4%',
			justifyContent: 'center',
			position: 'absolute',
			// alignItems: 'center',
			right: 10,
			top: Platform.OS === 'android' ? 20 : 40,
			zIndex: 5,
			elevation: 2
		},
		_icon: { marginRight: '3%', marginTop:'4%', flex: 0.15, alignItems: 'center' },
		message: {
			...FONTS.h2_r, color: COLORS.white, lineHeight: 18, letterSpacing: 0.16
		},
		_message: { flex: 0.8, paddingVertical: '4%' }
	});

	return (
		show ?
			<Animatable.View
				animation={animationStyle}
				iterationCount={1}
				//when the first animation end and the toast visible then after 3 secs 
				// change the animation to exist animation
				onAnimationEnd={(endState) => endState.finished && show && setExitAnimation()}
				style={styles.toast}>
				<TouchableHighlight	
				onPress={()=>alert(1223)}
						// onPress={() => setanimationStyle('bouceOutRight')}
						>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles._icon}>
							{status === 'warning' ?
								<ICONS.FontAwesome name={'warning'} color={COLORS.warning} size={30} />
								:status==='error'?
								<ICONS.AntDesign name="closecircle" color={COLORS.danger} size={25}/>:
								<ICONS.MaterialIcons 
								name={status === 'success' ? 'check-circle' :'info'} 
								color={status==='success' ? COLORS.success : COLORS.info} 
								backgroundColor={COLORS.white}
								size={30} />}
						</View>
						<View style={styles._message}>
						<Text style={styles.message}>{status==="info"?'Informational':status.charAt(0).toUpperCase() + status.slice(1)} notification</Text>
							<Text style={styles.message}>{message}</Text>
						</View>
						<View>
						{/* <TouchableOpacity onPress={() => alert(223)}>			 */}
							<View>
								<ICONS.AntDesign name="close" color={COLORS.light1} size={20} style={{paddingTop:'4%'}}/>
							</View>
						{/* </TouchableOpacity> */}

						</View>
					</View>
				</TouchableHighlight>
			</Animatable.View> : null
	);

}


