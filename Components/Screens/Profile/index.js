import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from './Header';
import ProfileNavigation from './ProfileNavigation';

const Profile = ({navigation, route}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#0a0a0a', flex: 1}}>
      <Header navigation={navigation} />
      <ProfileNavigation />
    </SafeAreaView>
  );
};

export default Profile;
