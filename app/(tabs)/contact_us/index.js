import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function ContactUs() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {

    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // Clear the form fields after submission
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('./logo.png')} style={styles.logo} />
       */}
      <Text style={styles.title}>Contact Us</Text>

      <Text style={styles.label}>Your Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Subject:</Text>
      <TextInput
        style={styles.input}
        value={subject}
        onChangeText={setSubject}
      />

      <Text style={styles.label}>Your Message:</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        multiline={true}
        numberOfLines={4}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 20,
    marginBottom: 20,
    position: 'absolute', // Position the logo absolutely
    top: 20, // Adjust as needed to create space from the top
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40, // Adjust as needed to create space from the form fields
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});