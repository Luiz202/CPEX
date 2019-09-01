import React, { Component } from 'react';
import {  TouchableOpacity, TextInput, View, StyleSheet, Text, Alert } from 'react-native';

export default class Handler extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: '',
    };
  }
  
  onSend() {
    const { message } = this.state;
    fetch("https://campus-party-hacka.herokuapp.com/send_message", {
      body: "{\"text\":\""+message+"\" ,\"name\":\"Hik\"}",
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });
          }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.message}
          onChangeText={(message) => this.setState({ message })}
          placeholder={'message'}
          style={styles.textInput}
        />
       
        <TouchableOpacity
          
          style={styles.input}
          onPress={this.onSend.bind(this)}
        >
            <Text> mandar mensagem </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  textInput: {

  },
});
/* 
<input 
    placeholder:"digite seu usuário no github"
    value=(username)

/>
*/

/* 

*/