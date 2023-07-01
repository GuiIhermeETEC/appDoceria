import React from 'react-native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import Box from './src/components/box'

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Box>
      </Box>
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BC8F8F',
    alignItems: 'center',
  },
});
