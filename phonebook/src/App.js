import {useState, useEffect} from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])
    const [filter, setFilter] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response =>{
                setPersons(response.data)
            })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {name: newName, number: newNumber, id: persons.length + 1}
        persons.some(person => person.name === newName) ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(newPerson))
    }

    const handleNameChange = (event) => setNewName(event.target.value)
    const handlePhoneChange = (event) => setNewNumber(event.target.value)
    const handleFilterChange = (event) => setFilter(event.target.value)

    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter handleChange={handleFilterChange}/>
            <h2>add a new person</h2>
            <PersonForm addPerson={addPerson} handleNameChange={handleNameChange}
                        handlePhoneChange={handlePhoneChange}/>
            <Numbers persons={filteredPersons}/>
        </div>
    )
}

export default App