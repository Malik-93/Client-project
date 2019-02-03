import React, { Component } from 'react';
import ContactList from './features/contact-list';
import ReactToExcel from 'react-html-table-to-excel';
// import  Contact  from './features/contact-list/contact'
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Contacts  4545</h1>
        <ReactToExcel 
          className="excel-button"
          table="table-to-xls"
          filename="excelFile"
          sheet="sheet1"
          buttonText='Export'
          />
        <table className="table table-bordered" id="table-to-xcl">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>%/hour</th>
              <th>%/day</th>
              <th>%/week</th>
            </tr>
          </thead>

          {/* <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>Doe</td>
              <td>Doe</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
              <td>mary@example.com</td>
              <td>mary@example.com</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td> */}
              {/* <td>Dooley</td>
              <td>Dooley</td>
              <td>Dooley</td>
            <td>Dooley</td> */}
              {/* <td>july@example.com</td>
            </tr>
          </tbody> */}
          <ContactList />
        </table>
      </div>
    );
  }
}

export default App;