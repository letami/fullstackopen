const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>
                {props.p} {props.e}
            </p>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part p={props.parts[0].name} e={props.parts[0].exercises}/>
            <Part p={props.parts[1].name} e={props.parts[1].exercises}/>
            <Part p={props.parts[2].name} e={props.parts[2].exercises}/>
        </div>
    )
}

const Total = (props) => {
    const [p1, p2, p3] = props.parts
    return (
        <>
            <p>Number of exercises {p1.exercises + p2.exercises + p3.exercises}</p>
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },

            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]

    }
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default App