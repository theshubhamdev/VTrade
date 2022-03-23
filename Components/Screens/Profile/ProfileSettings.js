import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {Auth} from 'aws-amplify';
import {useUserData} from '../../Contexts/UserDataContext';

const ProfileSettings = () => {
  const {name} = useUserData();
  return (
    <View style={{backgroundColor: '#0a0a0a', flex: 1, padding: 10}}>
      <Text style={{color: 'white', fontSize: 18}}>Hello, {name} </Text>
      <TouchableOpacity
        style={{marginTop: 'auto'}}
        onPress={() => Auth.signOut()}>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: '#0a0a0a',
            borderColor: 'white',
            borderWidth: 1,
            alignItems: 'center',
            paddingVertical: 10,
            marginVertical: 10,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            Log out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileSettings;
