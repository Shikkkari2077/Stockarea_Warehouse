import {React, useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetWarehouseDetails } from "../redux/actions/HomeActions";

const WareHouse = () => {
  const id = useParams()

  const [displayEdit, setdisplayEdit] = useState(false)

  const dispatch = useDispatch()
  const WareHouse = useSelector(state => state.home.WareHouse);
  const [Details, setDetails] = useState({
    city: "",
    cluster: "",
    code: "",
    id: null,
    is_live: null,
    is_registered: null,
    name: "",
    space_available: null,
    type: "",
  })

  const onEditChange=(e)=>{
    const {name,value} = e.target
    setDetails({...Details,[name]:value})
  }

  useEffect(() => {
    var data = {
      Warehouse_id:id,
    }
    dispatch(GetWarehouseDetails(data))
  }, [id])

  useEffect(() => {
    if(WareHouse){
      setDetails(WareHouse)
    }
  }, [WareHouse])
  
  const Update =()=>{
    alert('Sorry No Database For Saving The Data')
  }
  console.log('Details',Details);
  return (
    <div className="DetailsPage">
      <div className="container">
        <h2><Link className="LINK" to='/'><span class="material-icons-outlined">home</span>Home</Link> / <Link className="LINK" to={`/Warehouse/${id}`}><span class="material-icons-outlined">info</span> Details</Link></h2>
        <div className="MIddle">
          <div className="detailCard">
              <span><span className="material-icons-outlined">villa</span>{Details.name}</span>
              <div>
                <span>City: <p>{Details.city}</p></span>
                <span>Code: <p>{Details.code}</p></span>
                <span>Cluster: <p>{Details.cluster}</p></span>
                <span>Space Available: <p>{Details.space_available}</p></span>
                <span>Type: <p>{Details.type}</p></span>
                <span>Registration: <p>{Details.is_registered=='true'?'Registered':'No Records'}</p></span>
                <span>Status: <p>{Details.is_live=='true'?'Live':'Offline'}</p></span>
              </div>
              <button onClick={()=>setdisplayEdit(!displayEdit)}>Edit<span className="material-icons-outlined">edit</span></button>
            </div>
            {displayEdit?<div className="EditCard">
            <span><span className="material-icons-outlined">tune</span>Edit Warehouse Details</span>
             <div>
                <div className="INPUT">
                  <label htmlFor="name">Name</label>
                  <input name="name" value={Details.name} onChange={onEditChange} id="name" type="text" placeholder="Warehouse Name" />
                </div>
                
                <div className="INPUT">
                  <label htmlFor="city">City</label>
                  <input name="city" value={Details.city} onChange={onEditChange} id="city" type="text" placeholder="City" />
                </div>

                <div className="INPUT">
                  <label htmlFor="code">Code</label>
                  <input name="code" value={Details.code} onChange={onEditChange} id="code" type="text" placeholder="Code" />
                </div>

                <div className="INPUT">
                  <label htmlFor="cluster">Cluster</label>
                  <input name="cluster" value={Details.cluster} onChange={onEditChange} id="cluster" type="text" placeholder="Cluster" />
                </div>

                <div className="INPUT">
                  <label htmlFor="space">Space</label>
                  <input name="space_available" value={Details.space_available} onChange={onEditChange} id="space" type="text" placeholder="Space Available" />
                </div>

                <div className="INPUT">
                  <label htmlFor="type">Type</label>
                  <input name="type" value={Details.type} onChange={onEditChange} id="type" type="text" placeholder="Warehouse Type" />
                </div>
                
                <div className="INPUT">
                  <label htmlFor="register">Registration</label>
                    <select name="is_registered" value={Details.is_registered} onChange={onEditChange} id="register">
                      <option value={true}>Registred</option>
                      <option value={false}>Unregistered</option>
                    </select>
                </div>

                <div className="INPUT">
                  <label htmlFor="status">Status</label>
                    <select name="is_live" value={Details.is_live} onChange={onEditChange} id="status">
                      <option value={true}>LIVE</option>
                      <option value={false}>OFFLINE</option>
                    </select>
                </div>

             </div>
             <button onClick={Update}>Update<span className="material-icons-outlined">auto_fix_normal</span></button>
            </div>:null}
        </div>
      </div>
    </div>
  );
};

export default WareHouse;
