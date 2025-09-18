import {useQuery} from "@tanstack/react-query";
import {getSettings} from "../../services/apiSettings.js";

export function useSettings (){
    const{isLoading,data:settings,error}=useQuery({
        queryFn:getSettings,
        queryKey:["settings"]
    })
    return {isLoading,settings,error}
}