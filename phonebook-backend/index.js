require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Person = require('./models/person')


const app = express()

morgan.token('json', function displayJson(req) {
    return JSON.stringify(req.body)
})

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :json'))
app.use(cors())
app.use(express.static('build'))


app.get('/', function (request, response) {
    response.send('<h1>Welcome to the phonebook backend</h1>')
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(people => {
        response.json(people)
    })
})

app.get('/info', (request, response) => {
    Person.count({}).then(count => {
        response.send(
            `<p>Phonebook has info for ${count} people</p>
        <p>${new Date()}</p>`
        )
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person
        .findById(request.params.id)
        .then(person => {
            response.json(person)
        })
        .catch(error => {
            response.status(404).end()
        })
})

app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndDelete(request.params.id).then(person => {
        response.status(204).end()
    })
})

app.post('/api/persons', (request, response) => {
        const body = request.body

        if (!body.name || !body.number) {
            return response.status(400).json({
                error: 'name or number missing'
            })
        }

        /**if (Person.findOne({name: body.name})) {
         Person
         .findOneAndUpdate(
         {name: body.name},
         {number: body.number},
         {returnDocument: 'after'})
         .then(updatedPerson => {
         response.json(updatedPerson)
         })
         }
         **/
        const person = new Person({
            name: body.name,
            number: body.number
        })

        person.save().then(person => {
            response.json(person)
        })

    }
)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})