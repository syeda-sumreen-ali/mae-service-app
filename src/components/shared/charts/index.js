import React from 'react';
import { COLORS } from '../../../constants';
import Pie from 'react-native-pie';


export const Charts = (props) => {
    const { radius, innerRadius, dataArray } = props
    let totalValue = 0;
    let val1 = 0;
    let val2 = 0;
    let val3 = 0;
    if (dataArray.length) {
        totalValue = dataArray[0] + dataArray[1] + dataArray[2]
        val1 = (dataArray[0] / totalValue) * 100
        val2 = (dataArray[1] / totalValue) * 100
        val3 = (dataArray[2] / totalValue) * 100
    }
    let flag = false
    if (!val1 && !val2 && !val3) {
        flag = true
    }
    return (
        <Pie
            radius={radius}
            innerRadius={innerRadius}
            sections={[
                {
                    percentage: flag ? 1 : val1,
                    color: COLORS.black1,
                },
                {
                    percentage: flag ? 0 : val2,
                    color: COLORS.lightGray1,
                },
                {
                    percentage: flag ? 0 : val3,
                    color: COLORS.lightGray2,
                },
            ]}
            dividerSize={1}
            strokeCap={'but'}
        />
    );
};
