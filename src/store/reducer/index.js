export const initialState ={
    loading = true,
    movie = [],
    errorMessage: null
};

export const reducer = (state, action) => {
    switch (action.type){
        case "SEARCH_MOVIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_MOVIES_SUCCESS":
            return {
                ...state,
                loading: false,
                movies: action.playload
            };
        case "SEARCH_MOVIE_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};