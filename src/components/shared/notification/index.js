// import React, { Component } from 'react'
// import Toast from 'react-native-tiny-toast'

// export default class ToastComponent extends Component {
// 	state = {
// 		visible: false
// 	}

// 	componentDidMount() {
// 		setTimeout(() => this.setState({
// 			visible: true
// 		}), 1000);

// 		setTimeout(() => this.setState({
// 			visible: false
// 		}), 3000);
// 	};

// 	render() {
// 		return (
// 			<Toast
// 				visible={this.state.visible}
// 				position={50}
// 				onHidden={() => {
// 					// onHidden
// 				}}>This is a message
// 			</Toast>
// 		);
// 	}
// }