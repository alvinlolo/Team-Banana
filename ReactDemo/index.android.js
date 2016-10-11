import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View, StyleSheet, Dimensions} from 'react-native'

import Video from 'react-native-video';

class Main extends Component {
    render() {
        return(
            <ScrollView horizontal={true}>
                <ScrollView pagingEnabled={true}>
                    <View style={styles.topbox}>
                        <Video source={{uri: "broadchurch", mainVer: 1, patchVer: 0}} // Looks for .mp4 file (background.mp4) in the given expansion version.
                               rate={1.0}                   // 0 is paused, 1 is normal.
                               volume={1.0}                 // 0 is muted, 1 is normal.
                               muted={false}                // Mutes the audio entirely.
                               paused={false}               // Pauses playback entirely.
                               resizeMode="cover"           // Fill the whole screen at aspect ratio.
                               repeat={true}                // Repeat forever.
                               onLoadStart={this.loadStart} // Callback when video starts to load
                               onLoad={this.setDuration}    // Callback when video loads
                               onProgress={this.setTime}    // Callback every ~250ms with currentTime
                               onEnd={this.onEnd}           // Callback when playback finishes
                               onError={console.log(this.videoError)}    // Callback when video cannot be loaded
                               style={styles.backgroundVideo} />
                   </View>
                    <View style={styles.bottombox}/>
                </ScrollView>
                <ScrollView pagingEnabled={true}>
                    <View style={styles.topbox}/>
                    <View style={styles.bottombox}/>
                </ScrollView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    topbox: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    bottombox: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#54c31f'
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
});


AppRegistry.registerComponent(
'ReactDemo',
() => Main);
