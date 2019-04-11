export default (state = [], action) => {

  switch(action.type){
    case 'FETCH_POSTS':
      console.log("POST REDUCES")
      return action.payload;
    default:
      return state;
  }
}; 