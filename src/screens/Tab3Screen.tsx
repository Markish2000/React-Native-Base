import {useEffect} from 'react';
import {View, Text} from 'react-native';

export const Tab3Screen = () => {
  useEffect(() => {
    console.log('Tab3Screen effect');
  }, []);

  return (
    <View>
      <Text>Tab3</Text>
    </View>
  );
};
