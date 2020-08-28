import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text>Hello , this is login screen.....</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});