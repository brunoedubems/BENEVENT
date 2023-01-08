import { createContext, useContext} from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    async function signIn({email, password}) {
    
    }

    return(
        <AuthContext.Provider value={{email: 'bruno@gmail.com'}}>
            { children }
        </AuthContext.Provider>
    )
};

function useAuth() {
const context = useContext(AuthContext);
return context;

}

export { AuthProvider, useAuth};


