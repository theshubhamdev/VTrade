import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onSendPressed = async data => {
    try {
      await Auth.forgotPassword(data.username);
      navigation.navigate('NewPassword');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput
        name="username"
        control={control}
        placeholder="Username"
        rules={{
          required: 'Username is required',
        }}
      />

      <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

      <CustomButton
        text="Back to Sign in"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#0a0a0a',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ForgotPasswordScreen;
