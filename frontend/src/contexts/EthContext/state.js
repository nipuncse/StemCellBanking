const actions = {
  init: "INIT",
  upate: "UPDATE",
  add: "ADD",
  delete: "DELETE",
};

const initialState = {
  artifact: null,
  web3: null,
  accounts: null,
  networkID: null,
  contract: null,
  isloggedin: false,
  userID: "",
  email: "",
  displayName: "",
  accessToken: null,
  photoURL: "",
  uid: null,
};

const reducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case actions.init:
      return { ...state, ...data };
    case actions.upate:
      return { ...state, ...data };
    default:
      throw new Error("Undefined reducer action type");
  }
};

export { actions, initialState, reducer };
