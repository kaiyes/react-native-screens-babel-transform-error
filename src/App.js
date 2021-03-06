import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native-web'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Home({ navigation: { navigate } }) {
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigate('About')}>
        <Text style={styles.buttonText}>Home page</Text>
      </TouchableOpacity>
    </View>
  )
}

function About({ navigation: { navigate } }) {
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
        <Text style={styles.buttonText}>About Page</Text>
      </TouchableOpacity>
    </View>
  )
}

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'seagreen'
  },
  button: {
    backgroundColor: 'gold',
    borderRadius: 5,
    width: 200,
    marginVertical: 10
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 15,
    fontWeight: '400'
  }
})
