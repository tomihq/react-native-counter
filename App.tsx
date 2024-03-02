import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HelloWorldScreen name='Tomás Agustín HQ'/>
    </SafeAreaView>
  )
}

export default App