import React from 'react'
import { SafeAreaView } from 'react-native'
import { CounterScreen } from './src/presentation/screens/CounterScreen'
import { PaperProvider } from 'react-native-paper'

const App = () => {
  return (
   <PaperProvider>
     <SafeAreaView style={{flex: 1}}>
      <CounterScreen/>
    </SafeAreaView>
   </PaperProvider>
  )
}

export default App