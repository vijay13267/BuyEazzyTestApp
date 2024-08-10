import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InputComponent from '../components/InputComponent';
import SignInOptionComponent from '../components/SignInOptionComponent';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function LoginPage() {
    const navigation = useNavigation();
    const googleIcon = require('../../assets/LoginPage/googleIcon.png');
    const appleIcon = require('../../assets/LoginPage/appleIcon.png');
    const github = require('../../assets/LoginPage/github.png');
    const linkedIn = require('../../assets/LoginPage/linkedIn.png');
    const x = require('../../assets/LoginPage/x.png');
    const discord = require('../../assets/LoginPage/discord.png');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayError, setDisplayError] = useState('');

    const handleLogin = () => {
        // Handle actual login functionality here
    };

    const validateAndSignIn = () => {
        // Validation logic here
        navigation.navigate('HomePage');
    };

    return (
        <View style={{ flex: 1}}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../assets/LoginPage/subtract.png')} />
                <Text style={styles.headerText}>Base</Text>
            </View>
            <View style={{padding:30,backgroundColor:'#F8FAFF'}}>
                <Text style={styles.title}>Sign In</Text>
                <Text style={styles.subtitle}>Sign in to your account</Text>

                <View style={styles.signInOptions}>
                    <SignInOptionComponent icon={googleIcon} text="Sign in with Google" onPress={() => {}} />
                    <SignInOptionComponent icon={appleIcon} text="Sign in with Apple" onPress={() => {}} />
                </View>
                <View style={{padding:20,borderRadius:10,backgroundColor:'#FFFF'}}>
                    <InputComponent
                        label="Email address"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                    />
                    <InputComponent
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        secureTextEntry
                    />

                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.forgotPassword}>Forgot password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signInButton} onPress={validateAndSignIn}>
                        <Text style={styles.signInButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    {displayError ? <Text style={styles.errorText}>{displayError}</Text> : null}
                </View>
                <View style={styles.registration}>
                    <Text style={{color:'#858585'}}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.registerLink}>Register Here</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.externalLinks}>
                    <Image style={styles.externalLinkImage} source={github} />
                    <Image style={styles.externalLinkImage} source={x} />
                    <Image style={styles.externalLinkImage} source={linkedIn} />
                    <Image style={styles.externalLinkImage} source={discord} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#605BFF'
    },
    logo: {
        width: 26,
        height: 26,
    },
    headerText: {
        fontFamily:'Nunito',
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 15,
        color:'white'
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 5,
        color: '#000', 
    },
    subtitle: {
        fontFamily:'Lato',
        fontWeight: '400',
        fontSize: 12,
        marginBottom: 20,
        color: '#000',  
    },
    signInOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 20,
    },
    signInButton:{
        backgroundColor: '#605BFF',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    signInButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Lato',
    },
    forgotPassword: {
        marginVertical: 20,
        color:'#346BD4',
        fontSize:16,
        fontWeight:'400',
        fontFamily:'Lato'
    },
    errorText: {
        color: 'red',  
        marginTop: 10,
    },
    registration: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 20,
    },
    registerLink: {
        color: '#346BD4', 
        marginTop: 5,
    },
    externalLinks: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    externalLinkImage: {
        width: 28,
        height: 28,
        margin: 15,
    },
});
