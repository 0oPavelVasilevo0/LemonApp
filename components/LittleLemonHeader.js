import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={headerStyles.container}>
            <Text
                style={headerStyles.headerText}>
                Little Lemon
            </Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        flex: 0.16,
        // backgroundColor: '#F4CE14',
        backgroundColor: '#EE9972',
        justifyContent: 'flex-end'
    },
    headerText: {
        padding: 10,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    // innerText: {
    //   fontWeight: 'bold',
    // },
});
