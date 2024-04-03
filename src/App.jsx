import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log("Featured Puppy: ", featuredPup)
  
  function handleClick(puppyId) {
    console.log('puppy clicked!', puppyId);
    setFeatPupId(puppyId)
  }

  return (
    <div className="App">
      {puppies.map((puppy)=> (
        //console.log("puppy id: ", puppy.id)
          //return (
          <p onClick={() => handleClick(puppy.id)} key={puppy.id}>{puppy.name}</p>
      
      ))}
        {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
    </div>
  )}
</div>
  )
}

export default App