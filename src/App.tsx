
import './App.css'
import UserCard from './UserCard' // Impoorting the component

import type { User } from './UserCard' // Importing the interface
import UserInput from './UserInput';
import { useState } from 'react';

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

  // Creating state - Variable that can change value
  const [userName,setUsername] = useState<string>("");

  // This method will be called when the prop is passed from the children
  const handleChangeName = (name:string) => {

    // console.log(name);
    setUsername(name);  // Update the state with the value from props
  }
  return (
    <>
     <h1>User Information</h1>
     {/* Bring out the component and pass the user value that is created */}
     {/* THe user on the right side refers to variable created, left - props */}

     <UserCard user={user} profile={profile}/> 

     <hr />
     <h1>Welcome,  { userName || "Guest"} !</h1>
     <UserInput onNameChanged={handleChangeName}/>
    </>
  )
}

export default App
