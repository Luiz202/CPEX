import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { bold } from 'ansi-colors';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}> aaaaaaaaaa </Text>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        flex: 0.1,
        backgroundColor: '#ff0000',
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
    },
});

/* 

        alignItems: 'center',
        alignSelf: 'center',
*/