import { createContext } from 'react';

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const authInfo = {
    name: 'amal amal',
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

/**
 * 1. create context with null as default value
 * 2. Create Provider
 * 3. set a value with something (authInfo)
 * 4. [ attention Please !!!]
 * 5. use the authProvider in the main.jsx
 * 6. access the children inside the authprovider in the main.jsx
 * */
