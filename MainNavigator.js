import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ScreenA" 
        component={ScreenA} 
        options={({ navigation }) => ({
          title: 'Screen A',
          headerLeft: () => (
            <Button title="Back" onPress={() => navigation.navigate('ScreenB')} />
          ),
        })}
      />
      <Stack.Screen 
        name="ScreenB" 
        component={ScreenB} 
        options={({ navigation }) => ({
          title: 'Screen B',
          headerLeft: () => (
            <Button title="Back" onPress={() => navigation.navigate('ScreenA')} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
