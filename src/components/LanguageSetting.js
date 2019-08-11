/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, { Component } from "react";
import { AsyncStorage, View, Button } from "react-native";
import PropTypes from "prop-types";
import i18n from "i18n-js";
import { multiLangText } from "./../utils/LocaleData";
class LanguageSetting extends Component {
  state = {
    modalVisible: false
  };

  changeLanguage = async val => {
    if (val === 1) {
      this.props.changeLanguage(multiLangText.english);
      await AsyncStorage.setItem("LANGUAGE_KEY", multiLangText.english);
      this.setState({
        selectLanguage: multiLangText.english
      });
    }
    if (val === 2) {
      this.props.changeLanguage(multiLangText.french);
      await AsyncStorage.setItem("LANGUAGE_KEY", multiLangText.french);
      this.setState({
        selectLanguage: multiLangText.french
      });
    }
    if (val === 3) {
      this.props.changeLanguage(multiLangText.hindi);
      await AsyncStorage.setItem("LANGUAGE_KEY", multiLangText.hindi);
      this.setState({
        selectLanguage: multiLangText.hindi
      });
    }
    if (val === 4) {
      this.props.changeLanguage(multiLangText.arabic);
      await AsyncStorage.setItem("LANGUAGE_KEY", multiLangText.arabic);
      this.setState({
        selectLanguage: multiLangText.arabic
      });
    }
  };

  render() {
    i18n.locale = this.state.selectLanguage;
    return (
      <View style={{ margin: 20 }}>
        <Button
          title="English"
          color="#1565c0"
          onPress={() => this.changeLanguage(1)}
        />
        <View style={{ margin: 5 }} />
        <Button
          title="French"
          color="#00897b"
          onPress={() => this.changeLanguage(2)}
        />
        <View style={{ margin: 5 }} />
        <Button
          title="Hindi"
          color="#5e35b1"
          onPress={() => this.changeLanguage(3)}
        />
        <View style={{ margin: 5 }} />
        <Button
          title="Arbic"
          color="#00acc1"
          onPress={() => this.changeLanguage(4)}
        />
      </View>
    );
  }
}

export default LanguageSetting;

LanguageSetting.propTypes = {
  navigation: PropTypes.object,
  changeLanguage: PropTypes.func
};

LanguageSetting.defaultProps = {};
