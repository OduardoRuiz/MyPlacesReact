export function placeReducer(state, action) {
    switch (action.type) {
        case 'CHECK_PLACE':
            return {...state, PlaceCheck: true }
            case 'NOT_CHECK_PLACE':
            return {...state, PlaceCheck: false }

        default:
            return state;
    }
}