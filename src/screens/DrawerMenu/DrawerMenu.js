import * as React from 'react';
import { View, TouchableOpacity, ImageBackground, Image } from 'react-native';

import Badge from "../../ui/Badge";
import MenuDrawerOption from "../../ui/MenuDrawerOption";

import { Config } from '../../config/config';

function Index() {
  return (
    <View>
        <ImageBackground source={ require('../../assets/images/background.jpeg') } style={{width: '100%', height: 170}}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Image
                    style={{width: 80, height: 80, borderColor: 'white',
                    borderStyle: 'dotted',
                    borderWidth: 3,
                    borderRadius: 40,}}
                    source={require('../../assets/images/user.png')}
                />
                <View style={{ marginTop: 10 }}>
                    <Badge color={ Config.color.primary } size="20" >Loginweb</Badge>
                </View>
            </View>
        </ImageBackground>
        <View style={{ marginTop: 10 }}>
            <TouchableOpacity>
                <MenuDrawerOption icon="home" text="Inicio" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MenuDrawerOption icon="list" text="Opción 1" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MenuDrawerOption icon="list" text="Opción 2" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MenuDrawerOption icon="list" text="Opción 3" />
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default Index;
