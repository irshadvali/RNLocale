import React, { Component } from "react";
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstPage from "./src/FirstPage"


const MainNavigator = createStackNavigator({
  FirstPage: { screen: FirstPage },

});

// const App = createAppContainer(MainNavigator);
const AppContainer = createAppContainer(MainNavigator);
export default class App extends Component {

  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <View style={{ height: Constants.statusBarHeight, backgroundColor: colors.statusbarColor }} /> */}
        <AppContainer />
      </View>
    );
  }
}

