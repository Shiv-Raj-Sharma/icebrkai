import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import React from 'react';
import Colors from '@/constant/Colors';
import { useRouter } from 'expo-router';

interface Props { }

const Register: React.FC<Props> = () => {
    const router = useRouter();
    const { width, height } = Dimensions.get('window');

    return (
        <View style={[styles.container, { padding: width < 400 ? 10 : 25 }]}>
            <Text style={styles.title}>Register Yourself</Text>
            <TextInput placeholder='First Name' style={styles.textInput} />
            <TextInput placeholder='Middle Name' style={styles.textInput} />
            <TextInput placeholder='Last Name' style={styles.textInput} />
            <TextInput placeholder='Address' style={styles.textInput} />
    
            <TextInput placeholder='Username' style={styles.textInput} />
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.signInContainer}>
                <Text>Already have an account?</Text>
                <Pressable onPress={() => router.push('/auth/signin')}>
                    <Text style={styles.signInText}>Sign In Here</Text>
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
        width: '100%',
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

export default Register;
