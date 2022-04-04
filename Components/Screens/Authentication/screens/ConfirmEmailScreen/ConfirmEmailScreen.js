import React, {useEffect, useState} from 'react';
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
  const [sendOTP, setSendOTP] = useState(false);
  const email = watch('email');
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => setSendOTP(true), 60000);
  }, []);
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
    if (sendOTP) return;
    try {
      await Auth.resendSignUp(email);
      Alert.alert('Success', 'Code was resent to your email');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setTimeout(() => setSendOTP(true), 60000);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>
      <Text style={styles.title}>OTP sent on {email}</Text>
      <CustomInput
        name="code"
        control={control}
        placeholder="Enter your confirmation code"
        rules={{
          required: 'Confirmation code is required',
        }}
      />

      <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
      {sendOTP ? (
        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />
      ) : (
        <Text style={{paddingVertical: 20}}>
          Wait 1 minute before sending another OTP
        </Text>
      )}

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
    color: 'white',
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
