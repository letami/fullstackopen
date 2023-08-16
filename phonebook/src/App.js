import {useState, useEffect} from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [filter, setFilter] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    useEffect(() => {
        personService
            .getAll()
            .then(persons => {
                setPersons(persons)
            })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {name: newName, number: newNumber}

        if (persons.some(person => person.name === newName)) {
            if (window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
                const currentPersonId = persons.find(p => p.name === newPerson.name).id
                personService
                    .update(currentPersonId, newPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id !== currentPersonId ? person : returnedPerson))
                    })
            }
        } else {
            personService
                .create(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                })
        }
    }

    const deletePerson = (id) => {
        if (window.confirm(`Delete ${persons.find(p => p.id === id).name} ?`))
            personService
                .remove(id)
                .then(response => {
                    setPersons(persons.filter(p => p.id !== id))
                })
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
            <Persons persons={filteredPersons} deletePerson={deletePerson}/>
        </div>
    )
}

export default App