import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const LoginScreen = props => {
  const {navigation} = props;
  {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    );
  }
};

export default LoginScreen;
