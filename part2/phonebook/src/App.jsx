import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const checkNameExists = (person,newName) => {
    if (person.name === newName) return true;
    return false
  }

  const addName = (event) => {
    event.preventDefault()
    // since persons contains non-primitives have to compare the string values explicitly rather than {name:"blah"}
    // console.log(persons.includes({name: newName}))
    // console.log(persons.includes(newName))
    // console.log(persons)
    if (persons.some((person) => checkNameExists(person,newName))) {
      console.log("hi there same name")
      alert(`${newName} is already added to phonebook`) 
      return
    }
    console.log('name, added', event.target)
    // console.log(newName)
    // console.log(persons)
    // here I encountered an interesting diversion where I'd put {newName} in the value and it
    // caused {name: {newName: "value"}} to render, meaning react couldn't render the child elements
    console.log(persons.concat({ name: newName, number: newNumber}))
    setPersons(persons.concat({ name: newName, number: newNumber }))
  }

  const handleNameChange = (event) => {
    // console.log('handleNameChange', event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const Person = ({ person }) => {
    // console.log('p',person)
    return (<p>{person.name} {person.number}</p>)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
          <div>debug: {newName} {newNumber}</div>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} person={person} />)}
    </div>
  )
}

export default App