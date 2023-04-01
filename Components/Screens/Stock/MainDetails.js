import {View, Text} from 'react-native';
import React from 'react';

const MainDetails = ({
  companyName,
  buyPrice1,
  difference,
  percentage,
  lastUpdateTime,
}) => {
  return (
    <View>
      <View style={{paddingVertical: 15}}>
        <Text style={{color: 'white', fontSize: 15}}>{companyName}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Text style={{color: 'white', fontSize: 20}}>$ </Text>
          <Text style={{color: 'white', fontSize: 40}}>
            {buyPrice1.toFixed(2)}
          </Text>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <Text
            style={{
              color: difference > 0 ? '#79ea86' : '#e75757',
              fontSize: 15,
            }}>
            {difference > 0 ? '+' : ''}
            {difference} ({percentage}%)
          </Text>
        </View>
      </View>
      <Text style={{color: 'white', fontSize: 12, paddingVertical: 5}}>
        As of {lastUpdateTime.split('-').join(' ')}
      </Text>
    </View>
  );
};

export default MainDetails;
