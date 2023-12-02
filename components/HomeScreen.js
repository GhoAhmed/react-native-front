import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from './NavBar';
import Footer from './Footer';
import MainContent from './MainContent';


export default function Home() {
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <MainContent />

      
      {/* Footer */}
      <Footer />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
