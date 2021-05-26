import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import MenuButtons from './menuButtons';
import { COLORS, FONTS, IMAGES } from '../../../constants';

const BottomTabsForDashboard = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { navigation, menuImage, type, isContributorShow, setIsAnalyticsOpen } = props;

    return (
        <View style={styles.bottomTabBar}>
            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.bottomTabButons}
                onPress={() => navigation.navigate('HomePageContainer')}
            >
                <Image
                    style={styles.bottomTabIcon}
                    source={IMAGES.icons_actions_home}
                />
                <Text style={styles.bottomTabText}>
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('ChatContainer')}
                style={styles.bottomTabButons}
            >
                <Image
                    style={styles.bottomTabIcon}
                    source={IMAGES.icons_actions_chat_fill}
                />
                <Text style={styles.bottomTabText}>
                    Messages
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.hexagon}
                onPress={() => setModalVisible(true)}
            >
                <MenuButtons
                    type={type}
                    menuImage={menuImage}
                    navigation={navigation}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    isContributorShow={isContributorShow}
                    setIsAnalyticsOpen={setIsAnalyticsOpen}
                />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.bottomTabButons}
                onPress={() => navigation.navigate('Notification')}
            >
                <Image
                    style={styles.bottomTabIcon}
                    source={IMAGES.icons_actions_notification}
                />
                <Text style={styles.bottomTabText}>
                    Notification
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.bottomTabButons}
                onPress={() => navigation.navigate('Profile')}
            >
                <Image
                    style={styles.bottomTabIcon}
                    source={IMAGES.icons_actions_profile}
                />
                <Text style={styles.bottomTabText}>
                    Profile
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default BottomTabsForDashboard;

const styles = StyleSheet.create({
    bottomTabBar: {
        backgroundColor: COLORS.black1,
        // backgroundColor: "rgba(0,0,0,0.2)",
        // position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        // bottom: 0,
        // left: 0,
        // right: 0,
        height: 58,
    },
    bottomTabButons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTabText: {
        ...FONTS.body4_r,
        color: COLORS.light,
        letterSpacing: 0.4,
        textAlign: 'center',
    },
    bottomTabIcon: {
        height: 24,
        width: 24,
    },
    hexagon: {
        margin: 2,
        marginLeft: 5,
        marginRight: 5,
    },
});
