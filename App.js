import React from 'react';
import {
  AppRegistry, 
  Image, StyleSheet, 
  Text, 
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,View } from 'react-native';
  import { Form, TextValidator } from 'react-native-validator-form';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior ="padding" style={styles.container}>
        <View style={styles.containerInside}>
          <View style = {styles.logoContainer}>
            <Image
              style = {styles.logo}
              source ={require('./assets/logo.png')}
            />
          </View>
        </View>
        <View style={styles.containerInside}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={this.setState.email}
            returnKeyType = "next"
            returnKeyLabel = "NEXT"
            keyboardType = "email-address"
            onSubmitEditing ={() =>this.passwordInput.focus()} 
            style= {styles.input} placeholder = 'Input email address' />
          <Text style={styles.label}>Password</Text>
          <TextInput
            returnKeyType = "go"
            returnKeyLabel = "GO" 
            secureTextEntry
            value={this.setState.password}
            ref ={(input) => this.passwordInput = input}
            style= {styles.input} placeholder = 'Input password' />
          <TouchableOpacity style ={styles.buttonContainer} >
            <Text  style ={styles.buttonText}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  containerInside: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    width: 303,
    height: 207
  },
  logo: {
    flex: 1
  },
  label:{
    fontSize: 20,
    color: 'black'
  },
  input: {
    height: 40,
    width: 300, fontSize: 18,
    marginBottom: 10,
    color: 'black',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 20,
  },
  buttonText:{
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

AppRegistry.registerComponent('lj-technical-test', () => App);
