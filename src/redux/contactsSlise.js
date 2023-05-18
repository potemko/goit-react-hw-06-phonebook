const defaultState = {
    filter: '',
    contacts: [],
    number: '',
    name: '',
  };
  
  export const contactSlise = (state = defaultState, action) => {
    switch (action.type) {
      case 'FILTER':
        return { ...state, filter: action.payload };
      case 'CONTACTS':
        return { ...state, contacts: action.payload };
      case 'NUMBER':
        return { ...state, number: action.payload };
      case 'NAME':
        return { ...state, name: action.payload };
      default:
        return state;
    }
  };
  
