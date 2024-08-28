import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { filteredContacts } from "../../redux/contacts/selectors.js";

export default function ContactList () {
 
  const filterContacts = useSelector(filteredContacts)
    return (
      <ul className={css.list}>
        {filterContacts.map((contact)=>
        <li key={contact.id} className={css.item}>
        <Contact name={contact.name} number={contact.number} id={contact.id}></Contact>
        </li>
        )}
    </ul>

    )
   
}