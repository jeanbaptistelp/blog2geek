export default (state = [], action) => {
    

    // on test la valeur
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;

        default : 
            return state;
    }
}