import React, {Component} from 'react';
import {Text, Card, Button} from 'native-base';
//import {TouchableOpacity, FlatList, View, TextInput, ImageBackground} from 'react-native';
import {StyleSheet, View, ImageBackground, TouchableOpacity, StatusBar} from 'react-native';
import TextInputBase from '../component/ext_input/TextInputBase.js';
// import {Button, Text} from 'native-base';
import * as Icons from '../images';
import * as Dimens from '../config/dimens.js';
import * as StringUtils from '../config/string.js';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";

export default class AccountScreen extends Component {
    static navigationOptions = {
        title: 'AccountScreen',
    };

    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Account Screen</Text></View>
        );
    }
}
