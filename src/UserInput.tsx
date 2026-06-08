import React from 'react'

// Create a props with callback function passed in the props

interface UserInputProps {
    onNameChanged: (name:string) => void // A callback function which will pass string as argument
}

const UserInput : React.FC<UserInputProps> = ({onNameChanged}) =>{
    // When create a form , input in React , normally we store the input value  in state
    // and update it using onChange 
    // In this exercise we will simplify by only calling onChange when the input value change
    // Tomorrow we will do full input/form

    // When the value of input change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // call the props -> pass the data to parent 
        // Passing the data to parent
        // event -> Onchange event
        // event.target -> Who call the event? (Input)
        // value => property value of the input
        onNameChanged(event.target.value) 
    }

  return (
    <input 
    type="text" 
    placeholder='Enter your name'
    onChange={handleChange}
    />
  )
}

export default UserInput