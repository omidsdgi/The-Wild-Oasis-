import {useMutation, useQueryClient} from "@tanstack/react-query";
import {login as loginApi} from "../../services/apiAuth.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const{mutate:login, isLoading}=useMutation({
        mutationFn:({email, password})=>loginApi ({email, password}),
        onSuccess:(user)=>{
            queryClient.setQueriesData(["user",user])
            console.log(user)
            navigate("/dashboard");
        },
        onError:(err)=>{
            console.log("Error",err);
            toast.error("Provided email or password are incorrect");
        }
    })
return {login,isLoading};
}
