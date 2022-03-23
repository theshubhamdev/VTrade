import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {useRoute} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {email: route?.params?.email},
  });

  const email = watch('email');

  const navigation = useNavigation();

  const onConfirmPressed = async data => {
    try {
      await Auth.confirmSignUp(data.email, data.code);
      navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(email);
      Alert.alert('Success', 'Code was resent to your email');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <CustomInput
        name="email"
        control={control}
        placeholder="Email"
        rules={{
          required: 'Email is required',
        }}
      />

      <CustomInput
        name="code"
        control={control}
        placeholder="Enter your confirmation code"
        rules={{
          required: 'Confirmation code is required',
        }}
      />

      <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

      <CustomButton
        text="Resend code"
        onPress={onResendPress}
        type="SECONDARY"
      />

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
    padding: 20,
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
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

export default ConfirmEmailScreen;
