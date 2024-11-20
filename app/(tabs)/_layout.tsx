import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      statusBarHidden: true,
    }}>
      <Stack.Screen name="index" />
    </Stack>
  )
}