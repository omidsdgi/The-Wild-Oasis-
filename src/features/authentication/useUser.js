import {useQuery} from "@tanstack/react-query";
import {gerCurrentUser} from "../../services/apiAuth.js";

export function useUser() {
    const {data:user, isLoading}=useQuery({
        queryKey:['user'],
        queryFn:gerCurrentUser
    });
    return{user, isLoading};
}