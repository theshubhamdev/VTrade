import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Logo from '../../../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {getUser} from '../../../../../src/graphql/queries';
import {createUser} from '../../../../../src/graphql/mutations';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const registerUser = async response => {
    try {
      const checkUser = await API.graphql(
        graphqlOperation(getUser, {id: response.attributes.sub}),
      );
      if (checkUser.data.getUser === null) {
        const newUser = await API.graphql(
          graphqlOperation(createUser, {
            input: {
              id: response.attributes.sub,
              name: response.attributes.name,
              email: response.attributes.email,
              vmoney: 200000.0,
              availableToTrade: 200000.0,
            },
          }),
        );
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  const onSignInPressed = async data => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await Auth.signIn(data.email, data.password);
      registerUser(response);
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        name="email"
        placeholder="Email"
        control={control}
        rules={{required: 'Email is required'}}
      />

      <CustomInput
        name="password"
        placeholder="Password"
        secureTextEntry
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 3,
            message: 'Password should be minimum 3 characters long',
          },
        }}
      />

      <CustomButton
        text={loading ? 'Loading...' : 'Sign In'}
        onPress={handleSubmit(onSignInPressed)}
      />

      <CustomButton
        text="Forgot password?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />

      <CustomButton
        text="Don't have an account? Create one"
        onPress={onSignUpPress}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0a0a0a',
    flex: 1,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
