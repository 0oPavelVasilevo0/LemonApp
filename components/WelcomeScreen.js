import { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    useColorScheme,
    useWindowDimensions,
    Platform,
    Image,
} from 'react-native';

export default function WelcomeScreen() {
    const colorScheme = useColorScheme();

    const { height, width, fontScale } = useWindowDimensions();

    const [firstName, onChangeFirstName] = useState('');
    const [lastName, onChangeLastName] = useState('');
    const [message, onChangeMessage] = useState('');

    return (
        <KeyboardAvoidingView
            style={[
                welcomeStyles.scrollContainer,
                colorScheme === 'light'
                    ? { backgroundColor: '#333333' }//#fff
                    : { backgroundColor: '#333333' },
            ]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView
                keyboardDismissMode="on-drag"
                indicatorStyle={'white'}
            //  style={welcomeStyles.scrollContainer}
            >
                {/*<Image
      resizeMode='contain'
       style={welcomeStyles.logo} 
       source={require('../img/LIttle-Lemon-Logo.png')} />*/}
                <View style={welcomeStyles.headerContainer}>
                    <Image
                        resizeMode="cover"
                        style={welcomeStyles.logo}
                        source={require('../img/logo.png')}
                    />
                    <Text style={welcomeStyles.welcomeHeaderText}>Little Lemon</Text>
                </View>
                <Text style={welcomeStyles.regular}>Window Dimensions</Text>
                <Text style={welcomeStyles.regular}>Height: {height}</Text>
                <Text style={welcomeStyles.regular}>Width: {width}</Text>
                <Text style={welcomeStyles.regular}>Font scale: {fontScale}</Text>

                <Image
                    style={welcomeStyles.image}
                    source={require('../img/Picture1.png')}
                    resizeMode="cover"
                    accessible={true}
                    accessibilityLabel={'Little Lemon Logo'}
                />
                <Image
                    style={welcomeStyles.image}
                    source={require('../img/Picture2.png')}
                    resizeMode="cover"
                    accessible={true}
                    accessibilityLabel={'Little Lemon Logo'}
                />
                <Image
                    style={welcomeStyles.image}
                    source={require('../img/Picture3.png')}
                    resizeMode="cover"
                    accessible={true}
                    accessibilityLabel={'Little Lemon Logo'}
                />
                <Image
                    style={welcomeStyles.image}
                    source={require('../img/Picture4.png')}
                    resizeMode="cover"
                    accessible={true}
                    accessibilityLabel={'Little Lemon Logo'}
                />
                {/* <Text style={welcomeStyles.welcomeText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <TextInput 
        style={welcomeStyles.input} 
        value={firstName} 
        onChangeText={onChangeFirstName} 
        placeholder={'First Name'}
      /> */}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const welcomeStyles = StyleSheet.create({
    headerContainer: {
        // flex:1,
        // width: 240,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 20,
        //  marginVertical: 40,
        //  alignSelf: 'center',
        //  resizeMode: 'contain',
    },
    image: {
        width: 340,
        height: 300,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'white',
        alignSelf: 'center',
    },
    scrollContainer: {
        flex: 1,
        // backgroundColor: '#333333',
    },
    welcomeHeaderText: {
        fontSize: 26,
        padding: 20,
        // marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        alignSelf: 'center',
    },
    regular: {
        color: '#EDEFEE',
    },
    // welcomeText: {
    //   fontSize: 20,
    //   padding: 20,
    //   marginVertical: 8,
    //   color: '#EDEFEE',
    //   textAlign: 'center',
    // },
    // input: {
    //   height: 40,
    //   margin: 12,
    //   borderWidth: 1,
    //   padding: 10,
    //   fontSize: 16,
    //   borderColor: 'EDEFEE',
    //   backgroundColor: '#EDEFEE',
    // },
});
