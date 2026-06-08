
import './App.css'
import UserCard from './UserCard' // Impoorting the component

import type { User } from './UserCard' // Importing the interface

// creatinh mock user
const user: User = {
  name:"Alice",
  age:30,
  email:"alice@gmail.com",
  role:"ADMIN"
}

// Create a mock profile

const profile = {
 bio: "A passionate developer and tech enthusiast.",
 website: "https://alice.dev"
};


function App() {

  return (
    <>
     <h1>User Information</h1>
     {/* Bring out the component and pass the user value that is created */}
     {/* THe user on the right side refers to variable created, left - props */}
     
     <UserCard user={user} profile={profile}/> 
    </>
  )
}

export default App
