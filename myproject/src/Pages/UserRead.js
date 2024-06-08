import React from 'react'
import "./Allpages.css"
function UserRead() {
  return (
<>
<div className='displaydata'>
  <table border="2px" className='mytable'>
<thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
    <th>Email</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Amit</td>
    <td>20</td>
    <td>agra</td>
    <td>aa@gmail.com</td>
    <td>edit</td>
    <td>Delete</td>

  </tr>
</tbody>


    
  </table>
</div>

</>
  )
}

export default UserRead