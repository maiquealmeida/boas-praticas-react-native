import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './style';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


export function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>You are in Home Screen!</Text>
      <Button onPress={() => navigation.push('FormWithState')}>Form With State</Button>
      <Button onPress={() => navigation.push('FormWithReactHookForm')}>Form with React Hook Form</Button>
    </View>
  );

}
