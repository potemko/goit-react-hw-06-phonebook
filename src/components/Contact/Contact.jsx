import { nanoid } from 'nanoid';
import Phonebook from 'components/Phonebook/Phonebook';
import Filter from 'components/Filter/Filter';
import MyRedux from 'components/MyRedux/MyRedux';
import { useDispatch, useSelector } from 'react-redux';

function Contact() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.good.name);
  const number = useSelector((state) => state.good.number);
  const contacts = useSelector((state) => state.good.contacts);
  const filter = useSelector((state) => state.good.filter);

  const handleChange = (event) => {
    event.preventDefault();
    dispatch({ type: 'NAME', payload: event.currentTarget.value });
  };

  const handleNumber = (event) => {
    event.preventDefault();
    dispatch({ type: 'NUMBER', payload: event.currentTarget.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = { id: nanoid(), name, number };
    dispatch({ type: 'CONTACTS', payload: [...contacts, newContact] });
    dispatch({ type: 'NAME', payload: '' });
    dispatch({ type: 'NUMBER', payload: '' });
  };

  const handleDelete = (contactId) => {
    dispatch({
      type: 'CONTACTS',
      payload: contacts.filter((contact) => contact.id !== contactId),
    });
  };

  const handleFilterChange = (event) => {
    dispatch({ type: 'FILTER', payload: event.currentTarget.value });
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <Phonebook
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleNumber={handleNumber}
        name={name}
        number={number}
      />

      <Filter
        UpHandleFilterChange={handleFilterChange}
        UphandleDelete={handleDelete}
        UpfilteredContacts={getFilteredContacts()}
        Upfilter={filter}
      />
      <MyRedux />
    </div>
  );
}

export default Contact;


// class Contacts extends Component {
//   state = {
//     filter: '',
//     contacts: [],
//     number: '',
//     name: '',
//   };

//   addContact = event => {
//     event.preventDefault();
//     const { name, contacts } = this.state;

//     if (contacts.some(contact => contact.name === name)) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     const { name, number } = this.state;

//     if (this.state.contacts.some(contact => contact.name === name)) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     const newContact = { id: nanoid(), name, number };
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//       name: '',
//       number: '',
//     }));
//   };

//   handleDelete = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   handleFilterChange = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     // const { name, number, filter } = this.state;
//     // const filteredContacts = this.getFilteredContacts();

//     return (
//       <div>
//         <Phonebook
//           upHandleSubmit={this.handleSubmit}
//           uphandleChange={this.handleChange}
//           upName={this.state.name}
//           upNumber={this.state.number}
//         />

//         <Filter
//           UpHandleFilterChange={this.handleFilterChange}
//           UphandleDelete={this.handleDelete}
//           UpfilteredContacts={this.getFilteredContacts()}
//           Upfilter={this.state.filter}
//         />
//       </div>
//     );
//   }
// }

// export default Contacts;
