import React, {Component} from 'react';
import {Button, Text, Card} from 'native-base';
import {TouchableOpacity, FlatList, View} from 'react-native';

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
                }, {name: 'thai', age: 67}]
        }
    }

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

            <TouchableOpacity style={{position: 'absolute', top: 5, right: 5}}
                              onPress={(index) => this.clearItem(index)}>
                <Text>X</Text>
            </TouchableOpacity>
        </Card>
    };

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text>Splash Screen</Text>
                </TouchableOpacity>

                <FlatList
                    data={this.state.myData}
                    renderItem={(item) => this.renderItem(item)}
                />
            </View>

        );
    }
}
