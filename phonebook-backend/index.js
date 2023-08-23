const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', function (request, response) {
    response.send('<h1>Welcome to the phonebook backend</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const personAmount = persons.length
    response.send(
        `<p>Phonebook has info for ${personAmount} people</p>
        <p>${new Date()}</p>`
    )
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)

    if (person)
        response.json(person)
    else
        response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const newId = Math.floor(Math.random() * 1000)
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }

    if (persons.some(p => p.name === body.name)) {
        return response.status(400).json({
            error: 'person already exists'
        })
    }

    const person = {
        id: newId,
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)

    response.json(person)

})

const PORT = 3801
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})