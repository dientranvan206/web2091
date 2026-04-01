import { createContext, useState } from "react";


type User ={
    name:string,
    avatar:string
};

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>({name:"dien",avatar:"https://up.yimg.com/ib/th/id/OIP.zucHf6V9DG9ybeYiEIFn1gHaEK?pid=Api&rs=1&c=1&qlt=95&w=211&h=118"});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};