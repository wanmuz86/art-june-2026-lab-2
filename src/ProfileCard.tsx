import React from 'react'


// TypeScript React
// Functional vs Class Component (the older way creating componet in React v16)
// Arrow -> Arrow Function vs normal function
// tsrface

// another example tsrfc -> TS React Functional Component


export interface Profile {
    bio:string;
    website:string;
}

const ProfileCard: React.FC<Profile> = ({ bio, website }) => {
  return (
    <div>
        <p>Bio : {bio}</p>
        <p>Website : {website}</p>
    </div>
  )
}

export default ProfileCard

