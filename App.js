import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native';
import TextInputBase from './component/ext_input/TextInputBase';
import {Button, Text} from 'native-base';
import * as Icons from './src/images';
import * as Dimens from './src/config/dimens';
import * as StringUtils from './src/config/string';
import {createStackNavigator, createAppContainer} from "react-navigation";
// type Props = {};
import LoginScreen from './src/screen/LoginScreen';
import SplashScreen from './src/screen/SplashScreen';
import RegisterScreen from './src/screen/RegisterScreen';

const appNavigator = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen,
        },
        Register: {
            screen: RegisterScreen,
        },
        Login: {
            screen: LoginScreen,
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


// return (
//     <ImageBackground source={Icons.ic_bg} style={styles.container}>
//         <View>
//             <View style={{alignItems: 'flex-start'}}>
//                 <Text style={styles.lbText}>{StringUtils.signUp}</Text>
//                 <Text style={[styles.styleEmailandPass, {
//                     color: '#333333',
//                     marginLeft: 40,
//                     fontSize: 20,
//                     fontWeight: 'normal'
//                 }]}>{StringUtils.emailAndPassword}</Text>
//             </View>
//             <View style={{marginTop: Dimens.TOP_DIMEN}}><TextInputBase icon={Icons.ic_mail}
//                                                                        text={StringUtils.email}/></View>
//             <View style={{marginTop: Dimens.TOP_DIMEN}}><TextInputBase icon={Icons.ic_lock}
//                                                                        text={StringUtils.password}/></View>
//             <Button block success rounded onPress={this.setText} style={styles.styleBtn}>
//                 <Text style={{textTransform: 'capitalize'}}>{StringUtils.create}</Text>
//             </Button>
//         </View>
//
//         <View style={styles.bottom}>
//             <TouchableOpacity onPress={() => {
//             }}>
//                 <Text style={styles.text}>{StringUtils.backToLogin}</Text>
//             </TouchableOpacity>
//         </View>
//
//     </ImageBackground>
// );