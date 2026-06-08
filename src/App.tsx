
import './App.css'
import UserCard from './UserCard' // Impoorting the component

import type { User } from './UserCard' // Importing the interface

// creatinh mock user
const user: User = {
  name:"Alice",
  age:30,
  email:"alice@gmail.com"
}

function App() {


  return (
    <>
     <h1>User Information</h1>
     {/* Bring out the component and pass the user value that is created */}
     <UserCard user={user}/> 
    </>
  )
}

export default App
