import { useState } from "react";
import { useContact } from "../ContactContext";
// import { Contacts } from "../data/Contacts";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function EditForm(){
    const {contacts, setContacts} = useContact();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    var nameTemp, phoneTemp;
    const user = useParams().id;
    const navigate = useNavigate();

    contacts.map((item)=>{
        if(item.id == user){
            nameTemp = item.name;
            phoneTemp = item.phone;
        }
    });

    const handleEdit=()=>{
        if(name === undefined){
            alert("edit the name");
        }
        else if(phone === undefined){
            alert("edit the phone");
        }
        else{
            const tempContactsArray = [...contacts];
            tempContactsArray.map((con)=>{
                if(con.id == user){
                    con.name = name;
                    con.phone = phone;
                }
            });
            setContacts(tempContactsArray);
            navigate('/');
        }
    }

    return(
        <div className="form-container">
            <div className="add-contact-from">
                <h1>Edit Contact</h1>
                <div className="add-name">
                    <label htmlFor="Name">Name</label>
                    <input type="text" defaultValue={nameTemp} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="add-phone">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" defaultValue={phoneTemp} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <button onClick={handleEdit}>Save</button>
                <button><Link to="/" style={{textDecoration:"none", background: "transparent", color: "white"}}
                >Home</Link></button>
            </div>
        </div>
    )
}

export default EditForm;