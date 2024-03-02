import React, {useCallback, useState} from 'react';
import {Button, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const handleCount = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      <Pressable 
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={handleCount}
        onLongPress={() => setCounter(0)}
      >
        <Text style={{
            color: Platform.OS === 'android' ? 'white' : '#4746AB'
        }}> Incrementar </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
  button: {
    backgroundColor: Platform.OS === 'android'? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746ab' : 'white'
  }
});
