import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Update"
        onPress={() => navigation.navigate('Update')}
      />
    </View>
  );
}

export default Details;
