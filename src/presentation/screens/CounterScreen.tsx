import React, { useCallback, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export const CounterScreen = () => {
  const [ counter, setCounter ] = useState(0);

  const handleCount = useCallback(() => {
        setCounter((prev) => prev+1)
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{counter}</Text>
        <Button
            onPress={handleCount}
            title='+1'
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    }
})
