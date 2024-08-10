import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';        
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Icons
import dashboardIcon from '../../assets/menuIcons/Dashboard.png';
import invoiceIcon from '../../assets/menuIcons/Invoice.png';
import scheduleIcon from '../../assets/menuIcons/Schedule.png';
import calendarIcon from '../../assets/menuIcons/Calendar.png';
import notificationIcon from '../../assets/menuIcons/Notification.png';
import settingsIcon from '../../assets/menuIcons/Setting.png';
import closeIcon from '../../assets/close.png'; // Close icon

const CustomDrawerContent = (props) => {
    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemPress = (route) => {
        setSelectedItem(route);
        navigation.navigate(route);
    };
 
    const getIcon = (route) => {
        switch (route) {
            case 'Dashboard': return dashboardIcon;
            case 'Upload': return scheduleIcon;
            case 'Invoice': return invoiceIcon;
            case 'Schedule': return scheduleIcon;
            case 'Calendar': return calendarIcon;
            case 'Notification': return notificationIcon;
            case 'Settings': return settingsIcon;
            default: return null;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={require('../../assets/menuIcons/Subtract_color.png')} />
                    <Text style={styles.headerText}>Base</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                    <Image source={closeIcon} style={styles.closeIcon} />
                </TouchableOpacity>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label="Dashboard"
                    icon={() => <Image source={getIcon('Dashboard')} style={styles.drawerIcon} />}
                    onPress={() => handleItemPress('Dashboard')}
                    labelStyle={{ color: selectedItem === 'Dashboard' ? '#605BFF' : '#000' }}
                />
                <DrawerItem
                    label="Upload"
                    icon={() => <Image source={getIcon('Upload')} style={styles.drawerIcon} />}
                    onPress={() => handleItemPress('Upload')}
                    labelStyle={{ color: selectedItem === 'Upload' ? '#605BFF' : '#000' }}
                />
                <DrawerItem
                    label="Invoice"
                    icon={() => <Image source={getIcon('Invoice')} style={styles.drawerIcon} />}
                    onPress={() => handleItemPress('Invoice')}
                    labelStyle={{ color: selectedItem === 'Invoice' ? '#605BFF' : '#000' }}
                />
                <DrawerItem
                    label="Schedule"
                    icon={() => <Image source={getIcon('Schedule')} style={styles.drawerIcon} />}
                    onPress={() => handleItemPress('Schedule')}
                    labelStyle={{ color: selectedItem === 'Schedule' ? '#605BFF' : '#000' }}
                />
                <DrawerItem
                    label="Calendar"
                    icon={() => <Image source={getIcon('Calendar')} style={styles.drawerIcon} />}
                    onPress={() => handleItemPress('Calendar')}
                    labelStyle={{ color: selectedItem === 'Calendar' ? '#605BFF' : '#000' }}
                />
                <DrawerItem
                    label="Notification"
                    icon={() => <Image source={getIcon('Notification')} style={styles.drawerIcon} />}
                    onPress={() => handleItemPress('Notification')}
                    labelStyle={{ color: selectedItem === 'Notification' ? '#605BFF' : '#000' }}
                />
                <DrawerItem
                    label="Settings"
                    icon={() => <Image source={getIcon('Settings')} style={styles.drawerIcon} />}
                    onPress={() => handleItemPress('Settings')}
                    labelStyle={{ color: selectedItem === 'Settings' ? '#605BFF' : '#000' }}
                />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 26,
        height: 26,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:20,
        justifyContent: 'space-between',
        padding: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'black'
    },
    closeIcon: {
        width: 16,
        height: 16,
    },
    drawerIcon: {
        width: 20,
        height: 20,
        marginRight: 15,
        resizeMode: 'contain', 
    },
});

export default CustomDrawerContent;
