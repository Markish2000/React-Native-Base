import {Platform, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {Tab3Screen} from '../screens/Tab3Screen';

import {colors} from '../theme/appTheme';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigator} from './StackNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {borderTopColor: colors.primary},
        tabBarLabelStyle: {fontSize: 15},
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            //
            case 'Tab2Screen':
              iconName = 'basketball';
              break;

            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }

          return <Icon name={iconName} size={25} color="#900" />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
        borderTopWidth: 0,
        elevation: 0,
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {borderTopColor: colors.primary},
        tabBarLabelStyle: {fontSize: 15},
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;

            case 'Tab2Screen':
              iconName = 'basketball';
              break;

            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }

          return <Icon name={iconName} size={25} color="#900" />;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
