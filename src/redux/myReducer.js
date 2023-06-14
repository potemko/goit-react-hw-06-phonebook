const defaultState = {
  cash: 0,
  customes: [],
};

const USER_ADD = 'USER';

export const myReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER':
      return { ...state, customes: [...state.customes, action.payload] };
    case 'ADD':
      return { ...state, cash: state.cash + action.payload };
    case 'GET':
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

export const addNewUser = (payload) => ({
  type: USER_ADD, payload
});
