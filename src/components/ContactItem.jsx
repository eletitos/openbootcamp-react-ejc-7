

export const ContactItem = ({ contact, onDeleteContact, onToggleConnect }) => {

  const divColor = contact.connected ? 'bg-teal-200' : 'bg-slate-200';

  return (
    <div className={`${divColor} p-3 mb-2 rounded-lg flex`}>

        <span
          className="basis-full"> 
          { contact.name }
        </span>

        <button
          className="bg-stone-700 p-1 pr-3 pl-3 rounded-lg ml-2 hover:bg-stone-600 text-white  cursor-pointer"
          onClick={() => onToggleConnect(contact.id)}>
          { contact.connected ? 'Desconectar' : 'Conectar' }
        </button>

        <button
          className="bg-stone-700 p-1 pr-3 pl-3 rounded-lg ml-2 hover:bg-stone-600 text-white  cursor-pointer"
          onClick={() => onDeleteContact(contact.id)}>
          Borrar
        </button>
        
    </div>
  )
}
