// context API chua state global: user

import { createContext, useState } from "react";

type User = {
  name: string;
  avatar: string;
};

type Theme = "light" | "dark" ; 

interface ThemeContextType{ 
  theme: Theme;
  toggleTheme: () => void;
}

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const ThemeContext = createContext<ThemeContextType | null>(null);//bai4 lap7

export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>({ name: "dien06" ,avatar: "https://up.yimg.com/ib/th/id/OIP.uECZ4EpUQL--DuBWcMaAKgHaDy?pid=Api&rs=1&c=1&qlt=95&w=206&h=105" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const ThemeProvider = ({ children }: { children: any }) => {// bai 4
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};