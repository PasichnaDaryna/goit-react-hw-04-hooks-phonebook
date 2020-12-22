import '../contactList/ContactList.css';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import T from 'prop-types';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            <b>{name} </b>

            <em>{number}</em>
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            <DeleteIcon width="26" height="26" />
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string.isRequired,
      number: T.string.isRequired,
    }),
  ),
  onDeleteContact: T.func.isRequired,
};

export default ContactList;
