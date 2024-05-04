import { createContext, ReactNode, useContext, useState } from "react";

interface UserProps {
  nome: string
  email: string
  telefone: string
  role: false,
  senha: string
  confirmPassword: string
  token: string,
}

const initialUserState: UserProps = {
  nome: "",
  email: "",
  telefone: "",
  role: false, // Supondo que false indica um usuário comum, e true seria admin ou similar
  senha: "",
  confirmPassword: "",
  token: "", // Isso pode representar ausência de token
};

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextData {
  userLogged: UserProps;
  login: (user: UserProps) => void;
  logout: (id: number) => void;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined)

function AuthProvider({ children }: AuthProviderProps) {
  const [userLogged, setUserLogged] = useState<UserProps>(initialUserState);

  const login = (user : UserProps) => {
    setUserLogged(user)
  }

  const logout = () => {
    setUserLogged(initialUserState)
  };

  return (

    <AuthContext.Provider
      value={{
        userLogged,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context;
}

export { AuthProvider, useAuth }