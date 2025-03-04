import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Heading = ({text}) => <h1>{text}</h1>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <Heading text="Give Feedback"/>
    <Button onClick={() => setGood(good+1)} text={"good"}/>
    <Button onClick={() => setNeutral(neutral+1)} text={"neutral"}/>
    <Button onClick={() => setBad(bad+1)} text={"bad"}/>
    <Heading text="Statistics"/>
    good {good} <br/>
    neutral {neutral} <br/>
    bad {bad}
    </div>
  )
}

export default App