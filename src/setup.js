import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

class AppSetup extends React.Component {
  render(){
    return(
      <View style={styles.container} >
        <Text style={styles.texto}>App Reboot</Text>
      </View>
    );
  }
}
export default AppSetup;
