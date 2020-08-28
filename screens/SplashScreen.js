import React, { useRef , Component} from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Label
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

export default function SplashScreen({navigation}) {

    const AnimationRef = useRef(null);
    const _onPress = () => {
      if (AnimationRef) {
        AnimationRef.current?.bounceInDown();
      }
    };

    return (
      <View style={styles.container}>
           <View style={styles.header}>
          <TouchableOpacity onPress={_onPress}>
            <Animatable.View
              animation="bounceIn"
              duration={2000}
              ref={AnimationRef}
            >
              <Image
                source={require("../assets/cit_logo.png")}
                style={styles.logo}
                resizeMode='cover'
              />
              
            </Animatable.View>
            <Animatable.Text 
              style={styles.bouncetext}
              animation="bounceInDown"
              duration={4000}>
              Crimson Innovative Technologies
              </Animatable.Text>
          </TouchableOpacity>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={ styles.title }>Stay connected With Us!</Text>
          <Text style={styles.text}>Sign In with Account</Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")  }
            >
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text style={{ fontFamily: 'sans-serif-condensed' , fontWeight : 'bold'}}>Get started</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View> 
        </View>
    );
  }

const { height } = Dimensions.get("screen");
const height_logo = height * 0.22;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
 },
  header: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo ,
    height: height_logo,
    marginLeft : '18%',
    borderWidth : 3,
    borderColor : '#fff',
    borderRadius : 200,
    overflow:'hidden',
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'sans-serif-condensed'
  },
  text: {
    color: "grey",
    marginTop: 5,
    fontFamily: 'sans-serif-condensed'
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
    fontFamily: 'sans-serif-condensed'
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: 'sans-serif-condensed'
  },
  bouncetext:{
    fontFamily: 'sans-serif-condensed',
    fontWeight : '700',
    color:'#fff',
    paddingTop : 20,
    fontSize : 20
  }
});
