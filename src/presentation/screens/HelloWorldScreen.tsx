import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hola Mundo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20
    } 
    
})