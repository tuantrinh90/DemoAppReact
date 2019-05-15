import React, {Component} from 'react';

import {StatusBar} from 'react-native';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import HomeScreen from "./HomeScreen";
import AccountScreen from "./AccountScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const TabNavigator = createBottomTabNavigator({
        // Splash: SplashScreen,
        Home: HomeScreen,
        Account: AccountScreen,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Account') {
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


const AppContainer = createAppContainer(TabNavigator);

export default class MainAppScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        StatusBar.setHidden(false);
    }

    render() {
        return <AppContainer/>;
    }
}
