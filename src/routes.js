import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

import Main from './pages/Main'
import Beer from './pages/Beer'

export default function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >

        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='Beer' component={Beer}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}