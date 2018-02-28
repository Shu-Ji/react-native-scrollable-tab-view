import React from 'react';
import { TouchableOpacity } from 'react-native';


export default Button = (props) => {
    return (
        <TouchableOpacity delayPressIn={0} {...props}>
            {props.children}
        </TouchableOpacity>
    );
};
