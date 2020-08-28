import React , {Component} from 'react';
import { StyleSheet,ImageBackground,Image, View ,Text} from 'react-native';

var bg = require('./splash1.png');
var logo = require('./cit_logo.png');

export default class Splash extends Component{
    constructor(props){
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate("Login");
        }, 2000);
    }
    render(){
        return(
            <ImageBackground source={bg} style = {styles.imageBackground}>
            <View style = {styles.imagecontainer}>
                <Image source = {logo} style = {styles.image} > 
                </Image>
            </View>
            <View style = {{width : '100%', flexDirection : 'row'}}>
            <Text style = {styles.text}>Crimson Innovative Technologies</Text>
            </View>
        </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    imageBackground:{
        height : '100%',
        width : '100%'
    },
    imagecontainer:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    image:{
        height : 100,
        width : 100
    },
    text:{
        fontSize : 40,
        marginBottom : '60%',
        color : '#ffffff'
    }
});