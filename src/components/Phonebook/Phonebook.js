import React from 'react';
import css from './Phonebook.module.css';

const Phonebook = ({
  handleSubmit,
  handleChange,
  name,
  number,
  handleNumber,
}) => (
  <div>
    <h1 className={css.title}>Phonebook</h1>
    <form onSubmit={handleSubmit}>
      <div className={css.container}>
      <label>
        <input
          className={css.imput}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <input
          className={css.imput}
          placeholder="Number"
          type="tel"
          name="number"
          value={number}
          onChange={handleNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      </div>
      
      <button className={css.button} type="submit">Add contact</button>
    </form>
  </div>
);
export default Phonebook;
