import * as actionTypes from "./../types/types";

const initialState = {
    studentsInformation : [],
    language :'en'
}

const reducer = ( state = initialState , action ) => {

    switch (action.type) {
        case actionTypes.GETDATA:
            return{
                ...state,
                studentsInformation:action.studentsData
            };
    
        case actionTypes.ARABICLANGUAGE:
            return{
                ...state,
                language:action.language
            };

        case actionTypes.ENGLISHLANGUAGE:
            return{
                ...state,
                language:action.language
            };
            
        default:
            return{
                ...state
            }
    }
}

export default reducer;