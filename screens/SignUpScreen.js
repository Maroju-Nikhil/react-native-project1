import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TextInput,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../components/context";

const SignUpScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidUser : true,
    isValidpassword : true,
    isConfirmPasword : true,
  });

  const { signUp } = React.useContext(AuthContext);
  const textInputChange = (value) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(value).toLowerCase()) == true) {
      setData({
        ...data,
        email: value,
        check_textInputChange: true,
        isValidUser : true
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textInputChange: false,
        isValidUser :false
      });
    }
  };

  const handlePasswordChange = (value) => {
    if(value.trim().length >= 8){
    setData({
      ...data,
      password: value,
      isValidpassword : true,
    });
  }
  else{
    setData({
      ...data,
      password: value,
      isValidpassword : false,
    });
  }
  };

  const handleConfirmPasswordChange = (value) => {
    if(data.confirm_password  >=8 ){
    setData({
      ...data,
      confirm_password: value,
      isConfirmPasword : true
    });
  }
  else{
    setData({
      ...data,
      password: value,
      isConfirmPasword: false,
    });
  }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateconfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const signup = () =>{
    if(data.email.trim().length == 0 || data.password.trim().length == 0)
    alert('Invalid Details');
    else if(data.isValidpassword && data.isValidUser && data.confirm_password == data.password )
      signUp();
  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => textInputChange(value)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        { data.isValidUser ? null :
        <Animatable.View animation="fadeInLeft" duration={500} >
        <Text style={styles.errorMsg}>Email must contain @ and '.'</Text>
        </Animatable.View> }

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => handlePasswordChange(value)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        { data.isValidpassword ? null :
        <Animatable.View animation="fadeInLeft" duration={500} >
        <Text style={styles.errorMsg}>Password must be 8 character long.</Text>
        </Animatable.View> }


        <Text style={[styles.text_footer, { marginTop: 35 }]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => handleConfirmPasswordChange(value)}
          />
          <TouchableOpacity onPress={updateconfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        { data.isConfirmPasword ? null : (
            [ data.password != data.confirm_password ? (
              <Animatable.View animation="fadeInLeft" duration={500} >
        <Text style={styles.errorMsg}>Passwords didn't Match.</Text>
        </Animatable.View> ):
              (
                <Animatable.View animation="fadeInLeft" duration={500} >
        <Text style={styles.errorMsg}>Password must be 8 character long.</Text>
        </Animatable.View> 
              )
            ])
        }

        <View style={styles.button}>
          <TouchableOpacity onPress={() => { signup() }} style={styles.signIn}>
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.signIn,
              { borderColor: "#009387", borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSign, { color: "#009387" }]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 0.8,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3.2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "sans-serif-condensed",
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    fontFamily: "sans-serif-condensed",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    fontFamily: "sans-serif-condensed",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 30,
  },
  signIn: {
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "sans-serif-condensed",
  },
  errorMsg :{
    color : 'red',
    fontFamily : 'sans-serif-condensed'
  }
});

export default SignUpScreen;
