const PageHeader = (props) => <h1>{props.title}</h1>

const Header = (props) => <h2>{props.course}</h2>

const Content = (props) => (
  <div>
    {props.parts.map(part => <Part key={part.id} part={part} />)}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => (
<p>
  <b>
    total of {props.parts.reduce((total,part) => (total+part.exercises),0)} exercises
 </b>
</p>
)

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Courses = ({courses}) => {
  return (
    <div>
      <PageHeader title="Web development curriculum"/>
      {courses.map(course => <Course key={course.id} course={course}/>)}
    </div>
  )
}

export default Courses