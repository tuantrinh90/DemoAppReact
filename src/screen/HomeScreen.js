import React, {Component} from 'react';
import {Text} from 'native-base';
import {View} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'HomeScreen',
    };

    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Home Screen</Text></View>
        );
    }
}
