import * as React from 'react';
import {
    View,
    Button,
    ImageBackground,
    TextInput,
    SafeAreaView,
    ScrollView
} from 'react-native';

import Badge from "../../../ui/Badge";
import { Config } from '../../../config/config';

function Login({ navigation }) {
  return (
    <SafeAreaView>
        <View>
            <ImageBackground source={ require('../../../assets/images/background.jpeg') } style={{width: '100%', height: 200}}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <View style={{ marginTop: 50 }}>
                        <Badge color="black" size="40" >Login</Badge>
                    </View>
                </View>
            </ImageBackground>
            <ScrollView>
                <View style={{ margin: 30 }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
                        placeholder="User"
                    />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Login"
                            onPress={() => navigation.navigate('Index')}
                        />
                    </View>
                    
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  );
}

export default Login;