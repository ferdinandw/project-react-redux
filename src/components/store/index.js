const initialState = {
    nilaiAwal:0
}

export default (state = initialState, action = {}) => {
    switch(action.type){
        case TAMBAH:
            return Object.assign({}, state, { nilaiAwal: state.nilaiAwal + 1})
        case KURANG:
            return Object.assign({}, state, {nilaiAwal: state.nilaiAwal -1})
        case RESET:
            return Object.assign({}, state, {nilaiAwal: state.nilaiAwal = 0})
        default:
            return state;
    }
}

const TAMBAH = `TAMBAH`;
const KURANG = `KURANG`;
const RESET = `RESET`;

export {
    TAMBAH,
    KURANG,
    RESET
}