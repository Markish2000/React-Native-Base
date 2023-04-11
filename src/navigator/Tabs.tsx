import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {Tab3Screen} from '../screens/Tab3Screen';
import {colors} from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
        borderTopWidth: 0,
        elevation: 0,
      }}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {borderTopColor: colors.primary},
      }}>
      <Tab.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="Tab3Screen"
        options={{title: 'Stack'}}
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
};
