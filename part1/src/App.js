const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            greeting app created by <a href='https://github.com/letami'>letami</a>
        </div>
    )
}

const App = () => {
    const name = 'Marco'
    const age = 25
    return (
        <>
            <h1>Greetings</h1>
            <Hello name='Dennik' age={10+13}/>
            <Hello name={name} age={age}/>
            <Footer/>
        </>
    )
}

export default App