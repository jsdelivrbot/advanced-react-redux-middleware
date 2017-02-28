export default function({ dispatch }) {
  return next => action => {
		if(!action.payload || !action.payload.then){
			return next(action);
		}

		action.payload
		.then((response) => {
			const new_action = { ...action, payload: response.data };
			dispatch(new_action);
		});
	}
}

