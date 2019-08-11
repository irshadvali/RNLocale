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

class FirstPage extends React.Component {
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

	goToSetting = () => {
		const { navigate } = this.props.navigation;
		navigate({
			routeName: 'LanguageModalContainer',
			key: 'LanguageModalContainer',
		});
	};

	goToSecondScreen=()=>{
		const { navigate } = this.props.navigation;
		navigate({
			routeName: 'SecondScreenContainer',
			key: 'SecondScreenContainer',
		});
	}

	render() {
		i18n.locale = this.props.languageName || this.state.selectLanguage;
		return (
			<View style={styles.container}>
				<View style={{ height: 56, width: '100%', backgroundColor: '#C2185B', justifyContent: 'center',alignItems: 'flex-end'}}>
					<TouchableOpacity onPress={() => this.goToSetting()}>
						<View
							style={{
								justifyContent: 'center',
								backgroundColor: '#880E4F',
								paddingHorizontal: 20,
								paddingVertical: 10,
								alignItems: 'center',
								alignSelf: 'center',
								marginHorizontal: 10,
								borderRadius: 3,
							}}
						>
							<Text style={{ color: '#ffffff' }}>{i18n.t('lanuageText')}</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={{ padding: 20 }}>
					<Card style={{ padding: 20,marginBottom: 20}}>
						<Text>
							{i18n.t('welcome')}, {i18n.t('name')}
						</Text>
						<Text>
							{i18n.t('time', {
								someValue: moment().format('MMMM Do YYYY, h:mm:ss a'),
							})}
						</Text>
					</Card>

					<Button title="Go to next page" color="#00acc1" onPress={() => this.goToSecondScreen()} />
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
export default FirstPage;
FirstPage.propTypes = {
	navigation: PropTypes.object,
	languageName: PropTypes.string,
};

FirstPage.defaultProps = {};
