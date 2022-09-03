

export const Form = ({ addNewContact }) => {

    console.log('Se renderiza el formulario');

    const onAddContact = (e) =>{ 
        // console.log(inputElement.value);
        const inputElement = document.querySelector('input');
        e.preventDefault();
        addNewContact(inputElement.value);
        document.querySelector('input').value = '';
    };

  return (
    <form>
        <input className="block border-solid border border-gray-400 p-2 rounded-lg w-80" type="text" name="name" id="name" placeholder="Alias" />
       
        <input 
            className="bg-stone-700 p-2 pr-5 pl-5 rounded-lg mt-2 hover:bg-stone-600 text-white  cursor-pointer"
            type="submit" 
            value="Añadir contacto"
            onClick={onAddContact} />
    </form>



  )
}
