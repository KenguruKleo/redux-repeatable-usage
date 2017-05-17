
export function getReusableReducer( reducer, reducerId ){
    return ( state, action ) => {
        if( action.reducerId === reducerId || typeof state === 'undefined' ){
            return reducer( state, action );
        } else {
            return state;
        }
    };
}