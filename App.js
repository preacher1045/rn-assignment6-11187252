import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './screens/index';
import CheckOut from './screens/checkout'
import { CartProvider } from './components/cartContext';


const Stack = createStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen name="Index" component={Index} options={{headerShown: false}}/>
          <Stack.Screen name="CheckOut" component={CheckOut} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
