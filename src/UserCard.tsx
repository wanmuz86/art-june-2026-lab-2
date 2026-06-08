import React from 'react'

// Step 2 is using type
// Step 4 is using interface -> Best practice
// Used to declare the object to be represented in the UI / TS compiler
export interface User {
    name: string;
    age:number;
    email:string
}
// tsrafce + tab

// Inside the book we have more stuff here , inherits React.FC (need to follow it)
// Creating a component
// We declare component name = UserCard
// Component will have props of type User, it is called user

const UserCard : React.FC<{ user: User }> = ({ user }) =>  {
  return (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

// Export the Component to be used elsewhere
export default UserCard