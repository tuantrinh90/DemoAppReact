import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import * as Dimens from './src/config/dimens';
import {createStackNavigator, createAppContainer} from "react-navigation";
import LoginScreen from './src/screen/LoginScreen';
import SplashScreen from './src/screen/SplashScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import MainAppScreen from "./src/screen/MainAppScreen";

const appNavigator = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null,
            },
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null,
            },
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            },
        },

        MainApp: {
            screen: MainAppScreen,
        }
    },
    {
        initialRouteName: 'Splash',
    }
);

const AppContainer = createAppContainer(appNavigator);

export default class App extends Component {

    render() {
        return <AppContainer/>;
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    styleBtn: {
        backgroundColor: '#19A397',
        marginTop: Dimens.TOP_DIMEN,
        height: 40
    },

    styleEmailandPass: {
        fontWeight: 'normal',
        fontSize: 16
    },

    signup: {
        fontSize: 20,
        margin: 10,
        marginTop: 150,
        marginLeft: 40,
        color: '#333333',
        fontWeight: 'bold'
    },

    text: {
        fontSize: 18,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: '#19A397',
        borderWidth: 1,
        color: '#19A397',
        paddingLeft: 20,
        paddingRight: 20
    },

    bottom: {
        position: 'absolute',
        bottom: 0,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },

    lbText: {
        color: '#333333',
        marginLeft: 40,
        fontSize: 20,
        fontWeight: 'bold'
    },
});