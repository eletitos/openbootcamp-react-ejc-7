// import { useState } from 'react'
import { useEffect } from 'react';
import { ContactsList } from './components/ContactsList';
import { Form } from './components/Form'
import { useContact } from './hooks/useContact';

function App() {

  const initialContacts = JSON.parse(localStorage.getItem('contacts')) || []; 
 
  const {contacts, onDeleteContact, onAddContact, onToggleConnect} = useContact(initialContacts);




  return (
    <div className="App max-w-6xl m-auto p-3">   
    <h1 className='text-4xl mb-3 font-semibold'>Contactos</h1>
    <hr />
      <div className='flex flex-wrap mt-3'>
        <div className='w-full md:w-2/3'>
          <ContactsList 
            contacts={ contacts }
            onDeleteContact= { onDeleteContact }
            onToggleConnect= { onToggleConnect }
            />
        </div>
        <div className=''>
          <Form 
            addNewContact={onAddContact}
          />
        </div>
      </div>
    </div>
  )
}

export default App
