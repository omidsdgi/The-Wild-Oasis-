import {useMutation} from "@tanstack/react-query";
import {signup as signupApi} from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useSignup() {
    const{mutate:signup,isLoading} = useMutation({
        mutationFn:signupApi,
        mutationKey:["signup"],
        onSuccess:(user)=> {
            toast.success("Account successful created! Please verify the new account from the user's email address.");
            console.log(user)
        }
    })
    return {signup, isLoading};
}