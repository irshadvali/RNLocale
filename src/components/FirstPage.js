import * as React from 'react';
import { Text, View, StyleSheet, Button, AsyncStorage } from 'react-native';
import moment from "moment"
import { Card } from 'react-native-paper';
import LanguageModalContainer from "./../containers/LanguageModalContainer"

import i18n from 'i18n-js';
import { multiLangText } from "./../utils/LocaleData"


export default class FirstPage extends React.Component {
    static navigationOptions = {
        //To hide the NavigationBar from current Screen
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            selectLanguage: multiLangText.english,
        }
        this.setLanguage();
    }

    setLanguage = async () => {
        let lng = await AsyncStorage.getItem("LANGUAGE_KEY");
        this.setState({
            selectLanguage: lng || multiLangText.english,
        })
    }

    handleEnglish = async (val) => {
        await AsyncStorage.setItem("LANGUAGE_KEY", multiLangText.english);
        this.setState({
            selectLanguage: multiLangText.english,
        });
    };
    handleFrench = async (val) => {
        await AsyncStorage.setItem("LANGUAGE_KEY", multiLangText.french);
        this.setState({
            selectLanguage: multiLangText.french
        });
    };
    handleHindi = async (val) => {
        await AsyncStorage.setItem("LANGUAGE_KEY", multiLangText.hindi);
        this.setState({
            selectLanguage: multiLangText.hindi,
        });
    };
    handleArbic = async (val) => {
        await AsyncStorage.setItem("LANGUAGE_KEY", multiLangText.arabic);
        this.setState({
            selectLanguage: multiLangText.arabic,
        });
    };
    render() {
        i18n.locale = this.state.selectLanguage;
        return (
            <View style={styles.container}>
                <Card style={{ padding: 20 }}>
                    <Text>
                        {i18n.t('welcome')},  {i18n.t('name')}
                    </Text>
                    <Text>{i18n.t('time', { someValue: moment().format('MMMM Do YYYY, h:mm:ss a') })}</Text>
                </Card>
                <View style={{ margin: 5 }} />
                <Button
                    title="English"
                    color="#1565c0"
                    onPress={() => this.handleEnglish(0)}
                />
                <View style={{ margin: 5 }} />
                <Button
                    title="French"
                    color="#00897b"
                    onPress={() => this.handleFrench(1)}
                />
                <View style={{ margin: 5 }} />
                <Button
                    title="Hindi"
                    color="#5e35b1"
                    onPress={() => this.handleHindi(2)}
                />
                <View style={{ margin: 5 }} />
                <Button
                    title="Arbic"
                    color="#00acc1"
                    onPress={() => this.handleArbic(3)}
                />
                <LanguageModalContainer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: "#f0f0f0",
        padding: 8,
    },
});