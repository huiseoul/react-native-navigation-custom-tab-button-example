import React, { Component } from "react";
import {
  Dimensions,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;
const NUMBER_OF_TABS = 3;
const BUTTON_WIDTH = DEVICE_WIDTH / NUMBER_OF_TABS;

export default class CustomButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.alert}>
          <Text style={styles.welcome}>Button</Text>
        </TouchableOpacity>
      </View>
    );
  }

  alert = () => {
    Alert.alert("Hello");
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: BUTTON_WIDTH,
    height: 60,
    position: "absolute",
    left: (DEVICE_WIDTH - BUTTON_WIDTH) / 2,
    bottom: 0
  },
  welcome: {
    color: "white",
    textAlign: "center"
  }
});
