import React, { Component } from 'react';
import {  TouchableOpacity, TextInput, View, StyleSheet, Text } from 'react-native';

export default class Handler extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: '',
    };
  }
  
  onSend() {
    const { message } = this.state;
    fetch('http://localhost:3333', { 
        method: 'POST',
         headers: {
            
        },
          body: JSON.stringify({
            message: {message},
          }),
        }).then((response) => response.json())
            .then((responseJson) => {
              return responseJson.movies;
            })
            .catch((error) => {
              console.error(error);
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