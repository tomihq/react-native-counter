import React, {useState} from 'react';
import { Text, View} from 'react-native';
import { globalStyles } from '../theme/global.styles';

export const CounterM3Screen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>
    </View>
  );
};

