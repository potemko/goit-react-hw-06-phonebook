import React from 'react';
import css from './Filter.module.css';

const Filter = ({
  UpHandleFilterChange,
  UphandleDelete,
  UpfilteredContacts,
  Upfilter,
}) => (
  <div>
    <h2 className={css.title}>Contacts</h2>
    <label className={css.container}>
      
      <input
      className={css.imput}
        placeholder="Find contacts by name"
        type="text"
        value={Upfilter}
        onChange={UpHandleFilterChange}
      />
    </label>
    <ul >
      {UpfilteredContacts.map(contact => (
        <li className={css.li} key={contact.id}>
          <span className={css.span}>{contact.name}: {contact.number}</span>
          
          <button className={css.button} onClick={() => UphandleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Filter;
