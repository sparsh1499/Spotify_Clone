export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:'BQCTB0eFWKvS40JR9G7Ysn56Ct1laQw8zJG7_wlzawPnPJMGyATsD9YeQi7WPj-AZfjIF329je6AaeFCzY2vBtDcDWWXpbLXyrGE55d4OE-BPbmBq79dQdVmMtVcn670C47Ybfa6mOn3XX8SBj6luC0_2Nf-90jiv-eh9IOC-h83fbeDc5pv'
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
}

export default reducer;