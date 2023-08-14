import {useState} from 'react'

const Button = props => <button onClick={props.handleClick}>{props.text}</button>

const Title = props => <h1>{props.text}</h1>

const MostVotes = (props) => {
    const highestVote = props.votes.indexOf(Math.max(...props.votes))
    return (
        <div>
            {props.anecdotes[highestVote]}
        </div>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

    const handleNext = () => {
        const rand = Math.floor(Math.random() * anecdotes.length)
        setSelected(rand)
    }

    const handleVote = () => {
        const voteCopy = [...votes]
        voteCopy[selected] += 1
        setVotes(voteCopy)
    }

    return (
        <div>
            <Title text='Anecdote of the day'/>
            {anecdotes[selected]}
            <p>has {votes[selected]} votes</p>
            <Button handleClick={handleVote} text='vote'/>
            <Button handleClick={handleNext} text='next anecdote'/>
            <Title text='Anedcote with most votes'/>
            <MostVotes votes={votes} anecdotes={anecdotes}/>
        </div>
    )
}

export default App