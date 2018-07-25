import { Navigation } from "react-native-navigation";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.close}>
          <Text style={styles.welcome}>App</Text>
        </TouchableOpacity>
      </View>
    );
  }

  close = () => {
    Navigation.dismissModal(this.props.componentId);

    Navigation.showOverlay({
      component: {
        name: "example.CustomButton",
        options: {
          overlay: {
            interceptTouchOutside: false
          }
        }
      }
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
