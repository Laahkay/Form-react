import React from 'react'

function Display(props) {
  console.log('props', props)

  const {display , handleDelete} = props
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
      {display && display.map((item , index) => {
        {console.log("id" , item.id)}
        return(
          <tr key={index}>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td><button onClick={()=> handleDelete(item.id)}>X</button></td>


          </tr>
        )
      })}
</tbody>
</table>
    </div>
  )
}

export default Display