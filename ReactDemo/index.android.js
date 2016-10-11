import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View, StyleSheet, Dimensions} from 'react-native'

class Main extends Component {
    render() {
        return(
            <ScrollView pagingEnabled={true}>
                <View style={styles.topbox}/>
                <View style={styles.bottombox}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    topbox: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#8b0f3c'
    },
    bottombox: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#54c31f'
    },
});


AppRegistry.registerComponent(
'ReactDemo',
() => Main);
