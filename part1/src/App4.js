import {useState} from 'react'

const Title = props => <div><h1>{props.text}</h1></div>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticLine = (props) => <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
</tr>

const Statistics = (props) => {
    if (props.total === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }
    return (
        <div>
            <table>
                <StatisticLine text='good' value={props.good}/>
                <StatisticLine text='neutral' value={props.neutral}/>
                <StatisticLine text='bad' value={props.bad}/>
                <StatisticLine text='all' value={props.total}/>
                <StatisticLine text='average' value={(props.good - props.bad) / props.total}/>
                <StatisticLine text='positive' value={(props.good / props.total) * 100 + '%'}/>
            </table>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const handleClickGood = () => {
        setGood(good + 1)
        setTotal(total + 1)
    }
    const handleClickNeutral = () => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
    }
    const handleClickBad = () => {
        setBad(bad + 1)
        setTotal(total + 1)
    }

    return (
        <div>
            <Title text='give feedback'/>
            <Button handleClick={handleClickGood} text='good'/>
            <Button handleClick={handleClickNeutral} text='neutral'/>
            <Button handleClick={handleClickBad} text='bad'/>
            <Title text='statistics'/>
            <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
        </div>
    )
}

export default App