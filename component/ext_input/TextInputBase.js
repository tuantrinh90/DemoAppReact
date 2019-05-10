import {View, Image, TextInput, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TextInputBase extends Component {
    render() {
        const {icon, text} = this.props
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={icon} resizeMode='contain'/>
                <TextInput placeholder={text}/>
            </View>

        );
    }
};


TextInputBase.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
}

TextInputBase.defaultProps = {
    icon: '',
    text: ''
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
        borderColor: '#19A397',
        borderWidth: 1,
    },

    image: {
        margin: 20,
        height: 20,
    },

    textInput: {
        flex: 1,
        marginLeft: 5
    },
});
