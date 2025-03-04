// slightly refactored after reading up to exercise 1.6
const Header = ({name}) => <h1>{name}</h1>

// leaving this as the original props format for reference
const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0]['exercises'] + props.parts[1]['exercises'] + props.parts[2]['exercises']}</p>
  )
}

const Part = ({name, exercise}) => <p>{name} {exercise}</p>

const Content = ({parts}) => {
  console.log(parts)
  return (
    <div>
      <Part name={parts[0]['name']} exercise={parts[0]['exercises']} />
      <Part name={parts[1]['name']} exercise={parts[1]['exercises']} />
      <Part name={parts[2]['name']} exercise={parts[2]['exercises']} />
    </div>
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
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App