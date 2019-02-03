import React from 'react'
const Contact = (props) => <div> <table className="table table-bordered">
  {/* <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Symbol</th>
      <th>%/hour</th>
      <th>%/day</th>
      <th>%/week</th>
    </tr>
  </thead> */}
  <tbody>
        {
          <tr>
              <td>{props.name}</td>
              <td>{props.phone}</td>
              <td>{ props.address } { props.suite }</td>
            <td>{ props.city } { props.state }, { props.zip }</td>
            </tr>
              
        }
      </tbody>
</table>
</div>
export default Contact




 /* <div className="contact">
   <div>{ props.name }</div>
   <div>{ props.email }</div>
   <div>{ props.phone }</div>
   <div>{ props.address } { props.suite }</div>
   <div>{ props.city } { props.state }, { props.zip }</div>
  </div>  */
