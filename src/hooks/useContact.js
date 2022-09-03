import { useState } from "react";

export const useContact = (initialContact =[]) => {

    const [contacts, setContacts] = useState(initialContact);
   const onDeleteContact = (id) => {
        setContacts((contacts) =>contacts.filter( contact => contact.id !== id ));
   }

   const onAddContact = (name) => {
       const newContact = {
           id: new Date().getTime(),
           name: name,
           connected: false,
       }
    setContacts([...contacts, newContact]);
   }
    

   const onToggleConnect = (id) => {
       const newContacts = contacts.map((contact) =>{
        if(contact.id === id){
            return{
                ...contact,
                connected: !contact.connected
            }
        }

        return contact;
        
       })
        setContacts(newContacts);
   }

  return {
      contacts,
      onAddContact,
      onToggleConnect,
      onDeleteContact,
    }
  
}
