import { useState } from 'react'

// see MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// and https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function incrementVote(selected,vote){
  const voteCopy = [...vote]
  voteCopy[selected]+=1
  //console.log(voteCopy)
  return voteCopy
}

//have to find the max value and index to show the most popular voted anecdote
// https://www.geeksforgeeks.org/how-to-get-index-of-greatest-value-in-an-array-in-javascript/
// returns first occurrence of max in array which is fine here
function findMaxIndex(arr) {
  const maxValue = Math.max(...arr);
  return arr.indexOf(maxValue); 
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Heading = ({text}) => <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  // min is 0, max is 8
  
  const [selected, setSelected] = useState(0)
  const startingArray = new Array(8).fill(0)
  const [vote, setVote] = useState(startingArray)

  return (
    <div>
      <Heading text="Anecdote of the day"/>
      {anecdotes[selected]}<br/>
      has {vote[selected]} votes<br/>
      <Button onClick={() => setVote(incrementVote(selected,vote))} text={"vote"}/>
      <Button onClick={() => setSelected(getRandomInt(0,8))} text={"next anecdote"}/>
      <Heading text="Anecdote with most votes"/>
      {anecdotes[findMaxIndex(vote)]}<br/>
      has {vote[findMaxIndex(vote)]} votes<br/>
    </div>
  )
}

export default App