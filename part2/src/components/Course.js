const Header = ({text}) => <h3>{text}</h3>

const Content = ({parts}) => (
    <div>
        <ul>
            {parts.map(part =>
                <Part key={part.id} part={part}/>
            )}
        </ul>
    </div>
)

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({parts}) => {
    const initial = 0
    const total = parts.reduce((accumulator, current) => accumulator + current.exercises, initial)
    return (
        <strong>total of {total} exercises</strong>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header text={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course