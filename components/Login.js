import React, {useState} from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Image, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import * as Models from "../models"
const TwilioPhoneResponse = Models.TwilioPhoneResponse;
const TwilioVerifyResponse = Models.TwilioVerifyResponse;
const WalkerModelActiveValid = Models.WalkerModelActiveValid;

const requestTwilioPhoneVerification = (phone, resetInput) => {
  // Alert.alert('Right button pressed')
  // Doing it this way.. the response object properties are isolated from the
  // rest of the application.... maybe? And send back only the data we need.
  resetInput("")
 return true;
}

const verifyTwilioVerificationCode = (code, resetInput) => {
  console.log(" verify success", code);
  resetInput("")
  return true;
}

const captureCodeAndNavigate = (setCode) => {
  setCode("");
}

// I find it really neat that this prop is passed automatically from the Navigator Stack

export const Login = ({navigation}) => {
    const [phone, setPhone] = useState(false);
    const [code, setCode] = useState(false);

    const [input, setInput] = useState("");
    const [verifySuccess, setVerifySuccess] = useState(false);
    
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <StatusBar style={"auto"} />
          <Text style={styles.introtext}>Perro Perro</Text>
          <View style={styles.loginLayout}>
            {/* <Text>Regain Control of your business</Text> */}
            <Image
              style={styles.logo}
              source={require("../assets/PerroPerro.jpg")}
            />

            <View>
              <TextInput 
                keyboardType="number-pad"
                style = { styles.input }
                placeholder = { phone ? "XXXXXX" : "XXX-XXX-XXXX" }
                textContentType= { phone ? "oneTimeCode" : "phoneNumber" }
                onChangeText = { ( evt ) => { setInput( evt ) } }
                value={ phone ? input : input }
              />
            </View>

            <View style={styles.buttonContainer}>
              {
                phone
                  
                ? <Pressable
                    onPress={ () => {
                      verifyTwilioVerificationCode(code, setInput) 
                      ? navigation.navigate("Clients") //captureCodeAndNavigate(setCode)
                      : setCode(false)
                    }}
                    style={styles.button} 
                    accessibilityLabel="Verify Code Assume Success"
                  >
                    <Text style={styles.text}>{"Verify"}</Text>
                  </Pressable> 
                : <Pressable
                    onPress={ () => { 
                      requestTwilioPhoneVerification(phone, setInput) 
                      ? setPhone(true) 
                      : setPhone(false)
                    } }
                    style={styles.button} 
                    accessibilityLabel="Submit Phone assume Success"
                  >
                    <Text style={styles.text}>{"Begin"}</Text>
                  </Pressable> 
              }
            </View>

            <View style={styles.helperTextContainer}>
              <Text style={styles.helperText}> 
                {
                  phone
                  ? "Enter 6 digit code we just sent to you"
                  : `Enter your phone number to begin
(SMS charges may apply)`
                } 
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )

}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'start',
    },
    containerHeader: {
      flex: 1, 
    },
    helperTextContainer: {
      display: "flex",
      width: 270,
      alignItems: "center",
      justifyContent: "center"
    },
    helperText:{
      textAlign: 'center'
    },
    buttonContainer:{
      margin: 20
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      width: 120,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    introtext:{
      fontSize: 30,
      margin: 30,
      lineHeight: 50,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginLayout:{
      fontSize: 30,
      lineHeight: 50,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: 270,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 3
    },
    logo: {
      width: 140, 
      height: 140 
    }
  });