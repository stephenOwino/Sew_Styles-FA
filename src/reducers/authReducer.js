import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
} from "../actions/authActions";

const initialState = {
	token: localStorage.getItem("token") || null,
	loading: false,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_REQUEST:
		case LOGIN_REQUEST:
			return { ...state, loading: true, error: null };
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			return { ...state, loading: false, token: action.payload, error: null };
		case REGISTER_FAILURE:
		case LOGIN_FAILURE:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default authReducer;
