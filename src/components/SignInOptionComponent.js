import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SignInOptionComponent = ({ icon, text, onPress }) => {
    return (
        <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
            <Image source={icon} style={styles.icon} resizeMode="contain" />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10, // Adjusted to prevent cutting off
        paddingHorizontal: 20,
        backgroundColor:'#FFFF',
        borderRadius: 5
    },
    icon: {
        width: 12,
        height: 12,
        marginRight: 10,
    },
    text: {
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 12.19,
        textAlign: 'center',
        color: '#858585',
    },
});

export default SignInOptionComponent;
