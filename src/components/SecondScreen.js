/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Text, View, StyleSheet, Button, AsyncStorage, TouchableOpacity, Alert } from 'react-native';
import moment from 'moment';
import { Card } from 'react-native-paper';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';
import { multiLangText } from './../utils/LocaleData';

class SecondScreen extends React.Component {
	static navigationOptions = {
		//To hide the NavigationBar from current Screen
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			selectLanguage: multiLangText.english,
		};
		this.setLanguage();
	}

	setLanguage = async () => {
		let lng = await AsyncStorage.getItem('LANGUAGE_KEY');
		this.setState({
			selectLanguage: lng || multiLangText.english,
		});
		this.props.changeLanguage(lng || multiLangText.english);
	};
	goBack = () => {
		const { goBack } = this.props.navigation;
		goBack();
	};
	goToSetting = () => {
		const { navigate } = this.props.navigation;
		navigate({
			routeName: 'LanguageModalContainer',
			key: 'LanguageModalContainer',
		});
	};

	render() {
		i18n.locale = this.props.languageName || this.state.selectLanguage;
		return (
			<View style={styles.container}>
				<View style={{ height: 56, width: '100%', backgroundColor: '#00695C', justifyContent: 'center',alignItems: 'flex-end'  }}>
					<TouchableOpacity onPress={() => this.goToSetting()}>
						<View
							style={{
								justifyContent: 'center',
								backgroundColor: '#004D40',
								paddingHorizontal: 20,
								paddingVertical: 10,
								alignItems: 'center',
								alignSelf: 'center',
								marginHorizontal: 10,
								borderRadius: 3,
							}}
						>
							<Text style={{ color: '#ffffff' }}>Setting</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={{ padding: 20 }}>
					<Card style={{ padding: 20, marginBottom: 20 }}>
						<Text>
							{i18n.t('welcome')}, {i18n.t('name')}
						</Text>
						<Text>
							{i18n.t('time', {
								someValue: moment().format('MMMM Do YYYY, h:mm:ss a'),
							})}
						</Text>
						<Text>
							{i18n.t('city')}, {i18n.t('state')}
						</Text>
						<Text>{i18n.t('pincode')}</Text>
					</Card>
					<Button title="Go Back" color="#00acc1" onPress={() => this.goBack()} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
	},
});
export default SecondScreen;
SecondScreen.propTypes = {
	navigation: PropTypes.object,
	languageName: PropTypes.string,
};

SecondScreen.defaultProps = {};
