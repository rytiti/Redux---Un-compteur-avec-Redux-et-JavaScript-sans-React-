const counterRender = document.getElementById('counter-render');
const incrementButton = document.getElementById('button-increment');
const decrementButton = document.getElementById('button-decrement');

const addTen = document.getElementById('button-increment-by-ten');
const removeTen = document.getElementById('button-decrement-by-ten');
const resetButton = document.getElementById('button-reset-state');


// ACTIONS
const incrementAction = {
	type: "INCREMENT"
}

const decrementAction = {
	type: "DECREMENT"
}

const incrementByTen = {
  type: "INCREMENT_BY_TEN"
}

const decrementByTen = {
  type: "DECREMENT_BY_TEN"
}

const reset = {
  type: "RESET"
}

// REDUCERS
const initialState = 0;
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
    case 'INCREMENT_BY_TEN':
      return state + 10;
    case 'DECREMENT_BY_TEN':
      return state - 10;
    case 'RESET':
      return 0;
		default:
			return state;
	}
}

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

const render = () => counterRender.innerText = store.getState();

render();
store.subscribe(render);

incrementButton.addEventListener('click', () =>
	store.dispatch(incrementAction)
);
decrementButton.addEventListener('click', () =>
	store.dispatch(decrementAction)
);

addTen.addEventListener('click', () => {
  store.dispatch(incrementByTen)
})

removeTen.addEventListener('click', () => {
  store.dispatch(decrementByTen)
})

resetButton.addEventListener('click', () => {
  store.dispatch(reset)
})

