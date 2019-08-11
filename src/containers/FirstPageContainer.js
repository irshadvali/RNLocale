/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { connect } from "react-redux";
import FirstPage from '../components/FirstPage';
import { changeLanguage } from '../actions/language.action';

const mapStateToProps = state => {
  return {
    languageName: state.language.languageName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: languageName => {
      dispatch(changeLanguage(languageName));
    },
  };
};

const LanguageModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstPage);
export default LanguageModalContainer;
