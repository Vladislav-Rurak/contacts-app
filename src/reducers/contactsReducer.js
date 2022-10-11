const initialState = {
  contacts: [
    {
      name: 'Test',
      telNumber: '+380123456789',
      birthday: '2000-12-01',
      isFavorite: false,
    },
  ],
  isFetching: false,
  error: null,
};

const contactsReducer = (state = initialState, action) => {
  const { type } = state;
  switch (type) {
    default:
      return state;
  }
};

export default contactsReducer;
