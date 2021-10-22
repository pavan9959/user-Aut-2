export const data = (state = false, action) => {
  switch (action.type) {
    case "login": {
      return true;
    }
    default: {
      return state;
    }
  }
};

export const log = (state = false, action) => {
  switch (action.type) {
    case "logout": {
      return true;
    }
    default: {
      return state;
    }
  }
};
