/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { connect } from "react-redux";
import LanguageSetting from '../components/LanguageSetting';
import { changeLanguage } from '../actions/language.action';

const mapStateToProps = state => {
  return {
    languageName: state.language.languageName,
    languageLoading: state.language.languageLoading,
    languageError: state.language.languageError,
    languageStatus: state.language.languageStatus,
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
)(LanguageSetting);
export default LanguageModalContainer;

