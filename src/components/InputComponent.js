// src/components/InputComponent.js
import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const InputComponent = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={'grey'}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        fontFamily:'Lato',
        fontSize: 16,
        color: '#000000',
        marginBottom: 5,
    },
    input: {
        height: 40,
        color:'black',
        backgroundColor:'#F8FAFF',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
});

export default InputComponent;
