import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native'; // <-- Ensure Alert is imported
import { useNavigation } from '@react-navigation/native';
import { signin, signup } from '../services';
import AsyncStorage from '@react-native-async-storage/async-storage'; // <-- Ensure AsyncStorage is imported


const Auth = () => {
  const [showSignin, setShowSignin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const handleSignin = async () => {
    try {
      const result = await signin(email, password);
      console.log('Signin Result:', result);
  
      // Assuming your API returns a token upon successful signin
      const { token } = result;
  
      // Store the authentication token in AsyncStorage
      await AsyncStorage.setItem('authToken', token);
  
      // Redirect to HomeScreen upon successful signin
      navigation.navigate('Home');
  
      // Show an alert to confirm that the process reached this point
      Alert.alert('Signin Success', 'You have successfully signed in.');
    } catch (error) {
      console.error('Error signing in:', error);
      // Show an alert to display the error message
      Alert.alert('Signin Error', `Error signing in: ${error.message}`);
    }
  };
  
  

  const handleSignup = async () => {
    try {
      const response = await signup(name, email, password);

      // Handle the result, e.g., log it
      console.log('Signup Result:', response);

      // Redirect to HomeScreen upon successful signup
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Your Logo Here */}
      <Image source={require('../assets/logo.png')} style={{ width: 50, height: 50, marginBottom: 20 }} />

      {showSignin ? (
        // Signin Form
        <View style={{ marginTop: 20, width: '80%' }}>
          <Text>Sign In</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Sign In" onPress={handleSignin} />
          <TouchableOpacity onPress={() => setShowSignin(false)}>
            <Text style={{ marginTop: 20, color: 'blue' }}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Signup Form
        <View style={{ marginTop: 20, width: '80%' }}>
          <Text>Sign Up</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Sign Up" onPress={handleSignup} />
          <TouchableOpacity onPress={() => setShowSignin(true)}>
            <Text style={{ marginTop: 20, color: 'blue' }}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Auth;
