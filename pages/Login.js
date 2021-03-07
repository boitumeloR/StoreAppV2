import React, { useEffect, useState } from 'react';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  TextInput,
  View,
  StatusBar,
} from 'react-native';

import {AuthContext} from '../components/context';

import * as Animatable from 'react-native-animatable';
import {FontAwesome} from 'react-native-vector-icons/FontAwesome';
import {Feather} from 'react-native-vector-icons/Feather';
import { useContext } from 'react';

const Login = ({navigation}) => {

  const [textStyle, setTextStyle] = useState(styles.action);
  const [passwordStyle, setPasswordStyle] = useState(styles.action);
  const [data, setData] = useState({
    email: 'Hello',
    password: 'World',
    checkInputChange: false,
    secureTextEntry: true,
  });

  const changeInput = (value) => {
    if (value.length !== 0 ) {
      setData({
        ...data,
        email: value,
        checkInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        checkInputChange: false,
      });
    }
  };

  const handlePasswordChange = (value) => {
    setData({
      ...data,
      password: value,
    });
  };

  const togglePassword = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const changeInputStyle = () => {
    setTextStyle({
      ...textStyle,
      borderBottomColor: '#000',
    });
  };

  const revertInputStyle = () => {
    setTextStyle({
      ...textStyle,
      borderBottomColor: '#009387',
    });
  };

  const revertPasswordStyle = () => {
    setTextStyle({
      ...passwordStyle,
      borderBottomColor: '#009387',
    });
  };

  const changePasswordStyle = () => {
    setPasswordStyle({
      ...passwordStyle,
      borderBottomColor: '#000',
    });
  };

  const {signIn} = useContext(AuthContext);
  const handleLogin = () => {
    // Validate here
    signIn();
  };

  return (
    <View style = {styles.container}>
      <StatusBar barStyle = "light-content" backgroundColor = "#333333"/>
      <View style = { styles.header}>
        <Text style = {styles.text_header}>Login to Gain Access</Text>
      </View>

      <Animatable.View
      style = {styles.footer}
      animation = "fadeInUpBig"
      >
      <Text style = {styles.text_footer}>Email Address</Text>
      <View style = {textStyle}>
        <TextInput style = {styles.textInput}
          placeholder = "Enter your email"
          autoCapitalize = "none"
          value = {data.email}
          focusable = {true}
          onFocus = {() => changeInputStyle()}
          onBlur = {() => revertInputStyle()}
          onChangeText = { (val) => changeInput(val)}
          />
      </View>
      <Text style = {[styles.text_footer, styles.passwordAddition]}>Password</Text>
      <View style = {passwordStyle}>
        <TextInput style = {styles.textInput}
        placeholder = "Password"
        autoCapitalize = "none"
        secureTextEntry = {data.secureTextEntry}
        value = {data.password}
        focusable = {true}
        onFocus = {() => changePasswordStyle()}
        onBlur = {() => revertPasswordStyle()}
        onChangeText = { (val) => handlePasswordChange(val)}
        />
      </View>

      <View style = { styles.button}>
            <TouchableOpacity
              onPress = { () => handleLogin()}
              style = { [styles.signIn]}
            >
              <Text style = { styles.buttonColor}>Sign In</Text>
            </TouchableOpacity>
        </View>
      <View style = { styles.signUpButton}>
          <TouchableOpacity
            onPress = { () => navigation.navigate('SignUpScreen')}
            style = { [styles.signIn]}
          >
            <Text style = { styles.buttonColor}>Sign Up</Text>
          </TouchableOpacity>
      </View>
    </Animatable.View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
  buttonColor: {
    color: '#fff',
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : 12,
    paddingLeft: 10,
    height: 60,
  },
  passwordAddition: {
    marginTop: 35,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 20,
    fontWeight: '900',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#828282',
    borderRadius: 30,
    color: '#fff',
  },
  signUpButton: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#828282',
    borderRadius: 30,
    color: '#333333',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signUpAdd: {
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#009387',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textAddon: {
    color: '#fff',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#009387',
    paddingBottom: 3,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
});

export default Login;



