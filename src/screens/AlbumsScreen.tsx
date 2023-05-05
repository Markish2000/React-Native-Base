import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {
    logOut,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {isLoggedIn && <Button title="LogOut" onPress={logOut} />}
    </View>
  );
};
