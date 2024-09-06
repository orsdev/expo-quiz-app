import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/Home';
import OpenEndedScreen from './screens/OpenEnded';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'white'
        }
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: ''
          }}
        />
        <Stack.Screen
          name="OpenEnded"
          component={OpenEndedScreen}
          options={{
            headerTitle: ''
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Default to rendering your app
let AppEntryPoint = App;

// Render Storybook if storybookEnabled is true
if ((Constants.expoConfig as any)?.extra.storybookEnabled == true) {
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint