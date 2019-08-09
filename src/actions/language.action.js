
export const REQUESTING = "requesting";
export const SUCCESS = "success";
export const ERROR = "error";

export const CHANGE_LANGUAGE_SUCCESS = "CHANGE_LANGUAGE_SUCCESS"
export const CHANGE_LANGUAGE_REQUEST = "CHANGE_LANGUAGE_REQUEST"
export const CHANGE_LANGUAGE_FAILURE = "CHANGE_LANGUAGE_FAILURE"

export function changeLanguageRequest() {
    return {
        type: CHANGE_LANGUAGE_REQUEST,
        status: REQUESTING
    };
}

export function changeLanguageSuccess(languageName) {
    return {
        type: CHANGE_LANGUAGE_SUCCESS,
        status: SUCCESS,
        languageName
    };
}

export function changeLanguageFailure(errorMsg) {
    return {
        type: CHANGE_LANGUAGE_FAILURE,
        error: errorMsg
    };
}

export function changeLanguage(language) {
    return async (dispatch, getState, api) => {
        dispatch(changeLanguageRequest());
        try {

            dispatch(changeLanguageSuccess(language));
        } catch (e) {
            dispatch(changeLanguageFailure(e.message));
        }
    };
};