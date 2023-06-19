import List from "./List";
import { useContact } from "../ContactContext";
import { Link } from "react-router-dom";

const Header = ()=>{
    const {handleAddToCon, showAddForm} = useContact();
    return(
        <div className="container">
            <div className="heading">
                <img src="https://www.svgrepo.com/show/192480/phone-book-agenda.svg" alt="heading-logo"/>
                <p>Contact List</p>
                <Link to='/addForm'><button className="add-contact-button">Add Contact</button></Link>
            </div>

            <List />
        </div>
    )
}

export default Header;