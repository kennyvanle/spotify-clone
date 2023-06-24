"use client"

import { MyUserContextProvider } from "@/hooks/useUser";

interface userProviderProps {
    children: React.ReactNode;
}

const userProvider: React.FC<userProviderProps> = ({
    children
}) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}

export default userProvider;