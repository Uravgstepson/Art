import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile } from '../store/actions/ProfileAction';


const RegisterScreen = props => {

  const {navigation} = props;
  const dispatch = useDispatch()

  const globalProfileData = useSelector(store => store.profileReducer)

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleRegister = () => {
    dispatch(createProfile(form))
  };

  const onChangeInput = (inputType, value) => {
    setForm({
      ...form,
      [inputType]: value
    })
  }

  useEffect(() => {
    console.log('global data')
    console.log(globalProfileData)
  })

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={form.username}
        onChangeText={(text) => onChangeInput('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => onChangeInput('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => onChangeInput('password', text)}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button
        title="Back to Login"
        onPress={() => navigation.goBack()}
        color="#007BFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default RegisterScreen;
