import {React, useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GetWarehouseList } from "../redux/actions/HomeActions";

const WarehouseList = () => {
    
    const dispatch = useDispatch()
    const WareHouseList = useSelector(state => state.home.WareHouseList);
   
    const [wareHouseName, setWareHouseName] = useState('')
    const [status, setStatus] = useState(null)
    const [statusReg, setStatusReg] = useState(null)
    const [city, setCity] = useState('select')
    const [cluster, setCluster] = useState('select')
    const [space, setSpace] = useState('select')
    const [WareType, setWareType] = useState('select')

    const [cityList, setCityList] = useState(false)
    const [clusterList, setClusterList] = useState(false)
    const [spaceAvail, setSpaceAvail] = useState(false)
    const [WareTypeList, setWareTypeList] = useState(false)
    const [WAREHOUSE, setWAREHOUSE] = useState(false)

    useEffect(() => {
        dispatch(GetWarehouseList())
    }, [])

    useEffect(() => {
        setWAREHOUSE(WareHouseList)
    }, [WareHouseList])

    const onNameChange =(e)=>{
        setWareHouseName(e.target.value)
    }

    const onStatusChange =(e)=>{
        setStatus(e.target.value)
    }
    const onRegStatusChange =(e)=>{
        setStatusReg(e.target.value)
     }
     const onCityChange =(e)=>{
        setCity(e.target.value)
     }
    const onClusterChange =(e)=>{
        setCluster(e.target.value)
     }
     const onSpaceChange =(e)=>{
        setSpace(e.target.value)
     }

     const onTypeChange =(e)=>{
        setWareType(e.target.value)
     }


    useEffect(() => {
        if(WareHouseList){
            var city_list = [...new Set(WareHouseList.map(data=>data.city))]
            setCityList(city_list)

            var cluster_list = [...new Set(WareHouseList.map(data=>data.cluster))]
            setClusterList(cluster_list)
            
            var space_list = [...new Set(WareHouseList.map(data=>data.space_available))]
            setSpaceAvail(space_list)

            var type_list = [...new Set(WareHouseList.map(data=>data.type))]
            setWareTypeList(type_list)
        }
    }, [WareHouseList])
    
    useEffect(() => {
       if(WareHouseList){
           if(wareHouseName){
            var statusFilter = WareHouseList.filter(data=>data.name.toUpperCase().includes(wareHouseName.toUpperCase()))
            setWAREHOUSE(statusFilter)
           }else{
            setWAREHOUSE(WareHouseList)
           }
       }
    }, [wareHouseName])

    useEffect(() => {
        if(WareHouseList){
            if(status=='true'||status=='false'){
             var statusFilter = WareHouseList.filter(data=>data.is_live==(status=='true'?true:false))
             setWAREHOUSE(statusFilter)
            }else{
             setWAREHOUSE(WareHouseList)
            }
        }
     }, [status])

    useEffect(() => {
        if(WareHouseList){
            if(statusReg=='true'||statusReg=='false'){
             var statusRegFilter = WareHouseList.filter(data=>data.is_registered==(statusReg=='true'?true:false))
             setWAREHOUSE(statusRegFilter)
            }else{
             setWAREHOUSE(WareHouseList)
            }
        }
     }, [statusReg])

     useEffect(() => {
        if(WareHouseList){
            if(city!=='select'){
             var cityFilter = WareHouseList.filter(data=>data.city==city)
             setWAREHOUSE(cityFilter)
            }else{
             setWAREHOUSE(WareHouseList)
            }
        }
     }, [city])

     useEffect(() => {
        if(WareHouseList){
            if(cluster!=='select'){
             var clusterFilter = WareHouseList.filter(data=>data.cluster==cluster)
             setWAREHOUSE(clusterFilter)
            }else{
             setWAREHOUSE(WareHouseList)
            }
        }
     }, [cluster])

     useEffect(() => {
        if(WareHouseList){
            if(space!=='select'){
             var spaceFilter = WareHouseList.filter(data=>data.space_available==space)
             setWAREHOUSE(spaceFilter)
            }else{
             setWAREHOUSE(WareHouseList)
            }
        }
     }, [space])

     useEffect(() => {
        if(WareHouseList){
            if(WareType!=='select'){
             var typeFilter = WareHouseList.filter(data=>data.type==WareType)
             setWAREHOUSE(typeFilter)
            }else{
             setWAREHOUSE(WareHouseList)
            }
        }
     }, [WareType])

    console.log('wareHouseName',wareHouseName);

   
  return (
    <section className="warehouseList">
        <div className="container">
            <div className="FILTERS">
                <div className="primary">
                   <div className="search">
                     <input type="text" onChange={onNameChange} value={wareHouseName} placeholder="Search By Warehouse Name..."/>
                   </div>
                   <div className="Live_Ofline">
                        <select 
                        name="status" 
                        onChange={onStatusChange} 
                        value = {status} 
                        id="" 
                        placeholder="City"
                        style={{color:status=='true'?'green':status=='false'?'red':'#757a79'}}
                        >
                           <option value={null} style={{color:'#757a79'}}> - All - </option>
                           <option value={true} style={{color:'green'}}>L!VE &#9864;</option>
                           <option value={false} style={{color:'red'}}>OFFL!NE</option>
                        </select>
                    </div>
                </div>
                <div className="optionFilter">

                       <select name="city" onChange={onCityChange} value={city} id="" placeholder="City">
                           <option value="select"> - Select City - </option>
                           {cityList?cityList.map((city,index)=>(
                            <option value={city}>{city}</option>
                           )):null}
                       </select>

                       <select name="cluster" onChange={onClusterChange} value={cluster} id="" placeholder="Cluster">
                           <option value="select"> - Select Cluster - </option>
                           {clusterList?clusterList.map((cluster,index)=>(
                            <option value={cluster}>{cluster}</option>
                           )):null}
                       </select>

                       <select name="space" onChange={onSpaceChange} value={space} id="" placeholder="Space">
                           <option value="select"> - Available Space - </option>
                           {spaceAvail?spaceAvail.map((space,index)=>(
                            <option value={space}>{space}</option>
                           )):null}
                       </select>

                       <select name="space" onChange={onTypeChange} value={WareType} id="" placeholder="Space">
                           <option value="select"> - Warehouse Type - </option>
                           {WareTypeList?WareTypeList.map((type,index)=>(
                            <option value={type}>{type}</option>
                           )):null}
                       </select>

                       <select name="statusReg" onChange={onRegStatusChange} id="" value = {statusReg}  placeholder="Register">
                           <option value={null}> - Registration Status- </option>
                           <option value={true}>Registered</option>
                           <option value={false}>Unregistered</option>
                       </select>
                   </div>
            </div>
            <div className="W_List">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Code</th>
                            <th>Cluster</th>
                            <th>Space</th>
                            <th>Type</th>
                            <th>Registration</th>
                            <th>Status</th>
                            <th style={{textAlign:'center'}}>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {WAREHOUSE?WAREHOUSE.map((data,index)=>(
                            <tr>
                                <td>{index+1}</td>
                                <td>{data.name}</td>
                                <td style={{fontWeight:'500'}}>{data.city}</td>
                                <td>{data.code}</td>
                                <td>{data.cluster}</td>
                                <td>{data.space_available}</td>
                                <td>{data.type}</td>
                                <td style={{fontWeight:'500',color:data.is_registered?'#007cb9':'#a7bcb9'}}>{data.is_registered?<>Verified &#10004;</>:'No Records'}</td>
                                <td style={{fontWeight:'500',color:data.is_live?'green':'#a7bcb9'}}>{data.is_live?<>LIVE &#9864;</>:'Offline'}</td>
                                <td className="VIEW_BTN"><Link to={`/Warehouse/${data.id}`}><span className="material-icons-outlined">view_in_ar</span></Link></td>
                            </tr>
                        )):null}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );
};

export default WarehouseList;
