import { createContext, useState } from "react"

const UserContext = createContext({
    name: "",
    email: "",
    id: -99,
    isLoggedIn: false,
    setUser: (name: string, email: string, id: number, isLoggedIn: boolean) => { }
});

interface User {
    name: string;
    email: string;
    id: number;
    isLoggedIn?: boolean;
    logIn?: (isLoggedIn: boolean) => void;
}
export function UserProvider({ children }: any) {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [id, setId] = useState<number>(-99)

    const setUser = (name: string, email: string, id: number, isLoggedIn: boolean) => {
        setLoggedIn(isLoggedIn)
        setName(name)
        setEmail(email)
        setId(id)
    }
    return (
        <UserContext.Provider value={{ name, email, id, isLoggedIn, setUser }}>
            {children}
        </UserContext.Provider>
    )
} export default UserContext;