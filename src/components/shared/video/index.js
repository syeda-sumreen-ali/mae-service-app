import React from 'react';
import Video from 'react-native-video';

// fortesting require('../../assets/hdVideo/Lamborghini.mp4')

// for render source={{ uri: this.props.videoFilePath }}

export class VideoPlayer extends React.Component {
    componentWillUnmount() {
        this.props.setIsVideoPaused && this.props.setIsVideoPaused(true)
    }

    render() {
        const { repeat, resizeMode, styles, controls, paused, videoFilePath } = this.props;

        return (
            <Video source={!!videoFilePath ? { uri: videoFilePath } : require('../../../assets/hdVideo/Lamborghini.mp4')}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                resizeMode={resizeMode}
                controls={controls}
                paused={paused}
                repeat={repeat}
                // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                // onError={this.videoError}               // Callback when video cannot be loaded
                style={styles}
            />
        );
    }
}
// export default VideoPlayer