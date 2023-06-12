import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Centered Title</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Text label</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5F7'
  },
  header: {
    backgroundColor: '#DFEDF4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  headerText: {
    color: '#376D89',
    fontFamily: 'Lato',
    fontSize: 24
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodyText: {
    color: '#376D89',
    fontFamily: 'Lato',
    fontSize: 18
  },
  footer: {
    backgroundColor: '#DFEDF4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  footerText: {
    color: '#376D89',
    fontFamily: 'Lato',
    fontSize: 18
  }
});
export default App;