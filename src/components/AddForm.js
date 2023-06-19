import { useContact } from "../ContactContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddForm(){
    const {contacts, setContacts} = useContact();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const navigate = useNavigate();

    const handleAddNew = () =>{
        if(name === undefined || phone === undefined){
            alert("Please fill both the fields.");
            return;
        }
        console.log(name, phone);
        let tempContacts = [...contacts];
        tempContacts = [...tempContacts, {id:tempContacts.length+1, name, phone}];
        setContacts(tempContacts);
        navigate('/');

    }

    return(
        <div className="form-container">
            <div className="add-contact-from">
                <h1>Add Contact</h1>
                <div className="add-name">
                    <label htmlFor="Name">Name</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="add-phone">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <button onClick={handleAddNew}>Add</button>
                <button>
                    <Link to="/" 
                    style={{textDecoration:"none", background: "transparent", color: "white"}}>
                        Home
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default AddForm;