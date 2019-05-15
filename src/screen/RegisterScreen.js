import React, {Component} from 'react';
import {Text, Card, Button} from 'native-base';
//import {TouchableOpacity, FlatList, View, TextInput, ImageBackground} from 'react-native';
import {StyleSheet, View, ImageBackground, TouchableOpacity, AsyncStorage} from 'react-native';
import TextInputBase from '../component/ext_input/TextInputBase.js';
// import {Button, Text} from 'native-base';
import * as Icons from '../images';
import * as Dimens from '../config/dimens.js';
import * as StringUtils from '../config/string.js';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            myData: [{
                name: 'tuan', age: 30
            }, {name: 'tung', age: 10},
                {name: 'hung', age: 20},
                {name: 'hai', age: 23}, {
                    name: 'long', age: 45
                }, {name: 'thai', age: 67}],

            // value: '',

            email: '', password: ''
        }
    }

    clearItem = (index) => {
        let data = [...this.state.myData]
        data.splice(index, 1)
        this.setState({myData: data})

        console.log("122222::", data)
    };

    getValue = (text) => {
        console.log("12333333", text)
        this.setState({value: text})
    }

    renderItem = (item) => {
        return <Card style={{padding: 20, marginRight: 20, marginLeft: 20}}>
            <Text>Ten: {item.item.name}</Text>
            <Text>Tuoi: {item.item.age}</Text>
            {/**/}
            {/*<TouchableOpacity style={{position: 'absolute', top: 5, right: 5}}*/}
            {/*                  onPress={(index) => this.clearItem(index)}>*/}
            {/*    <Text>X</Text>*/}
            {/*</TouchableOpacity>*/}
        </Card>
    };

    renderView = (data) => {
        return <View>
            <Text>Ten: {data.item.name}</Text>
            <Text>Tuoi: {data.item.age}</Text>
        </View>
    };

    clickItem(rowData) {
        //this.props.navigation.navigate('Register', {ClickItemHolder: rowData});
    }

    directLogin = () => {
        this.props.navigation.navigate('Login')
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('email', this.state.email);
            await AsyncStorage.setItem('pass', this.state.password);
        } catch (error) {
            // Error saving data
        }
    };

    render() {
        const {email, password} = this.state;

        return (
            <ImageBackground source={Icons.ic_bg} style={styles.container}>
                <View>
                    <View style={{alignSelf: 'flex-start'}}>
                        <Text style={styles.lbText}>{StringUtils.signUp}</Text>
                        <Text style={[styles.styleWelcome, {
                            color: '#333333',
                            marginLeft: 40,
                            fontWeight: 'normal'
                        }]}>{StringUtils.emailAndPassword}</Text>
                    </View>

                    <View>
                        <View style={{marginTop: Dimens.TOP_DIMEN, marginRight: 40, marginLeft: 40}}><TextInputBase
                            icon={Icons.ic_mail} text={StringUtils.email} etValue={email}
                            textChange={(email) => {
                                this.setState({email})
                            }}/></View>
                        <View style={{marginTop: Dimens.TOP_DIMEN, marginRight: 40, marginLeft: 40}}><TextInputBase
                            icon={Icons.ic_lock} text={StringUtils.password} visible={true} etValue={password}
                            textChange={(password) => {
                                this.setState({password})
                            }}/></View>
                        <Button block success rounded onPress={() => {
                            this._storeData()
                            this.directLogin()
                        }}
                                style={[styles.styleBtn, {marginRight: 40, marginLeft: 40}]}><Text
                            style={{textTransform: 'capitalize'}}>{StringUtils.create}</Text></Button>
                    </View>

                </View>

                <View style={[styles.bottom, {alignSelf: 'center'}]}><TouchableOpacity onPress={() => {
                }}><Text style={styles.text}>{StringUtils.backToLogin}</Text></TouchableOpacity></View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        //alignItems: 'center',
        justifyContent: 'center'
    },

    styleForm: {
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

    styleWelcome: {
        fontWeight: 'normal',
        fontSize: 14
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
        marginBottom: 36,
    },

    lbText: {
        color: '#333333',
        marginLeft: 40,
        fontSize: 20,
        fontWeight: 'bold'
    },
});

