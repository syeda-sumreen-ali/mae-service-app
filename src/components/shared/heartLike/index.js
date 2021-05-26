import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, ICONS, SIZES } from '../../../constants'

export function HeartLike(props) {
    const [like, setlike] = useState(false)
    const { user, addToFav, contributor, experience } = props;

    useEffect(() => {
        let favorite_contributors = user.favorite_contributors;
        let favorite_experiences = user.favorite_experiences;
        setlike(false)
        if (contributor && favorite_contributors && favorite_contributors.length) {

            for (let key in favorite_contributors) {
                if (favorite_contributors[key]._id === contributor._id) {
                    setlike(true)
                }
            }
        } else if (experience && favorite_experiences && favorite_experiences.length) {
            for (let key in favorite_experiences) {
                if (favorite_experiences[key]._id === experience._id) {
                    setlike(true)
                }
            }
        }
    }, [user.favorite_contributors, user.favorite_experiences])

    return (
        <View>
            <TouchableOpacity onPress={() => addToFav(contributor ? contributor._id : "", experience ? experience._id : "")}>
                <ICONS.AntDesign name={like ? 'heart' : 'hearto'} size={25} color={like ? COLORS.yellow : COLORS.yellow} />
            </TouchableOpacity>
        </View>
    )
}