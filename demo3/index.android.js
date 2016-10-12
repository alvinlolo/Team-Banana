import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View, StyleSheet, Dimensions} from 'react-native'

import Video from 'react-native-video';

class Main extends Component {
    render() {
        return(
            // b1 b2 b3
            // b4 b5 b6
            <ScrollView horizontal={true}>
                <ScrollView pagingEnabled={true}>
                    <View style={styles.b1}/>
                    <View style={styles.b4}/>
                </ScrollView>
                <ScrollView pagingEnabled={true}>
                    <View style={styles.b2}/>
                    <View style={styles.b5}/>
                </ScrollView>
                <ScrollView pagingEnabled={true}>
                    <View style={styles.b3}/>
                    <View style={styles.b6}/>
                </ScrollView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    b1: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#fc2a05'
    },
    b2: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#f2e210'
    },
    b3: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#ff09fd'
    },
    b4: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#57e00d'
    },
    b5: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#ff9a01'
    },
    b6: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#0046fa'
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
