import * as React from 'react';
import { Text, View, Button, TouchableOpacity,StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/aab3f7ea62c83e31318d25e661823773' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.playSound}>
        <Text
          style={styles.buttonText}>
          Press Me
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});
export default SoundButton