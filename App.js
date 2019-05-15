import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native';
import TextInputBase from './src/component/ext_input/TextInputBase';
import {Button, Text} from 'native-base';
import * as Icons from './src/images';
import * as Dimens from './src/config/dimens';
import * as StringUtils from './src/config/string';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
// type Props = {};
import LoginScreen from './src/screen/LoginScreen';
import SplashScreen from './src/screen/SplashScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import HomeScreen from "./src/screen/HomeScreen";

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

        Home: {
            screen: HomeScreen,
        }
    },
    {
        initialRouteName: 'Splash',
    }
);
const TabNavigator = createBottomTabNavigator({
        // Splash: SplashScreen,
        Register: RegisterScreen,
        Login: LoginScreen,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                // if (routeName === 'Splash') {
                //     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                //     // Sometimes we want to add badges to some icons.
                //     // You can check the implementation below.
                //     //IconComponent = HomeIconWithBadge;
                // } else
                if (routeName === 'Register') {
                    iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Login') {
                    iconName = `md-settings`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });


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