import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateSetting as updateSettingApi} from "../../services/apiSettings.js";
import toast from "react-hot-toast";

export function useUpdateSetting() {
    const queryClient=useQueryClient();

    const {mutate:updateSetting, isLoading:isUpdating}=useMutation({
        mutationFn:updateSettingApi,
        onSuccess:()=>{
            toast.success("setting successfully Updated");
            queryClient.invalidateQueries({
                queryKey:["settings"]
            })
        }
    });
    return {isUpdating,updateSetting};
}