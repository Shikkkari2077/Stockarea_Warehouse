import { 
    SET_WAREHOUSE_LIST,
    SET_WAREHOUSE_DETAILS,
} from "../actions/Types";

import WareHouse from '../../warehouse.json'


export const GetWarehouseList = () => (dispatch)=>{
    
    dispatch({
      type:SET_WAREHOUSE_LIST,
      payload:WareHouse
    })  
  
};


export const GetWarehouseDetails = (data) => (dispatch)=>{
    var ID = parseInt(data.Warehouse_id.id)
    console.log(ID);
    var List = WareHouse
    var final = List.filter(data=>data.id==ID)
    final = final[0]
    
    dispatch({
      type:SET_WAREHOUSE_DETAILS,
      payload:final
    })  
  
};
  
  