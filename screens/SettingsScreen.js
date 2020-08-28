import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SettingsScreen;