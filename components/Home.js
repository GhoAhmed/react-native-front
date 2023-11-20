import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from './NavBar';


export default function Home() {
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Navbar</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Your main content goes here */}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: 'blue',
    padding: 10,
  },
  navbarText: {
    color: 'white',
    fontSize: 18,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'green',
    padding: 10,
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
});
