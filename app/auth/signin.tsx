import { View, Text, TextInput, TouchableOpacity, Pressable, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Colors from '@/constant/Colors';
import { useRouter } from 'expo-router';

interface Props { }

const Signin: React.FC<Props> = () => {
    const router = useRouter();
    const { width, height } = Dimensions.get('window');

    return (
        <View style={[styles.container, { padding: width < 400 ? 10 : 25 }]}>
            <Text style={[styles.title, { fontSize: width < 400 ? 18 : 20 }]}>Welcome back</Text>
            <TextInput placeholder='Username' style={[styles.textInput, { width: width < 400 ? '90%' : '100%' }]} />
            <TextInput placeholder='Email' style={[styles.textInput, { width: width < 400 ? '90%' : '100%' }]} />
            <TextInput placeholder='Password' secureTextEntry={true} style={[styles.textInput, { width: width < 400 ? '90%' : '100%' }]} />

            <TouchableOpacity style={[styles.button, { width: width < 400 ? '90%' : '100%' }]}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.signInContainer}>
                <Text>Don't have an account?</Text>
                <Pressable onPress={() => router.push('/auth/register')}>
                    <Text style={styles.signInText}>Register here!!</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 1,
        marginTop: 50,
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    title: {
        fontSize: 20
    },
    textInput: {
        borderWidth: 1,
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        margin: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 15,
        color: Colors.WHITE,
        textAlign: 'center'
    },
    signInContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginTop: 5,
    },
    signInText: {
        color: Colors.PRIMARY,
    }
});

export default Signin;


