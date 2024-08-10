import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require('../../assets/hamburger.png')} style={styles.menuIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Home</Text>
            </View>
            <Text style={styles.welcomeText}>Welcome to the Home Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // backgroundColor: '#000', // Background color black
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:20,
        paddingBottom: 20,
    },
    menuIcon: {
        width: 16,
        height: 12,
        padding:10,
        tintColor: '#000', // Black color for the menu icon
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000', // Black color for header text
    },
    welcomeText: {
        fontSize: 16,
        color: '#000',
    },
});

export default HomePage;
