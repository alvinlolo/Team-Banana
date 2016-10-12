import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View, StyleSheet, Dimensions} from 'react-native'

import Video from 'react-native-video';

class Main extends Component {
    render() {
        return(
            // Red  Yellow
            // Pink Green
            <ScrollView horizontal={true}>
                <ScrollView pagingEnabled={true}>
                    <View style={styles.topleft}/>
                    <View style={styles.bottomleft}/>
                </ScrollView>
                <ScrollView pagingEnabled={true}>
                    <View style={styles.topright}/>
                    <View style={styles.bottomright}/>
                </ScrollView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    topleft: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#fc2a05'
    },
    topright: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#f2e210'
    },
    bottomleft: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#ff09fd'
    },
    bottomright: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#57e00d'
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
