import React from 'react'
import fetch from 'isomorphic-fetch'
import Contact from './contact'
class ContactList extends React.Component {
  state = {
    contacts: [],
    per: 8,
    page: 1,
    totalPages: null,
    scrolling: false,
  }

  componentWillMount() {
    this.loadContacts()
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
  }

  handleScroll = () => {
    const { scrolling, totalPages, page } = this.state
    if (scrolling) return
    if (totalPages <= page) return
    // var lastLi = document.querySelector('tr.contacts > td:last-child')
    // var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
    var pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20
    if (pageOffset >  bottomOffset) {
      this.loadMore()
    }

  }

  loadContacts = () => {
    const { per, page, contacts } = this.state
    const url = `https://student-example-api.herokuapp.com/v1/contacts.json?per=${per}&page=${page}`
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({
        contacts: [...contacts, ...json.contacts],
        scrolling: false,
        totalPages: json.total_pages,
      }))
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page++,
      scrolling: true,
    }), this.loadContacts)
  }

  render() {
    return (
      <div>
       <Contact users = {this.state.contacts} />
      </div>
    )
  }
}

export default ContactList
// return <ul className="contacts contact-container">
//   {
//     this.state.contacsts.map(contact => <li key={contact.id}>
//       <Contact {...contact} />
//     </li>)
//   }
// </ul>