import React, {useCallback, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { PrimaryButton } from '../components';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      <PrimaryButton
        label='Incrementar'
        onPress={() => setCounter((prev: number) => prev+1)}
        onLongPress={() =>  setCounter(0)}
      />
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
  }
});
