import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {Text} from 'react-native';
import ProfileScreen from '../screen/ProfileScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator;

const StartScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'green' : 'grey',
                fontSize: 12,
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              type="material-community"
              color={focused ? 'purple' : 'grey'}
              size={24}
            />
          ),
          tabBarLabelPosition: 'below-icon',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'lavender',
          },
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
