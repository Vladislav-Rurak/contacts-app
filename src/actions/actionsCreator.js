import ACTION_TYPES from './actionsType';

export const createContacts = newContact => ({
  type: ACTION_TYPES.CREATE_CONTACT,
  newContact,
});
