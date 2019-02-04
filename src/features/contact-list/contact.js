import React from 'react'
import ReactToExcel from 'react-html-table-to-excel';
const Contact = (props) => {
  console.log(props)
  return (
    <div>
      <ReactToExcel
        className="btn btn-outline-secondary"
        table="table-to-xls"
        filename="excelFile"
        sheet="sheet1"
        buttonText='Export-to-Excel'
      />
      <hr></hr>
      <table className="table table-bordered" id="table-to-xls">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>%/hour</th>
            <th>%/week</th>
            <th>%/day</th>
          </tr>
        </thead>
        <tbody>
          {
            props.users.map((item) => {
              return (
                <tr key={Math.random()}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>{item.zip}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default Contact