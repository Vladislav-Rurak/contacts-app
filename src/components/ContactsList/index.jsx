import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';

function ContactsList (props) {
  const { contacts, isFetching, error } = props;

  const mapContact = (c, index, arr) => (
    <ContactsListItem key={c.id} contact={c} />
  );

  return (
    <>
      {isFetching && <div>Loading/ Please, wait</div>}
      {error && <div>Error</div>}
      {!isFetching && !error && <ul>{contacts.map(mapContact)}</ul>}
    </>
  );
}

const mapStateToProps = ({ contactsData }) => {
  return contactsData;
};

export default connect(mapStateToProps)(ContactsList);
