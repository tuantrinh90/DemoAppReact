import {Text, Image} from 'react-native';
import React, {Component} from 'react';
import {Button} from 'native-base';
import PropTypes from 'prop-types';

export default class ExtButton extends Component {
    render() {
        const {styles, text} = this.props
        return (
            <Button>
                <Text style={{styles}}>{text}</Text>
            </Button>

        );
    }
};


ExtButton.propTypes = {
    styles: PropTypes.string,
    text: PropTypes.string
}

ExtButton.defaultProps = {
    styles: '',
    text: ''
}
