import { useContact } from '../ContactContext'
import { Link } from 'react-router-dom'

const List = () => {

    const {contacts, handleDelete} = useContact();

    return(
    <div className="contact-list">
        {contacts.map((contact, index)=>{
            return <div className="list-item" key={index}>
            <div className="contact-logo">
                <img src="https://www.svgrepo.com/show/506773/user-2.svg" alt="contact-logo"/>
            </div>

                <div className="name-phone">
                    <div className="name">{contact.name}</div>
                    <div className="phone">{contact.phone}</div>
                </div>

            <div className="edit">
                <Link to={`editForm/${contact.id}`}>
                    <img src="https://www.svgrepo.com/show/509911/edit.svg" alt="edit-logo"/>
                </Link>
            </div>

            <div className="delete">
                <img src="https://www.svgrepo.com/show/433921/bin.svg" alt="delete-logo" onClick={()=>handleDelete(contact.id)}/>
            </div>
    </div>
        })}
        
    </div>
    )
}

export default List;