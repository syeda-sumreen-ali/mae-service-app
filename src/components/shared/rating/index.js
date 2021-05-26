import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { ICONS } from '../../../constants';


export const Rating = (props) => {
    const {
        onChangeRating, // pass onChangeRating if you want to change rating on Click
        rating, // pass rating number from your state 0.1 to 5
        ratingIconStyle // pass rating Icons Styles if you not pass it show default style of rating file
    } = props;

    const [ratingArr, setRatingArr] = useState([]) // state for display rating

    // manage distplay rating state accorfing to rating from props
    useEffect(() => {
        let rat = rating
        let arr = []
        // run loop five time
        for (let i = 0; i < 5; i++) {
            if (rat >= 1) {
                // if rating grater then 1 or 1 it will be save 1 in array and - 1 from rat for next loop
                rat = rat - 1
                arr.push(1)
            } else if (rat > 0 && rat < 1) {
                // if rating number in . for exampla 0.5 it will be save 0.5 in arry and se 0 for next loop
                arr.push(0.5)
                rat = 0
            } else {
                // when rating value 0 it save 0 to aray
                arr.push(0)
            }
        }
        // finaly this array have 5 values 0 , 0.5 or 1
        // now set this array to rating component state for rendering
        setRatingArr(arr)
    }, [rating]) // [rating] this is a condition when rating from props get update useEffect function run 
    return (
        <View style={styles.ratingContainer}>
            {/* will check if ratingArr is grator then 0 then run a loop from .map method on rating Arr*/}
            {!!ratingArr.length && ratingArr.map((item, index) =>
                <TouchableOpacity
                    //  there is a function if you can pass onChangeRating from props it return number of cliked star index value is 0 to 4 thats why i wrote index + 1 in function
                    onPress={() => onChangeRating ? onChangeRating(index + 1) : null}
                    activeOpacity={0.7}
                >
                    {/* check if item value is 0 so it render 3rd one Icon is blank star like unrated */}
                    {/* check if item value is 1 so it render 2nd one Icon is colored star like rated */}
                    {/* check if item value is 0.5 so it render 1st one Icon is half colord star like half rated */}
                    {!!item ?
                        item === 0.5 ?
                            <ICONS.FontAwesome name="star-half-o" style={[styles.stars, ratingIconStyle]} />
                            :
                            <ICONS.FontAwesome name="star" style={[styles.stars, ratingIconStyle]} />
                        :
                        <ICONS.FontAwesome name="star-o" style={[styles.stars, ratingIconStyle]} />
                    }
                </TouchableOpacity>
            )}
        </View>
    )
}

// there has default styles for rating
const styles = StyleSheet.create({
    ratingContainer: { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    stars: { textAlign: 'center', paddingVertical: 40, margin: 5, fontSize: 24, color: 'black' },
})