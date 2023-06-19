import { createContext } from "react";
import { useContext, useState, useEffect } from "react";

const ContactContext = createContext();

function ContactContextProvider(props){
    const [contacts, setContacts] = useState([]);

    const fetchContactList = async() =>{
        let data = await fetch('https://jsonplaceholder.typicode.com/users/');
        let contact = await data.json();
        setContacts(contact);
    }

    // For deleting contact
    const handleDelete = (id)=>{
        const identity = contacts.findIndex((item)=>item.id === id);
        if(identity !== -1){
            let con1 = [...contacts];
            con1.splice(identity, 1);
            setContacts(con1);
        }
    }

    useEffect(()=>{
        fetchContactList();
    }, []);

    return(
        <ContactContext.Provider value={{
            contacts,
            handleDelete,
            setContacts
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}

function useContact(){
    return useContext(ContactContext);
}

export default ContactContext;
export {ContactContextProvider, useContact};