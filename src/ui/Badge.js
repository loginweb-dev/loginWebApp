import React from 'react';
import { View, Text } from 'react-native';

const Badge = props => {
  return (
    <View style={{ backgroundColor: props.color ? props.color : 'black', paddingLeft: 10, paddingRight: 10, borderRadius: 10}}>
        <Text style={{ color: props.textColor ? props.textColor : 'white', fontSize: props.size ? parseInt(props.size) : 15 }}>{props.children}</Text>
    </View>
  );
}

export default  Badge