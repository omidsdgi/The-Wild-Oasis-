import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateCurrentUser} from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useUpdateUser() {
    const queryClient=useQueryClient();

    const{mutate:updateUser,isLoading:isUpdating} =useMutation({
        mutationFn:updateCurrentUser,
        onSuccess:()=>{
            toast.success("User Account successfully Updated");
            queryClient.invalidateQueries({queryKey:["user"]})
        },
        onError:(error)=>toast.error(error.message),
    })
    return {updateUser,isUpdating};
}