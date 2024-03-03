import React, {useState} from 'react';
import { Text, View} from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';

export const CounterM3Screen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>
      <FAB
        label='+1'
        style={globalStyles.fab}
        onPress={() => setCounter((prev) => prev+1)}
        onLongPress={() => setCounter(0)}
      />
    </View>
  );
};

