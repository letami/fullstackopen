import {useState} from 'react'
import Numbers from './components/Numbers'

const App = () => {
    const [persons, setPersons] = useState([{name: 'Arto Hellas', number:'040-1234567'}])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {name: newName, number: newNumber}
        persons.some(person => person.name === newName) ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(newPerson))
    }

    const onNameChange = (event) => {
        setNewName(event.target.value)
    }

    const onPhoneChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>name: <input onChange={onNameChange}/></div>
                <div>number: <input onChange={onPhoneChange}/></div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <Numbers persons={persons}/>
        </div>
    )
}

export default App