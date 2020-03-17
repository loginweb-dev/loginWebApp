import * as React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

function Index({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {AsyncStorage.setItem('isLoggedIn', '0');navigation.navigate('Details')}}
      />
    </View>
  );
}

export default Index;
