/* eslint-disable prettier/prettier */
import React from 'react';
import * as native from 'native-base';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('black');


const Main = () => {
    const navigation = useNavigation();

    return (
        <native.NativeBaseProvider>
            <native.Image
                alt="Main Image"
                source={require('../asserts/images/login4.jpg')}
                position="absolute"
                resizeMode="cover"
                height="100%"
                width="100%"
            />

            <native.Center flex={1}>
                <native.Text
                    color={'white'}
                    w="100%"
                    fontFamily="Rattoney"
                    fontSize="50px"
                    textAlign="center"


                >Income Tracking</native.Text>
            </native.Center>
            <native.Box position="absolute" w="100%" bottom={10}>
                <native.Button
                    colorScheme={'purple'}
                    h="50px"
                    w="50%"
                    borderRadius={'50px'}
                    margin="auto"
                    onPress={() => navigation.navigate('Login')}>
                    <native.Text fontSize="20px" fontWeight='bold' color='black'> Get Start</native.Text>
                </native.Button>
            </native.Box>


        </native.NativeBaseProvider>
    );
};

export default Main
