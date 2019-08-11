/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstPageContainer from './src/containers/FirstPageContainer';
import LanguageModalContainer from './src/containers/LanguageSettingContainer';
import SecondScreenContainer from './src/containers/SecondScreenContainer';
import configureStore from './configStore';
import { Provider } from 'react-redux';

const MainNavigator = createStackNavigator({
  FirstPageContainer: { screen: FirstPageContainer },
  LanguageModalContainer: { screen: LanguageModalContainer },
  SecondScreenContainer:{screen:SecondScreenContainer},
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
