import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const MenuDrawerOption = props => {
  return (
    <View style={{ width: '100%', flex: 1, flexDirection: 'row', marginLeft: 20, paddingTop: 10, paddingBottom:10 }}>
        <Icon name={props.icon} size={25} />
        <Text style={{ marginLeft: 20, fontSize: 20 }}>{props.text}</Text>
    </View>
  );
}

export default  MenuDrawerOption