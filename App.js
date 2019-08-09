import React, { Component } from "react";
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstPage from "./src/components/FirstPage";
import configureStore from "./configStore";
import { Provider } from "react-redux";


const MainNavigator = createStackNavigator({
  FirstPage: { screen: FirstPage },

});

// const App = createAppContainer(MainNavigator);
const AppContainer = createAppContainer(MainNavigator);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <View style={{ flex: 1 }}>

          <AppContainer />
        </View>
      </Provider>
    );
  }
}
export default App;
