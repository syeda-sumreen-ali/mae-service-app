import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FONTS, COLORS, SIZES, IMAGES } from '../../../constants';

export const ReviewsListCards = (props) => {
    // get reviews array from props
    const { reviews } = props;
    return (
        <View style={{padding: 20}}>
            {!!reviews && !!reviews.length &&
                <View>
                    <Text style={styles.subTitle}>{`Reviews (${reviews.length})`}</Text>
                    <View>
                        {reviews.map((item, index) => {
                            return <View style={{ padding: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={!!item.customer.customer.personal_photo ? { uri: item.customer.customer.personal_photo } : IMAGES.profile_dummy_image}
                                        style={{ height: 50, width: 50, borderRadius: 50, marginRight: 20 }}
                                    />
                                    <View>
                                        <Text style={{ color: '#000000', ...FONTS.title_r, letterSpacing: 0.18 }}>{item.customer.customer.display_name}</Text>
                                        <Text style={{ color: '#8e8e8e', ...FONTS.body1_r, lineHeight: 28, letterSpacing: 0.44 }}>{item.create_at.toString()}</Text>
                                    </View>
                                </View>
                                <Text style={{ paddingVertical: 20, color: '#4b4b4b', ...FONTS.body3_r, lineHeight: 24, letterSpacing: 0.25 }}>
                                    {item.review}
                                </Text>
                            </View>
                        })}

                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    subTitle: { ...FONTS.subTitle_m, color: COLORS.black },
    desc: { ...FONTS.body3_r, color: COLORS.black2, lineHeight: 24, letterSpacing: 0.25 },
    pd5: { paddingBottom: SIZES.height / 5 }

})
