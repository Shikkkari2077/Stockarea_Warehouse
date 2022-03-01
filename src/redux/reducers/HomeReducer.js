import { 
    SET_WAREHOUSE_LIST,
    SET_WAREHOUSE_DETAILS,
} from "../actions/Types";

const initialState = {
    WareHouseList:false,
    WareHouse:false,
}

const HomeReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_WAREHOUSE_LIST:
            return {
                ...state,
                WareHouseList:action.payload
            }
        case SET_WAREHOUSE_DETAILS:
            return {
                ...state,
                WareHouse:action.payload
            }
        default:
            return state;
    }
}

export default HomeReducer;
