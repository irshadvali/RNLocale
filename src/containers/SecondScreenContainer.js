/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { connect } from "react-redux";
import SecondScreen from '../components/SecondScreen';
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

const SecondScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondScreen);
export default SecondScreenContainer;
