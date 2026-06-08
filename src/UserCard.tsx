import React from 'react'
import type { Profile } from './ProfileCard';  // Importing the type, structure of profile
import ProfileCard from './ProfileCard'; // Importing the component
// Step 2 is using type
// Step 4 is using interface -> Best practice
// Used to declare the object to be represented in the UI / TS compiler


// Define a Role type that restricts the user's role to one of three valid values.
// UNION TYPE - Newer version of Enum in TS that allows the value to be one as foolows
type Role = "ADMIN" | "USER" | "GUEST";

export interface User {
    name: string;
    age:number;
    email:string;
    role:Role
}
// tsrafce + tab

// Inside the book we have more stuff here , inherits React.FC (need to follow it)
// Creating a component
// We declare component name = UserCard
// Component will have props of type User, it is called user

// ({user}) - > refers to Object destructring
// Normally (props) is passed as argument of a function
// Then we get the value using props.user
// {user} equivalent const user = props.user

// Add profile as a props that will be passed from App.tsx
const UserCard : React.FC<{ user: User, profile:Profile }> = ({ user, profile }) =>  {
  return (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <p>Role : {user.role}</p>
        <ProfileCard bio={profile.bio} website={profile.website} ></ProfileCard>
    </div>
  )
}

// Export the Component to be used elsewhere
export default UserCard