import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('name, added', event.target)
    // console.log(newName)
    // console.log(persons)
    // here I encountered an interesting diversion where I'd put {newName} in the value and it
    // caused {name: {newName: "value"}} to render, meaning react couldn't render the child elements
    console.log(persons.concat({ name: newName }))
    setPersons(persons.concat({ name: newName }))
  }

  const handleNameChange = (event) => {
    // console.log('handleNameChange', event.target.value)
    setNewName(event.target.value)
  }

  const Person = ({ person }) => {
    // console.log('p',person)
    return (<p>{person.name}</p>)
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
          <button type="submit">add</button>
          <div>debug: {newName}</div>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} person={person} />)}
    </div>
  )
}

export default App