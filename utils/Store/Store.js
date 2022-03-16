import { createContext, useReducer } from 'react';

export const Store = createContext();
const initailState = {
	alert: null,
};

function reducer(state, action) {
	switch (action.type.task) {
		case 'setAlert':
			return { ...state, alert: action.type.alert };
		default:
			return state;
	}
}

export const StoreProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initailState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
