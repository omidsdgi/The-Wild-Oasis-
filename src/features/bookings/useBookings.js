import {useQuery} from "@tanstack/react-query";
import {getBookings} from "../../services/apiBookings.js";

export function useBookings() {
        const{
            isLoading,
            data,
            error
        } =useQuery({
            queryKey:["bookings"],
            queryFn:getBookings,
        })
    return {isLoading,bookings:data || [],error}
}

