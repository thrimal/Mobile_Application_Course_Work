/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import * as native from 'native-base';
import { StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('black');

const SignUp = () => {
  const navigation = useNavigation();

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirm, setconfirm] = useState('');

  const [errmsg, seterrmsg] = useState(false);
  const [errmsgtext, seterrmsgtext] = useState('');




  function haveEmail() {
    return axios({
      method: 'GET',
      url: `http://192.168.43.113:3010/user/${email}`,

    })
      .then((res) => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
  function saveUser() {
    haveEmail().
      then(result => {
        if (result) {
          seterrmsg(true);
          seterrmsgtext('Email already exists');
        } else if (password != confirm) {
          seterrmsg(true);
          seterrmsgtext('Wrong password');
        } else {
          axios({
            method: 'POST',
            url: 'http://192.168.43.113:3010/user',
            data: {
              name: name,
              email: email,
              password: password
            },
          })
            .then(res => {
              if (res.data) {
                navigation.navigate('Home');
              }
            })

        }
      })
      .catch(err => {
        console.log(err);
      });



  }

  return (
    <native.NativeBaseProvider>
      <native.Center flex={1} bg="white">
        <native.Image
          alt="Alternate Text"
          source={require('../asserts/images/login2.jpg')}
          position="absolute"
          resizeMode="cover"
          height="100%"
          width="100%"
        />
        <native.Box height="600px" justifyContent="center" width="300px">
          <native.KeyboardAvoidingView
            flex={1}
            behavior="padding"
            justifyContent="center">
            <native.Text
              fontSize="40px"
              textAlign="center"
              fontFamily='fantasy'
              mb={6}
              color="white">
              Income Tracking
            </native.Text>
            <native.Input
              width="100%"
              h="40px"
              placeholder="Full Name"
              placeholderTextColor="gray.600"
              mb={4}
              borderRadius="30px"
              bg="rgba(245, 246, 250,0.8)"
              style={styles.shadow}
              onChangeText={name => {
                setname(name);
              }}
            />
            <native.Input
              width="100%"
              h="40px"
              placeholder="E-mail"
              placeholderTextColor="gray.600"
              mb={4}
              borderRadius="30px"
              bg="rgba(245, 246, 250,0.8)"
              style={styles.shadow}
              onChangeText={email => {
                setemail(email);
              }}
            />
            {/* <native.Input
              width="100%"
              h="40px"
              placeholder="Contact"
              placeholderTextColor="gray.600"
              mb={4}
              borderRadius="30px"
              bg="rgba(245, 246, 250,0.8)"
              style={styles.shadow}
              onChangeText={contact => {
                setcontact(contact);
              }}
            /> */}
            <native.Input
              width="100%"
              h="40px"
              type="Password"
              placeholder="Create Password"
              placeholderTextColor="gray.600"
              mb={4}
              borderRadius="30px"
              bg="rgba(245, 246, 250,0.8)"
              style={styles.shadow}
              onChangeText={password => {
                setpassword(password);
              }}
            />
            <native.Input
              width="100%"
              h="40px"
              type="Password"
              placeholder="Confirm Password"
              placeholderTextColor="gray.600"
              mb={4}
              borderRadius="30px"
              bg="rgba(245, 246, 250,0.8)"
              style={styles.shadow}
              onChangeText={confirm => {
                setconfirm(confirm);
              }}
            />

            {errmsg ? <native.Text color={'red.500'}>{errmsgtext}</native.Text> : null}

          </native.KeyboardAvoidingView>
          <native.Center>
            <native.Button
              w="50%"
              h="50px"
              style={styles.shadow}
              borderRadius="50px"
              onPress={saveUser}>
              <native.Text
                color="black"
                fontWeight="bold"
                fontSize="18px"
              >
                SignUp
                </native.Text>

            </native.Button>
          </native.Center>

          <native.Text mt="2" fontSize="16px" textAlign="center" color='white'>

          </native.Text>

          <native.Pressable onPress={() => navigation.goBack()}>
            <native.Text
              fontWeight="bold"
              textAlign="center"
              textDecoration="underline"
              fontSize='20px'
              color='white'
            >
              Login
              </native.Text>
          </native.Pressable>
        </native.Box>
      </native.Center>
    </native.NativeBaseProvider>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16.0,

    elevation: 8,
  },
});
