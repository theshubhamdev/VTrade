import {View, Text, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useUserData} from '../../Contexts/UserDataContext';

const ProfileWallets = () => {
  const {vmoney, availableToTrade, updateDataProfile} = useUserData();
  useEffect(() => {
    updateDataProfile();
  }, []);
  const usedmargin = vmoney - availableToTrade;
  return (
    <View style={{backgroundColor: '#0a0a0a', flex: 1, padding: 10}}>
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Virtual Wallet
          </Text>
          <Pressable style={{marginLeft: 'auto'}}>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#0a0a0a',
                borderColor: 'white',
                borderWidth: 1,
                padding: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                Add funds
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          borderColor: 'white',
          borderWidth: 0.2,
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderRadius: 10,
        }}>
        <View>
          <Text style={{color: 'grey', padding: 10}}>Available to Trade</Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 25,
              padding: 10,
            }}>
            ₹ {availableToTrade.toFixed(2)}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'grey', padding: 10}}>Used margin</Text>
            <Text style={{color: 'white', padding: 10, marginLeft: 'auto'}}>
              ₹{usedmargin.toFixed(2)}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'grey', padding: 10}}>Total margin</Text>
            <Text style={{color: 'white', padding: 10, marginLeft: 'auto'}}>
              ₹{vmoney.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileWallets;
