import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Dimensions, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import { signout } from '../../../store/actions';
import { COLORS, FONTS, IMAGES } from '../../../constants';


const MenuButtons = (props) => {
    const { menuImage, navigation, setModalVisible, modalVisible, size = 24, type, isContributorShow, setIsAnalyticsOpen } = props;

    const tapMenuButton = (name) => {
        setModalVisible(false);
        navigation.navigate(name);
    };

    const handleSignout = () => {
        props.signout({ userid: props.userid, fcmtoken: props.fcmToken })
    }
    const analyticsOpen = () => {
        if (setIsAnalyticsOpen) {
            setIsAnalyticsOpen(true)
        }
    }

    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <SafeAreaView style={{ flex: 1 }}>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPressOut={() => setModalVisible(false)}
                        style={styles.centeredView}
                    >
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                onPress={() => analyticsOpen()}
                                activeOpacity={0.9}
                                style={styles.menuBottuns}
                            >
                                <Image
                                    style={{ width: size, height: size }}
                                    source={IMAGES.icons_actions_analytics}
                                />
                                <Text style={styles.textStyle}>
                                    Analytics
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => tapMenuButton(type === 'consumer' ? 'Events' : 'EventsDashboardContainer')}
                                activeOpacity={0.9}
                                style={styles.menuBottuns}
                            >
                                <Image
                                    style={{ width: size, height: size }}
                                    source={IMAGES.icons_actions_events_white}
                                />
                                <Text style={styles.textStyle}>
                                    Events
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => tapMenuButton(type === 'consumer' ? 'Favorite' : 'ExperienceDashboardContainer')}
                                activeOpacity={0.9}
                                style={styles.menuBottuns}
                            >
                                <Image
                                    style={{ width: size, height: size }}
                                    source={type === 'consumer' ? IMAGES.icons_actions_favorite_white : IMAGES.icons_actions_experience}
                                />
                                <Text style={styles.textStyle}>
                                    {type === 'consumer' ? 'Favorite' : 'Experience'}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => tapMenuButton(type === 'consumer' ? 'CustomerDisputesContainer' : 'ContributorDisputesContainer')}
                                activeOpacity={0.9}
                                style={styles.menuBottuns}
                            >
                                <Image
                                    style={{ width: size, height: size }}
                                    source={IMAGES.icons_actions_dispute}
                                />
                                <Text style={styles.textStyle}>
                                    Disputes
                                </Text>
                            </TouchableOpacity>
                            {type !== 'consumer' && <TouchableOpacity
                                onPress={() => tapMenuButton('ContributorAvailableSlotsContainer')}
                                activeOpacity={0.9}
                                style={styles.menuBottuns}
                            >
                                <Image
                                    style={{ width: size, height: size }}
                                    source={IMAGES.icons_actions_settings_fill}
                                />
                                <Text style={styles.textStyle}>
                                    {'Slots'}
                                </Text>
                            </TouchableOpacity>}
                            {type !== 'consumer' && <TouchableOpacity
                                onPress={() => tapMenuButton('ConsumerHome')}
                                activeOpacity={0.9}
                                style={styles.menuBottuns}
                            >
                                <Image
                                    style={{ width: size, height: size }}
                                    source={IMAGES.icons_actions_settings_fill}
                                />
                                <Text style={styles.textStyle}>
                                    {'Consumer'}
                                </Text>
                            </TouchableOpacity>}
                            {isContributorShow && type === 'consumer' && <TouchableOpacity
                                onPress={() => tapMenuButton('ContributorHome')}
                                activeOpacity={0.9}
                                style={styles.menuBottuns}
                            >
                                <Image
                                    style={{ width: size, height: size }}
                                    source={IMAGES.icons_actions_settings_fill}
                                />
                                <Text style={styles.textStyle}>
                                    {'Contributor'}
                                </Text>
                            </TouchableOpacity>}
                        </View>
                    </TouchableOpacity >
                </SafeAreaView>
            </Modal>
            <View style={modalVisible ? styles.hexagonBeforeActive : styles.hexagonBefore} />
            <View style={modalVisible ? styles.hexagonInnerActive : styles.hexagonInner}>
                <Image
                    style={{ width: size, height: size }}
                    source={modalVisible ?
                        IMAGES.icons_actions_dashboard_white
                        : menuImage
                    }
                />
            </View>
            <View style={modalVisible ? styles.hexagonAfterActive : styles.hexagonAfter} />
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        userid: state.auth.user._id,
        fcmToken: state.auth.fcmToken,
    };
};
export default connect(mapStateToProps, { signout })(MenuButtons);

const styles = StyleSheet.create({
    hexagonInner: {
        backgroundColor: COLORS.white,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 46,
    },
    hexagonInnerActive: {
        backgroundColor: COLORS.black1,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        width: 46,
    },
    hexagonAfter: {
        borderTopColor: COLORS.white,
        bottom: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 23,
        borderLeftColor: 'transparent',
        borderRightWidth: 23,
        borderRightColor: 'transparent',
        borderTopWidth: 15,
    },
    hexagonAfterActive: {
        borderTopColor: COLORS.black1,
        bottom: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 23,
        borderLeftColor: 'transparent',
        borderRightWidth: 23,
        borderRightColor: 'transparent',
        borderTopWidth: 15,
    },
    hexagonBefore: {
        borderBottomColor: COLORS.white,
        bottom: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 23,
        borderLeftColor: 'transparent',
        borderRightWidth: 23,
        borderRightColor: 'transparent',
        borderBottomWidth: 15,
    },
    hexagonBeforeActive: {
        borderBottomColor: COLORS.black1,
        bottom: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 23,
        borderLeftColor: 'transparent',
        borderRightWidth: 23,
        borderRightColor: 'transparent',
        borderBottomWidth: 15,
    },
    centeredView: {
        flex: 1,
    },
    modalView: {
        backgroundColor: COLORS.black1,
        margin: 0,
        padding: 0,
        position: 'absolute',
        bottom: 58,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    menuBottuns: {
        width: Dimensions.get('window').width / 3 - 1,
        height: 124,
        backgroundColor: COLORS.gray6,
        margin: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        ...FONTS.body4_r,
        color: COLORS.light,
        letterSpacing: 0.4,
        textAlign: 'center',
    },
});
