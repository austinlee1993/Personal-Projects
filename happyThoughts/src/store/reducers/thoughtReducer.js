const initState = {
    
}

const thoughtReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_THOUGHT':
          console.log('create thought', action.thought);
          console.log('hitting');
          return state;
        case 'CREATE_THOUGHT_ERROR':
          console.log('create thought error', action.err);
          return state;
        default:
          return state;
      }
    
};

export default thoughtReducer;