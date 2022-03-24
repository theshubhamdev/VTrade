import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {Auth} from 'aws-amplify';
import {useUserData} from '../../Contexts/UserDataContext';
import CustomButton from './CustomButton';
import {urlOpener} from '../../../App.js';

const ProfileSettings = () => {
  const OnPrivacyPolicyPress = () => {
    urlOpener(
      'https://github.com/theshubhamdev/Privacy_Policies/blob/main/VTrade_Policy.md',
    );
  };
  const {name} = useUserData();
  return (
    <View style={{backgroundColor: '#0a0a0a', flex: 1, padding: 10}}>
      <Text style={{color: 'white', fontSize: 18}}>Hello, {name} </Text>
      <View style={{marginTop: 'auto'}}>
        <CustomButton text="Privacy Policy" onPress={OnPrivacyPolicyPress} />
        <CustomButton text="Contact Us" onPress={OnPrivacyPolicyPress} />
        <CustomButton text="Log out" onPress={() => Auth.signOut()} />
      </View>
    </View>
  );
};

export default ProfileSettings;
