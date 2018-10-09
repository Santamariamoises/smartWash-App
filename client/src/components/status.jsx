import React from 'react';

// this is going to retrieve info from database,
//indicating the status of the order


//if orden en curso, render (conditional rendering)
const Status = (props) => {
 return (
   <div>
     <h2>Tu ropa está **{props.status}**</h2>
  </div>
 );
}

export default Status;
