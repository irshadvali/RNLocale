/* eslint-disable prettier/prettier */
import * as languageAction from '../actions/language.action';
const language = (
    state = {
        languageName: '',
        languageLoading: false,
        languageError: null,
        languageStatus: '',
    },
    action
) => {
    switch (action.type) {
        //Reducers for get language
        case languageAction.CHANGE_LANGUAGE_REQUEST:
            return Object.assign({}, state, {
                languageLoading: true,
                languageStatus: action.status,
            });
        case languageAction.CHANGE_LANGUAGE_SUCCESS: {
            console.log('action.languageName====>', action.languageName);
            return Object.assign({}, state, {
                languageName: action.languageName,
                languageLoading: false,
                languageStatus: action.status,
            });
        }
        case languageAction.CHANGE_LANGUAGE_FAILURE:
            return Object.assign({}, state, {
                languageError: action.error,
                languageLoading: false,
                languageStatus: action.status,
            });

        default:
            return state;
    }
};
export default language;
