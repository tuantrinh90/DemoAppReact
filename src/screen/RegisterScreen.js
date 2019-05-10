import React, {Component} from 'react';
import {Button, Text} from 'native-base';
import {TouchableOpacity} from "react-native";

export default class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            backgroundColor: '#3fb4f4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text>Register Screen</Text>
            </TouchableOpacity>
        );
    }
}
