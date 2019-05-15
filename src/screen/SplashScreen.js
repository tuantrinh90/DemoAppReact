import React, {Component} from 'react';
import {Text, Card,} from 'native-base';
import {StyleSheet, View, ImageBackground, StatusBar} from 'react-native';
import * as Icons from '../images';
import * as Dimens from '../config/dimens.js';

export default class SplashScreen extends Component {

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
        }
    }

    componentDidMount() {
        StatusBar.setHidden(true);
        setTimeout(() => {
            this.load();
        }, 2000);
    }

    load = () => {
        this.props.navigation.navigate("Register");
    };


    clearItem = (index) => {
        let data = [...this.state.myData]
        data.splice(index, 1)
        this.setState({myData: data})

        console.log("122222::", data)
    };


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
        this.props.navigation.navigate('Register', {ClickItemHolder: rowData});
    }

    render() {
        return (
            <ImageBackground source={Icons.ic_bg} style={styles.container}/>
        );
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

