import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={footer.footerContainer}>
            <Text style={footer.footerText}>
                All rights reserved by Little Lemon, 2022{' '}
            </Text>
        </View>
    );
}

const footer = StyleSheet.create({
    footerContainer: {
        // backgroundColor: '#F4CE14',
        backgroundColor: '#EE9972',
        marginBottom: 10,
    },
    footerText: {
        fontSize: 18,
        fontStyle: 'italic',
        color: 'black',
        textAlign: 'center',
    },
});