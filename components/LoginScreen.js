import { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Pressable,
    StyleSheet,
} from 'react-native';

export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [loggedIn, onLogin] = useState(false);

    return (
        <ScrollView style={styles.container}
        // keyboardDismissMode="on-drag"
        // style={styles.container}
        >


            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>}

            {!loggedIn && (
                <>
                    <Text style={styles.regularText}>Login to continue </Text>

                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={onChangeEmail}
                        placeholder={'email'}
                        keyboardType={'email-address'}
                        clearButtonMode={'always'}
                    />
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={onChangePassword}
                        secureTextEntry={true}
                        placeholder={'password'}
                        keyboardType={'default'}
                        clearButtonMode={'always'}
                    />
                </>
            )}
            <Pressable
                style={styles.button}
                onPress={() => onLogin(!loggedIn)}
            // onPress={() => onLogin((prevLoggedIn) => !prevLoggedIn)
            //  onPress={() => onLogin(true)}
            >
                <Text style={styles.buttonText}>
                    Log in
                </Text>
            </Pressable>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#EDEFEE',
    },
    button: {
        fontSize: 22,
        width: 160,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: '#EE9972',
        borderColor: '#EDEFEE',
        borderWidth: 0,
        borderRadius: 32,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 20,
    },
});
