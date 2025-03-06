import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Heading = ({text}) => <h1>{text}</h1>

const StatisticLine = ({title, value, unit}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{value}</td>
      <td>{unit}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  //Note the quick and easy way to protect against NaN... before
  //conditional rendering added in 1.9
  //const total=(good+neutral+bad)||1
  const total=good+neutral+bad
  const average=(good-bad)/total
  const positive=(100*good)/total
  if (total === 0){
    return (
      <div>
        <Heading text="Statistics"/>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <Heading text="Statistics"/>
      <table>
        <tbody>
          <StatisticLine title="good" value={good}/>
          <StatisticLine title="neutral" value={neutral}/>
          <StatisticLine title="bad" value={bad}/>
          <StatisticLine title="all" value={good+neutral+bad}/>
          <StatisticLine title="average" value={average}/>
          <StatisticLine title="positive" value={positive} unit="%"/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <Heading text="Give feedback"/>
    <Button onClick={() => setGood(good+1)} text={"good"}/>
    <Button onClick={() => setNeutral(neutral+1)} text={"neutral"}/>
    <Button onClick={() => setBad(bad+1)} text={"bad"}/>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App