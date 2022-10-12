import React from 'react';

function ContactsListItem (props) {
  const {
    contact: { name, isFavorite, birthday, telNumber },
  } = props;

  const handleChange = () => {};

  return (
    <li>
      <input type='checkbox' checked={isFavorite} onChange={handleChange} />
      Name: {name}, tel: {telNumber},
      {!birthday || <span>birthday: {birthday}</span>}
    </li>
  );
}

export default ContactsListItem;
