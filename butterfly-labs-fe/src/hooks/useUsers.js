import { useEffect, useState } from "react";
import { UserService } from "../services/UserService";

export function useUsers() {
    const [{users = [], error}, setData] = useState({ users: []})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getUsers()

        async function getUsers() {
            setIsLoading(true)
            const { data, error } = await UserService.list()
            setIsLoading(false)
            setData({ users: data ?? [], error })
        }
    }, [])
    
    return { users, error, isLoading };
}