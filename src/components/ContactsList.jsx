import { ContactItem } from "./ContactItem"


export const ContactsList = ( { contacts, onDeleteContact, onToggleConnect } ) => {
    console.log(contacts);
  return (
    <ul className="md:mr-5">
        {contacts.map( (item, key) => {
            return(
                <li
                    key={key}>
                    <ContactItem 
                        contact={ item }
                        onDeleteContact= { onDeleteContact }
                        onToggleConnect= { onToggleConnect }
                        />
                </li>
            )
            
        } )}
    </ul>
  )
}
